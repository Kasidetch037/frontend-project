import { AppBar, Button, CssBaseline, Link, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
          </svg>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, pl: 1 }}>
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
