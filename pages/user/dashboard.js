import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'

export default function Home() {
  return (
    <>
    <TemplateDefault>
      <Container maxWidth="sm" sx={{ padding: theme.spacing(8, 0, 6) }}>
        <Typography component="h4" variant="h3" align="center">
          Meus Anúncios
        </Typography>
        <Button variant="contained" sx={{ margin: '30px auto', display:'block'}}>
          Publicar Novo Anúncio
        </Button>
      </Container>

      <Container maxWidth="md">
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
              <CardActions>
                <Button size="small">Editar</Button>
                <Button size="small">Remover</Button>
              </CardActions>

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
              <CardActions>
                <Button size="small">Editar</Button>
                <Button size="small">Remover</Button>
              </CardActions>

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
              <CardActions>
                <Button size="small">Editar</Button>
                <Button size="small">Remover</Button>
              </CardActions>

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
              <CardActions>
                <Button size="small">Editar</Button>
                <Button size="small">Remover</Button>
              </CardActions>

            </Card>
          </Grid>

        </Grid>
      </Container>
    </TemplateDefault>
    </>
  )
}
