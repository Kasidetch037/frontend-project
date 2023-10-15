import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, ContentsDTO, CreateContentDTO } from '../types/dto'

const usePosts = () => {
  const [posts, setPosts] = useState<ContentDTO[] | null>(null)
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')

        setPosts(res.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  //* สร้าง async fucn (เพราะต้อง fetch) ที่โพส content ใหม่
  // ส่ง argu เป็น new... อันใหม่ แทนอันเดิม
  //? เปลี่ยนจากใส่ในนี้ไปใส่ใน create?
  const createPost = async (contentBody: CreateContentDTO) => {
    const token = localStorage.getItem('token')

    try {
      await axios.post('https://api.learnhub.thanayut.in.th/content', contentBody, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  return { posts, createPost }
}
export default usePosts
