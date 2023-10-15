import Content from '../components/Content'
import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'

const Home = () => {
  const { posts } = usePosts()

  return (
    <>
      <div className={classes.header}>
        <div>
          <h1>Learnhub</h1>
        </div>

        <div>
          <p>Hub for educational video</p>
        </div>

        <div>
          {posts &&
            posts.map((content) => {
              return <Content key={content.id} content={content} />
            })}
        </div>
      </div>
    </>
  )
}
export default Home
