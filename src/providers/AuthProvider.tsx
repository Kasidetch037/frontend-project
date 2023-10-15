import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

//context ที่จะแชร์ state ให้ทั้ง App

// มีแค่ children ตัวเดียว type ReactNode(ก็คือ พวก jsx ทั้งหลาย)
// เสร็จแล้ว เอา interface ไปใส่ใน {children}
interface IAuthProviderProps {
  children: ReactNode
}

//ของข้างใน interface จะเป็น value ที่เราอยากแชร์ไปทั้ง App
//โดยเราอยากแชร์ isLoggedIn ที่มี type boolean
interface IAuthContextType {
  isLoggedIn: boolean
  //username อาจเป็น null ได้ ถ้าไม่ได้ login
  username: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}
//เมื่อสร้างเสร็จแล้ว ตอน createContext ต้องใส่ generic type ให้มัน ว่า context เรา จะแชร์อะไรบ้าง

//เป็น null เพราะยังไม่ได้เอา context ไป apply ที่ไหน
const AuthContext = createContext<IAuthContextType | null>(null)
//ที่ต้อง | null เพราะว่า ตอนแรกยังเป็น null อยู่
//มีวิธีการเช็คว่า เราครอบ AuthProvider ไว้ที่ App จริงหรือไม่ โดยจะสร้าง useAuth
export const useAuth = () => {
  const context = useContext(AuthContext)

  //!เป็นการบอกว่า เราสร้าง useAuth ออกมาแล้ว และเราขอใช้หน่อย
  //!โดย ของใน context เป็น obj ที่ข้างในมี property isLogedin อยู่แล้ว

  if (!context) throw new Error('useAuth must be use within AuthProvider')
  //! ถ้า context ยังเป็น null อยุ่ แสดงว่า user หรือ dev ยังไม่ได้ครอบ App ด้วย AuthProvider
  //ดังนั้น ถ้ายังไม่ครอบ ตัว context จะ return null
  //โดยถ้าเป็น null จะให้ throw

  return context
  //return context เพื่อทำให้ useAuth กลายเป็น hook ที่ return state ทั้งหมด และสามารถเช็คได้ โดย *ข้างบน*
}
//? ที่ต้อง export useAuth ออกไป เพราะ เราต้องการจะเรียก context ทุกอย่าง ให้เหมือน hook ตัวนึง แต่เป็น hook ที่ return context ที่เป็นค่าส่วนกลางทั้งหมด

//hook นี้จะพิเศษตรงที่ มันจะ return context แปลว่า มัน return ของที่เราแชร์ทั้งหมดออกไป (ไม่ใช่ hook private)
//ต่างกับพวก use hook ธรรมดา(privare hook / state แบบ private) ตรงที่ use hook ธรรมดา เราเรียกที่ component นึง อีก component นึงมันไม่ได้เปลี่ยนตาม(useState ข้ามหน้า)
//แต่พอเป็น useAuth ที่เราจะ return Authcontext เข้าไปอีกที มันเลยเป็น hook ที่จะคืน state ส่วนกลางเข้าไปทั้งหมด

//AuthProvider มีหน้าที่ไปครอบทั้ง App เพื่อที่จะบอกว่า เราจะสามารถแชร์ state ไปทั่วทั้ง App ได้ / ให้อนุญาตให้เอา state ส่วนกลางมาใช้
// มอง AuthProvider เป็นเหมือน component นึง ที่จะเอาไปครอบทั้ง App
// รับ props ชื่อ children แล้วใส่ interface IAuthProviderProps (บรรทัด 7)

//! เราตั้ง useState [isLoggedIn, setIsLoggedIn] = useState<boolean>(false) ให้ false เป็นค่าเริ่มต้น
//เมื่อ refresh ใหม่ เลยย้อนกลับไปเป็น false เหมือนเดิม
//วิธีแก้ คือ ต้องเช็คว่า มี token อยู่ใน localStorage มั้ย
//โดย สร้างตัวแปร token แล้วให้มันไป getItem จาก localStorage
//เอาของ (token) จาก localStorage.setItem( --> 'token' <-- , res.data.accessToken) มา
const token = localStorage.getItem('token')
//ถ้ามีของอยู่ ตัวแปร token ก็ของไปเอาของ (accessToken) มา
//TODO จะเช็คว่ามีของในตัวแปร token มั้ย โดยการ (!!token) ที่ [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
//* โดย ! อันแรก จะเช็คว่า isLoggedin เป็นค่าว่าง (""/ string เปล่า) ถ้าได้ true แปลว่าไม่มี token (เป็น string เปล่า )
//* !! กลับค่า true ข้างบนที่ token ว่าง ให้เป็น false แปลว่า ยังไม่ได้ login
// ถ้ามี token ให้ isLoggedin เป็น true
// ถ้าไม่มี ให้ isLoggedin เป็น false
//* จาก const token = localStorage.getItem('token') และ (!!token) จะแปลได้ว่า
// ถ้า browser เจอว่ามี token อยู่แล้วใน localStorage (login แล้ว)
//* ! แรก จะกลับค่า true เป็น false ---> !! อันสอง กลับค่าอีกครั้ง จาก false จะกลายเป็น true

//TODO เก็บ state username เพิ่ม getItem จาก key username
const user = localStorage.getItem('username')

const AuthProvider = ({ children }: IAuthProviderProps) => {
  // มอง AuthProvider ให้เป็นเหมือน component นึง ดังนั้น เราสามารถเขียน logic ได้ปกติ เหมือน omponent ธรรมดา

  const navigate = useNavigate()

  // login ตอนแรกยังไม่ login เลยยังเป็น false
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  //จากที่ยังขาดว่าจะแชร์อะไร ตอนนี้อยากแชร์ state isLoggedIn สิ่งที่ต้องทำคือ เอา state ไปแชร์ใส่ <AuthContext.Provider>
  //ซึ่ง <AuthContext.Provider> จะรับ attribute นึงที่ชื่อว่า value
  //โดยของที่อยู่ใน value ก็คือ ของที่เราจะแชร์ออกไปที่ context

  //TODO เก็บ state username เพิ่ม
  const [username, setUsername] = useState<string | null>(user)

  //TODO สร้อง function login ใน AuthProvider
  //! เป็น async เพราะ ต้องยิง api
  //login เป็น fucntion ที่รับ username , password ที่กรอกเข้ามา
  //ดังนั้น จึงรับ 2 อันนี้ เป็น argument ใน fucntion login
  //* ก่อนทำ ต้องรู้ DTO ก่อน ว่าเส้น login รับอะไร
  /* interface LoginDTO {
    username: string
    password: string
    } */
  //* ส่วนสิ่งที่คืนมา คือ accessToken
  /* interface CredentialDTO {
     accessToken: string
   }*/
  const login = async (username: string, password: string) => {
    //ทำให้ body ตรงกับฝั่งที่หลังบ้านต้องการ
    //จึงต้องรวบ username , password เป็น obj ก้อนเดียว ตาม LoginDTO
    const loginBody: LoginDTO = { username, password }
    //* เขียนย่อ ของ obj => {username: username,password: password}
    //เสร็จแล้วก็ยิง api POST เพราะต้อง login
    //! โดยที่ method POST รับ 3 argument axios.post('1api_endpoint', 2loginBody,  3{headers: {'Content-Type':'application/json'}} ) อ่าน doc ของ axios
    //* สิ่งที่ api เส้นนี้ส่งกลับมาคือ ของ ที่เป็น accessToken หน้าตาเหมือน CredentialDTO
    try {
      const res = await axios.post<CredentialDTO>('https://api.learnhub.thanayut.in.th/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      //axios wrap ทุกอย่างไว้ใน data เลยต้อง .data

      //TODO จากนั้น เอา accessToken มาเก็บใน localStorage
      //setItem รับ 2 argu (1key, value) โดยในที่นี้จะให้ key ชื่อ 'token' และ value เป็น accessToken ที่ fetch มา
      localStorage.setItem('token', res.data.accessToken)
      //เก็บ token ได้แล้ว แปลว่า login ผ่านแล้ว

      //TODO เก็บ state username เพิ่ม
      localStorage.setItem('username', username)

      //ดังนั้น จึง setIsLoggedIn ให้เป็น true เพราะ login แล้ว
      setIsLoggedIn(true)

      //TODO เก็บ state username เพิ่ม
      setUsername(username)
      toast.success('Login success')
      navigate('/')
    } catch (err) {
      toast.error('Invalid username or password')
    }
  }

  const logout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
    setUsername(null)
    navigate('/')
  }
  //* ตอนแรกแชร์แค่ state isLoggedin แต่ตอนนี้อยากแชร์ fucntion login ออกไปด้วย เพราะอยากไปเรียก login() ที่อื่น (ในหน้า login)
  //* เลยต้อง return login() ออกไปด้วย ใน
  //* return <AuthContext.Provider value={{ isLoggedIn , login}}>{children}</AuthContext.Provider>
  //แต่จะขึ้นแดง เพราะยังไม่ได้ใส่ type ให้มัน ใน interface IAuthContextType {isLoggedIn: boolean}
  //type ของ login() ให้ดูจาก เอาเมาส์ไปชี้ที่ login() แล้วดู type แล้วก๊อปไปวาง * เอาไปให้หมด => ด้วย

  //AuthContext เป็น context ส่วน .Provider เป็น property นึง ที่จะทำหน้าที่เป็นเหมือน html tag ตัวนึง
  //{children} คือทั้ง App แล้วเราอยากครอบด้วย context ดังนั้น จะเอา {children} ไป render ข้างใน
  //"เอาทั้ง App มา render อยู่กึ่งกลาง <AuthContext.Provider>" เป็นการครอบ App ด้วย context
  //! value={} เป็น syntax ของ jsx,tsx แต่เวลาจะแชร์ value เราจะ wrap ทุกอย่างด้วย Obj อีกที
  //! ทำให้กลายเป็น ปีกกา 2 ชั้น value={ {*state obj*} }
  //TODO แชร์ state username ออกไป ใส่ type ให้ด้วย ใร IAuthContextType
  return <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>{children}</AuthContext.Provider>
  //! ขาด type ประเภทของ Obj อยากแชร์อะไรบ้าง เลยต้องสร้าง interface อีกอัน
  // ครอบเรียบร้อยแล้ว แต่ยังขาดว่า จะแชร์อะไรเข้าไปใน context บ้าง
}

// export component AuthProvider
export default AuthProvider
