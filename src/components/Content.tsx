import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { ContentDTO } from '../types/dto'
import { Link } from 'react-router-dom'

interface IContentProps {
  content: ContentDTO
}

const Content = ({ content }: IContentProps) => {
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
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {content.videoTitle}
          </Typography>
          <Typography>{content.comment}</Typography>
          <Typography color="#9e9e9e" align="right">
            {content.postedBy.username}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/post/${content.id}`}>
            <Button size="large">View</Button>
          </Link>
          <Link to={`/post/${content.id}`}>
            <Button size="large">Edit</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Content

// import { ContentDTO } from '../types/dto'

// interface IContentProps {
//   content: ContentDTO
// }

// const Content = ({ content }: IContentProps) => {
//   console.log(content.id)
//   return (
//     <>
//       <div>
//         <p>id: {content.id}</p>
//         <p>title: {content.videoTitle}</p>
//         <img src={content.thumbnailUrl} />
//       </div>
//     </>
//   )
// }

// export default Content

// {
//   /* <ReactPlayer url="https://www.youtube.com/watch?v=VmLEB0AGLcg" controls /> */
// }
