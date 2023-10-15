import * as React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Content from '../components/Content'
import usePosts from '../hooks/usePosts'
import { useAuth } from '../providers/AuthProvider'
import { Typography } from '@mui/material'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Home() {
  const { posts } = usePosts()
  const { isLoggedIn, username } = useAuth()

  console.log('from home', isLoggedIn)
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Grid container spacing={4} px={10} py={10}>
          <Grid item xs={6}>
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Learnhub
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Hub for educational videos
            </Typography>
          </Grid>

          {isLoggedIn ? (
            <Typography component="h6" variant="h3" align="center" color="#64b5f6" my="auto" width="100">
              Welcome {username} !
            </Typography>
          ) : (
            <></>
          )}
        </Grid>
        {/* Header */}
        <Container sx={{ py: 4 }} maxWidth="xl">
          <Grid container spacing={4} columns={16}>
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
