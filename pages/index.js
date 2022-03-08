import TemplateDefault from '../src/templates/Default'
import theme from '../src/theme'
import Card from '../src/components/Card'

import {
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Grid,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

export default function Home() {
  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography component="h1" fontSize='h4.fontSize' align="center">
          O que deseja encontrar?
        </Typography>

        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mt: 3 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            fullWidth
            inputProps={{ 'aria-label': 'Ex.: Iphone 7 com garantia' }}
            placeholder="Ex.: Iphone 7 com garantia"
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

      </Container>
      <Container maxWidth="md" sx={{padding: theme.spacing(8, 10, 6)}}>
        <Typography component="h2" variant="h4" align="center">
          Destaques
        </Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 80,00"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 80,00"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 80,00"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 80,00"
            />
          </Grid>
        </Grid>

      </Container>
    </TemplateDefault>
  )
}