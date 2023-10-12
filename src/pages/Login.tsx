import classes from './Create.module.css'

const Login = () => {
  return (
    <div className={classes.block}>
      <div>
        <h1>Login</h1>
      </div>

      <div>
        <form className={classes.form}>
          <label>Username</label>
          <input />
          <label>Password</label>
          <input />
        </form>
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  )
}
export default Login
