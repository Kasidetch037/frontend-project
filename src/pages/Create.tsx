import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ReactStars from 'react-stars'
import { useNavigate } from 'react-router-dom'
import usePosts from '../hooks/usePosts'
import { useState, FormEvent } from 'react'
import toast from 'react-hot-toast'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Create() {
  const navigate = useNavigate()
  const { createPost } = usePosts()
  const [rating, setRating] = useState<number>(0)
  const [url, setUrl] = useState<string>('')
  const [comment, setComment] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost({
        videoUrl: url,
        comment,
        rating,
      })
      toast.success('Succesfully created!')
      navigate('/')
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
    }
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
              <path d="M5 4h14v2H5zm0 10h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2v-6H9.83L12 9.83 14.17 12H13z" />
            </svg>
          </Avatar>
          <Typography component="h1" variant="h5">
            Upload new video
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb: 18 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Video URL"
              autoFocus
              onChange={(e) => setUrl(e.target.value)}
              //! ใส่ onSubmit={handleSubmit} ใน input
              onSubmit={handleSubmit}
            />
            <TextField
              margin="normal"
              multiline
              required
              rows={4}
              fullWidth
              label="Comment"
              onChange={(e) => setComment(e.target.value)}
              onSubmit={handleSubmit}
            />
            <ReactStars
              count={5}
              value={rating}
              onChange={(rating: number) => setRating(rating)}
              size={24}
              color2={'#ffd700'}
              half="false"
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 14 }}>
              Post
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
