import { ContentDTO } from '../types/dto'

interface IContentProps {
  Cardpic: ContentDTO
}

const Cardpic = ({ Cardpic }: IContentProps) => {
  return (
    <>
      <img src={Cardpic.thumbnailUrl} />
    </>
  )
}

export default Cardpic

{
  /* <ReactPlayer url="https://www.youtube.com/watch?v=VmLEB0AGLcg" controls /> */
}
