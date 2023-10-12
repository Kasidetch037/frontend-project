import classes from './Header.module.css'

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <div>
          <h1>Learnhub</h1>
        </div>

        <div>
          <p>Hub for educational video</p>
        </div>
      </div>
    </>
  )
}
export default Header
