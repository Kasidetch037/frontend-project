import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Login() {
  //เรียก login() จาก context
  const { login } = useAuth()

  //username, pass ตอนยังไม่ login
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    //handleSubmit ต้องไปเรียก login() ที่เอามาจาก context
    try {
      //login() รับ 2 argu คือ username,password
      await login(username, password)
    } catch (err) {
      console.log(err)
    }
  }
  //* พ่น accessToken ออกมา

  return (
    <ThemeProvider theme={defaultTheme}>
      <Toaster position="top-center" reverseOrder={true} />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://images-ext-1.discordapp.net/external/GzmxaafrIxskgBd7tNk1YQsIGHh48SElFUbyLMet0yU/%3Fw%3D740%26t%3Dst%3D1697333831~exp%3D1697334431~hmac%3D9a3e5fdf895d82097dc54a8b610b74d8afe7e3f7a7d130e9410746430ec9b435/https/img.freepik.com/free-vector/abstract-mesh-background_1217-1026.jpg?width=936&height=936)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
