import { ContentDTO } from '../types/dto'

interface IContentProps {
  content: ContentDTO
}

const Content = ({ content }: IContentProps) => {
  console.log(content.id)
  return (
    <>
      <div>
        <p>id: {content.id}</p>
        <p>title: {content.videoTitle}</p>
        <img src={content.thumbnailUrl} />
      </div>
    </>
  )
}

{
  /* <div>
          {posts &&
            posts.map((content) => {
              return <Content key={content.id} content={content} />
            })}
        </div> */
}

export default Content

{
  /* <ReactPlayer url="https://www.youtube.com/watch?v=VmLEB0AGLcg" controls /> */
}
