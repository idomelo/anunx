import CarouselProducts from '../../../src/components/CarouselProducts'
import MapContainer from '../../../src/components/MapContainer'

import {
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  CardHeader,
  CardMedia,
  Avatar,
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import productsModel from '../../../src/models/products'
import dbConnect from '../../../src/utils/dbConnect'
import { formatCurrency } from '../../../src/utils/currency'
import { BoxStyled } from '../../../src/components/BoxStyled'

function Product({ product }) {
  
  const created_at = new Date(product.createdAt)
  const localDate = created_at.toLocaleDateString()
  const Localhour = created_at.toLocaleTimeString()

  const date = `${localDate} às ${Localhour}`

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>

              {/* Products Gallery Images */}
              <BoxStyled>
                <CarouselProducts productFiles={product.files}/>
              </BoxStyled>

              <BoxStyled textAlign="left">
                <Typography component="span" variant="caption">Publicado em {date}</Typography>
                <Typography component="h4" variant="h4" sx={{ margin: '15px 0'}}>{product.title}</Typography>
                <Typography component="h4" variant="h4" sx={{ fontWeight: "bold", mb: 2, }}>{formatCurrency(product.price)}</Typography>
                <Chip label={product.category} />
              </BoxStyled>

              <BoxStyled textAlign="left" sx={{ overflow: 'auto' }}>
                <Typography component="h6" variant="h6">Descrição</Typography>
                <Typography component="p" variant="body2">
                  {product.description}
                </Typography>
              </BoxStyled>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            
            <Stack spacing={3}>
              
              <BoxStyled>
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
              </BoxStyled>

              <BoxStyled sx={{height: '60vh'}}>
                <Typography component="h6" variant="h6" gutterBottom>Local do Anúncio</Typography>

                <MapContainer local={product.user.local} />

              </BoxStyled>
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