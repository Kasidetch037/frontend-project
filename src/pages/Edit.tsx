import classes from './Create.module.css'
import ReactStars from 'react-stars'

const Edit = () => {
  return (
    <div className={classes.block}>
      <div>
        <h1>Edit content</h1>
      </div>

      <div>
        <form className={classes.form}>
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
        <button>Edit</button>
      </div>
    </div>
  )
}
export default Edit
