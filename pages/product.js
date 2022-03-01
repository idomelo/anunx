import {
  Container,
  Grid,
  Stack,
  Box,
  Typography,
  Chip,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
} from '@mui/material'

import { styled } from '@mui/material/styles'

import TemplateDefault from '../src/templates/Default'

const BoxStyledProduct = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  boxShadow:' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
}))

export default function Product() {
  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Stack spacing={3}>
              <BoxStyledProduct>
                Carrossel
              </BoxStyledProduct>

              <BoxStyledProduct textAlign="left">
                <Typography component="span" variant="caption">Publicado em 30 de Janeiro de 2022</Typography>
                <Typography component="h4" variant="h4" sx={{ margin: '15px 0'}}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                <Typography component="h4" variant="h4" sx={{ fontWeight: "bold", mb: 2, }}>R$ 50.000,00</Typography>
                <Chip label="Categoria" />
              </BoxStyledProduct>

              <BoxStyledProduct textAlign="left">
                <Typography component="h6" variant="h6">Descrição</Typography>
                <Typography component="p" variant="body2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Typography>
              </BoxStyledProduct>
            </Stack>
          </Grid>

          <Grid item xs={4}>
            <Stack spacing={3}>
              <Card sx={{
                padding: 2,
                boxShadow:' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
              }}>
                <CardHeader
                  avatar={
                    <Avatar>I</Avatar>
                  }
                  title="Ido Melo"
                  subheader="teste@gmail.com"
                />
                <CardMedia 
                  image="https://source.unsplash.com/random"
                  title="Ido Melo"
                />
              </Card>

              <BoxStyledProduct>
                <Typography component="h6" variant="h6">Localização</Typography>
              </BoxStyledProduct>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}