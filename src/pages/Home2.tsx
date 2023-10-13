import * as React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Content from '../components/Content'
import usePosts from '../hooks/usePost'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Album() {
  const { posts } = usePosts()

  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 0,
          }}
        >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="left" color="text.primary" gutterBottom>
              Learnhub
            </Typography>
            <Typography variant="h5" align="left" color="text.secondary" paragraph>
              Hub for educational videos
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center"></Stack>
          </Container>
        </Box>
        {/* Header */}
        <Container sx={{ py: 4 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4} columns={16}>
            {/* {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                </Card>
              </Grid>
            ))} */}
            {posts &&
              posts.map((content) => {
                return <Content key={content.id} content={content} />
              })}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  )
}
