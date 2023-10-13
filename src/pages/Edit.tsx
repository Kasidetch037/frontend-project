import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Create() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
            </svg>
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit content
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb: 20 }}>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              // id="email"
              label="Comment"
              // name="email"
              // autoComplete="email"
              autoFocus
            /> */}
            <TextField
              id="outlined-multiline-static"
              margin="normal"
              fullWidth
              multiline
              required
              rows={4}
              defaultValue="Default Value"
            />

            {/* <ReactStars color2={'#ffd700'} /> */}

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 14 }}>
              Edit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

{
  /* <ReactStars color2={'#ffd700'} /> */
}
