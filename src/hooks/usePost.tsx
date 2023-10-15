import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, UpdateContentDTO } from '../types/dto'

const usePost = (id: string) => {
  // เปลี่ยนจาก ContentDTO[] เป็น ContentDTO
  const [post, setPost] = useState<ContentDTO | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)

        setPost(res.data)
        console.log(res)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [id])

  const editPost = async (editBody: UpdateContentDTO) => {
    const token = localStorage.getItem('token')
    try {
      await axios.patch(`https://api.learnhub.thanayut.in.th/content/${id}`, editBody, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  const deletePost = async () => {
    const token = localStorage.getItem('token')
    try {
      await axios.delete(`https://api.learnhub.thanayut.in.th/content/${id}`, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  return { post, editPost, deletePost }
}
export default usePost
