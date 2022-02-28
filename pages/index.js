import TemplateDefault from '../src/templates/Default'
import theme from '../src/theme'

import {
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

export default function Home() {
  return (
    <TemplateDefault>
      <Container maxWidth="md" sx={{padding: theme.spacing(8, 10, 6)}}>
        <Typography component="h1" variant="h3" align="center">
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
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image={'https://source.unsplash.com/random'}
                sx={{ paddingTop: '56%'}}
                title="Título da Imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 80,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image={'https://source.unsplash.com/random'}
                sx={{ paddingTop: '56%'}}
                title="Título da Imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 80,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image={'https://source.unsplash.com/random'}
                sx={{ paddingTop: '56%'}}
                title="Título da Imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 80,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image={'https://source.unsplash.com/random'}
                sx={{ paddingTop: '56%'}}
                title="Título da Imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 80,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </TemplateDefault>
  )
}