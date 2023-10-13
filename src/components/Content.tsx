import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { ContentDTO } from '../types/dto'

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
        </CardContent>
        <CardActions>
          <Button size="large">View</Button>
          <Button size="large">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Content

{
  /* <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>This is a media card. You can use this section to describe the content.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card> */
}

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

// {
//   /* <div>
//           {posts &&
//             posts.map((content) => {
//               return <Content key={content.id} content={content} />
//             })}
//         </div> */
// }

// export default Content

// {
//   /* <ReactPlayer url="https://www.youtube.com/watch?v=VmLEB0AGLcg" controls /> */
// }
