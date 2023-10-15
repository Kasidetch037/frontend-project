// import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import ReactPlayer from 'react-player'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

export default function PostDetail() {
  const { id } = useParams()
  const { post } = usePost(id || '1')

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
                </CardContent>

                <Box
                  m={1}
                  //margin
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Button sx={{ height: 40 }}>Edit</Button>
                </Box>
              </Card>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </main>
  )
}

{
  /* <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={post.thumbnailUrl}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {post.videoTitle}
            </Typography>
            <Typography>{post.comment}</Typography>
            <Typography color="#9e9e9e">{post.postedBy.username}</Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid> */
}
