// import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import ReactPlayer from 'react-player'
import ReactStars from 'react-stars'
import { useAuth } from '../providers/AuthProvider'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import EditIcon from '@mui/icons-material/Edit'
import toast from 'react-hot-toast'
import { FormEvent, useState } from 'react'

// const ratingChanged = (newRating) => {
//   console.log(newRating)
// }

// render(<ReactStars
//   count={5},
//   onChange={ratingChanged},
//   size={24},
//   color2={'#ffd700'} />,

//   document.getElementById('where-to-render')
// );

export default function Edit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { post, editPost, deletePost } = usePost(id || '1')
  const { username } = useAuth()
  const [rating, setRating] = useState<number>(0)

  const [comment, setComment] = useState<string>('')

  if (!post) return

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await editPost({
        comment,
        rating,
      })
      toast.success('Succesfully edit!')
      navigate('/')
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
    }
  }

  const handleDelete = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await deletePost()
      toast.success('Deleted!', {
        icon: '🗑️',
      })
      navigate('/')
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
    }
  }

  return (
    <main>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1, pt: 10 }}>
          <ReactPlayer url={post.videoUrl} controls />

          <Grid item xs={12} sm={6} md={4}>
            <Stack direction="row" spacing={5} alignItems="center" pt={3}>
              <EditIcon sx={{ fontSize: 60 }} color="primary" />
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mt: 3, width: '100%' }}>
                <CardContent sx={{ flexGrow: 1 }} component="form" onSubmit={handleSubmit}>
                  <TextField
                    margin="normal"
                    multiline
                    required
                    rows={4}
                    fullWidth
                    label="Edit comment"
                    variant="filled"
                    defaultValue={post.comment}
                    onChange={(e) => setComment(e.target.value)}
                    onSubmit={handleSubmit}
                    //   onChange={(e) => setComment(e.target.value)}
                    //   onSubmit={handleSubmit}
                  />

                  <Typography color="#9e9e9e" align="right" mt={2}>
                    {post.postedBy.username}
                  </Typography>
                  <ReactStars
                    value={post.rating}
                    size={30}
                    onChange={(rating: number) => setRating(rating)}
                    half="false"
                  />

                  {username === post.postedBy.username ? (
                    <Box
                      m={1}
                      //margin
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                    >
                      <Button type="submit" variant="contained" sx={{ mx: 1, mb: -2 }} color="success">
                        <CheckIcon />
                      </Button>

                      <Button onClick={handleDelete} variant="contained" sx={{ mr: -1, mb: -2 }} color="error">
                        <DeleteIcon />
                      </Button>
                    </Box>
                  ) : (
                    <Typography mt={1}></Typography>
                  )}
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </main>
  )
}
