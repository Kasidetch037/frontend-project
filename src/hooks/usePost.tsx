import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'

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

  return { post }
}
export default usePost
