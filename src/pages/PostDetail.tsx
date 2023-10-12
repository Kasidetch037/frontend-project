import classes from './PostDetail.module.css'
import ReactPlayer from 'react-player'
import ReactStars from 'react-stars'

const PostDetail = () => {
  return (
    <div className={classes.body}>
      <div className={classes.postdetail}>
        <div>
          <h1>Video title</h1>
          <p className={classes.poster}>poster</p>
        </div>

        <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=VmLEB0AGLcg" controls />
        </div>

        <div className={classes.commentBox}>
          <div className="comment">
            <div>Good</div>
          </div>

          <div className={classes.right}>
            <div>
              <ReactStars color2={'#ffd700'} />
            </div>

            <div>
              <p>username</p>
            </div>

            <div>
              <p>12/13/23</p>
            </div>

            <div>
              <p>(Updated on 13/13/23)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PostDetail
