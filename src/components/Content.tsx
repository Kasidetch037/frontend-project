import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { ContentDTO } from '../types/dto'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import ReactStars from 'react-stars'

interface IContentProps {
  content: ContentDTO
}

// {content.rating}

const Content = ({ content }: IContentProps) => {
  const { username } = useAuth()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={content.thumbnailUrl}
        />
        <CardContent sx={{ flexGrow: 1, mb: -3 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {content.videoTitle}
          </Typography>
          <Typography>{content.comment}</Typography>
          <Typography color="#9e9e9e" align="right">
            {content.postedBy.username}
          </Typography>
          <ReactStars value={content.rating} edit={false} size={30} />
        </CardContent>
        <CardActions>
          <Link to={`/post/${content.id}`}>
            <Button size="large">View</Button>
          </Link>
          {username === content.postedBy.username ? (
            <Link to={`/edit/${content.id}`}>
              <Button size="large">Edit</Button>
            </Link>
          ) : (
            <CardActions></CardActions>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Content
