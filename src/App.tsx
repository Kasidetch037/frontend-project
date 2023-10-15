import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Edit2 from './pages/Edit2'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import PostDetail from './pages/PostDetail'
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      <Navbar />
      {/* guardedroute แบ่งเป็น 3 กลุ่ม คือ 1.หน้าที่เข้าได้ทุกคน 2.หน้าที่เข้าถึงได้แค่ตอน login 3.หน้าที่ login แล้ว ไม่ควรเข้าถึงได้อีก */}
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/register" element={<Register />} />

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit2 />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
