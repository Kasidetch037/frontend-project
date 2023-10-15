import { AppBar, Button, CssBaseline, Link, Toolbar, Tooltip, Typography } from '@mui/material'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, username, logout } = useAuth()

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar sx={{ flexWrap: 'wrap', gap: 1 }}>
          <Link color="inherit" underline="none" href="/" sx={{ pt: 0.5 }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
            </svg>
          </Link>

          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, pl: 0 }}>
            <Link href="/" underline="none" color="inherit">
              Learnhub
            </Link>
          </Typography>

          {isLoggedIn ? <Button color="inherit">{username}</Button> : <Typography></Typography>}

          {isLoggedIn ? (
            <>
              <nav>
                <Link href="/create" color="inherit">
                  <Tooltip title="Upload" color="inherit">
                    <Button>Upload</Button>
                  </Tooltip>
                </Link>
              </nav>
              <Link href="/" color="inherit" border={1} borderRadius={3}>
                <Tooltip title="Login" color="inherit" onClick={logout}>
                  <Button>Log out</Button>
                </Tooltip>
              </Link>
            </>
          ) : (
            <Link href="/login" color="inherit" border={1} borderRadius={3}>
              <Tooltip title="Login" color="inherit">
                <Button>Login</Button>
              </Tooltip>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Navbar
