// import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import ReactPlayer from 'react-player'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import ReactStars from 'react-stars'
import { useAuth } from '../providers/AuthProvider'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import toast from 'react-hot-toast'
import { FormEvent } from 'react'
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

export default function PostDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { post, deletePost } = usePost(id || '1')
  const { username } = useAuth()

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

  if (!post) return

  return (
    <main>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1, pt: 10 }}>
          <ReactPlayer url={post.videoUrl} controls />

          <Grid item xs={12} sm={6} md={4}>
            <Stack direction="row" spacing={5} alignItems="center" pt={3}>
              <InsertEmoticonIcon sx={{ fontSize: 60 }} color="primary" />
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mt: 3, width: '100%' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.videoTitle}
                  </Typography>
                  <Typography>{post.comment}</Typography>
                  <Typography color="#9e9e9e" align="right">
                    {post.postedBy.username}
                  </Typography>
                  <ReactStars value={post.rating} edit={false} size={30} />
                </CardContent>

                {username === post.postedBy.username ? (
                  <Box
                    m={1}
                    //margin
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Link to={`/edit/${id}`}>
                      <Button type="submit" variant="contained" sx={{ mx: 1, mb: 1 }}>
                        <EditIcon />
                      </Button>
                    </Link>
                    <Button onClick={handleDelete} variant="contained" sx={{ mr: 1, mb: 1 }} color="error">
                      <DeleteIcon />
                    </Button>
                  </Box>
                ) : (
                  <Typography mt={1}></Typography>
                )}
              </Card>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </main>
  )
}
