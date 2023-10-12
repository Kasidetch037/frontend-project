import classes from './Create.module.css'
import ReactStars from 'react-stars'

const Create = () => {
  return (
    <div className={classes.block}>
      <div>
        <h1>Create new content</h1>
      </div>

      <div>
        <form className={classes.form}>
          <label>Video URL</label>
          <input />
          <label>Comment</label>
          <input />
        </form>
      </div>

      <div className={classes.rating}>
        <div>
          <p>Rating</p>
        </div>
        <div>
          <ReactStars color2={'#ffd700'} />
        </div>
      </div>

      <div>
        <button>Create</button>
      </div>
    </div>
  )
}
export default Create
