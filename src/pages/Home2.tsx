import * as React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Content from '../components/Content'
import usePosts from '../hooks/usePosts'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Album() {
  const { posts } = usePosts()

  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
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
