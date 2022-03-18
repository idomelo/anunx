import Carousel from 'react-material-ui-carousel'

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

import TemplateDefault from '../../../src/templates/Default'
import productsModel from '../../../src/models/products'
import dbConnect from '../../../src/utils/dbConnect'
import { formatCurrency } from '../../../src/utils/currency'

const BoxStyledProduct = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  boxShadow:' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
}))

const ImageWrapper = styled(Card)(({ theme }) => ({
  height: '100%',

  '& .cardMedia': {
    paddingTop: '56%'
  },
}))

function Product({ product }) {
  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Stack spacing={3}>
              <BoxStyledProduct>
                <Carousel
                  autoPlay= {false}
                  animation="slide"
                  navButtonsAlwaysVisible={true}
                  navButtonsProps={{
                    style: {
                      color: 'white'
                    },
                  }}
                >
                  {
                    product.files.map(file => ( 
                      <ImageWrapper key={file.name}>
                        <CardMedia 
                          className="cardMedia"
                          image={`/uploads/${file.name}`}
                          title={product.title}
                        />
                      </ImageWrapper>
                    ))
                  }

                </Carousel>
              </BoxStyledProduct>

              <BoxStyledProduct textAlign="left">
                <Typography component="span" variant="caption">Publicado em - TO DO</Typography>
                <Typography component="h4" variant="h4" sx={{ margin: '15px 0'}}>{product.title}</Typography>
                <Typography component="h4" variant="h4" sx={{ fontWeight: "bold", mb: 2, }}>{formatCurrency(product.price)}</Typography>
                <Chip label={product.category} />
              </BoxStyledProduct>

              <BoxStyledProduct textAlign="left">
                <Typography component="h6" variant="h6">Descrição</Typography>
                <Typography component="p" variant="body2">
                  {product.description}
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
                    <Avatar src={product.user.image}>
                      {product.user.image || product.user.name[0]}
                    </Avatar>
                  }
                  title={product.user.name}
                  subheader={product.user.email}
                />
                <CardMedia 
                  image={product.user.image}
                  title={product.user.name}
                />
              </Card>

              <BoxStyledProduct>
                <Typography component="h6" variant="h6">Localização - TO DO</Typography>
              </BoxStyledProduct>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query

  await dbConnect()

  const product = await productsModel.findOne({ _id: id })

  return {
    props:{
      product: JSON.parse(JSON.stringify(product))
    }
  }
}

export default Product