import {
  Button,
  Container,
  Typography,
  Grid,
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

export default function Home() {
  return (
    <>
    <TemplateDefault>
      <Container maxWidth="sm" >
        <Typography component="h1" fontSize='h4.fontSize' align="center">
          Meus Anúncios
        </Typography>
        <Button variant="contained" sx={{ margin: '30px auto', display:'block'}}>
          Publicar Novo Anúncio
        </Button>
      </Container>

      <Container maxWidth="md">
        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 80,00"
              actions={
                <>
                  <Button size="small">Editar</Button>
                  <Button size="small">Remover</Button>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 80,00"
              actions={
                <>
                  <Button size="small">Editar</Button>
                  <Button size="small">Remover</Button>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 80,00"
              actions={
                <>
                  <Button size="small">Editar</Button>
                  <Button size="small">Remover</Button>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 80,00"
              actions={
                <>
                  <Button size="small">Editar</Button>
                  <Button size="small">Remover</Button>
                </>
              }
            />
          </Grid>

        </Grid>
      </Container>
    </TemplateDefault>
    </>
  )
}
