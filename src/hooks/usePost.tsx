import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, ContentsDTO } from '../types/dto'

const usePosts = () => {
  const [posts, setPosts] = useState<ContentDTO[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')

        setPosts(res.data.data)
        console.log(res)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return { posts }
}
export default usePosts
