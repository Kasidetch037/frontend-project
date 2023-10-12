import { AppBar, Button, CssBaseline, Link, Toolbar, Typography } from '@mui/material'

// const Navbar = () => {
//   return (
//     <>
//       <div className={classes.navbar}>
//         <div>
//           <p>Learnhub</p>
//         </div>

//         <div className={classes.menu}>
//           <p>Login</p>
//           <p>Register</p>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Navbar

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Learnhub
          </Typography>
          <nav>
            <Link variant="button" color="inherit" href="#" sx={{ my: 1, mx: 1.5 }}>
              Register
            </Link>
          </nav>
          <Button color="inherit" href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Navbar
