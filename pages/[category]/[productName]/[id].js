import CarouselProducts from '../../../src/components/CarouselProducts'
import MapContainer from './MapContainer'

import {
  Container,
  Grid,
  Stack,
  Box,
  Typography,
  Chip,
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
  boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
}))

function Product({ product }) {
  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>

              {/* Products Gallery Images */}
              <BoxStyledProduct>
                <CarouselProducts productFiles={product.files}/>
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

          <Grid item xs={12} md={4}>
            
            <Stack spacing={3}>
              
              <BoxStyledProduct>
                <Typography component="h6" variant="h6">Anunciante</Typography>
                <CardHeader
                  avatar={
                    <Avatar src={product.user.image}>
                      {product.user.image || product.user.name[0]}
                    </Avatar>
                  }
                  title={product.user.name}
                  subheader={product.user.local}
                />
                <CardMedia 
                  image={product.user.image}
                  title={product.user.name}
                />
              </BoxStyledProduct>

              <BoxStyledProduct sx={{height: '60vh'}}>
                <Typography component="h6" variant="h6" gutterBottom>Local do Anúncio</Typography>

                <MapContainer local={product.user.local} />

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