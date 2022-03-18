import Link from 'next/link'
import slugify from 'slugify'

import {
  Container,
  Box,
  Stack,
  Grid,
  Typography,
  Link as LinkMUI,
} from '@mui/material'

import { styled } from '@mui/material/styles'

import TemplateDefault from '../../src/templates/Default'
import productsModel from '../../src/models/products'
import SearchBar from '../../src/components/SearchBar'
import { formatCurrency } from '../../src/utils/currency'
import Card from '../../src/components/Card'

const BoxStyledList = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  boxShadow:' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
}))


function List({ products, q }) {
  return (
    <TemplateDefault>
      <Stack spacing={3} sx={{alignItems: 'center'}}>
        <Container maxWidth="md">

          {/* Barra de Pesquisa */}
          <SearchBar />
        </Container>
      
        <Container maxWidth="md">
          <BoxStyledList>
            <Typography component="h6" variant="h6">Anúncios</Typography>
            <Typography component="span" variant="subtitle2">Encontrado(s) {products.length} anúncio(s) para o termo {`"${q}"`}</Typography>
            <br /><br />
            <Grid container spacing={3}>
              {
                products.map((product) => {
                  // cria url amigável para os produtos
                  const category = slugify(product.category, {
                    lower: true,
                  })
                  const title = slugify(product.title, {
                    lower: true, 
                  })

                  return (
                    <Grid key={product._id} item xs={12} sm={6} md={4}>
                      <Link passHref href={`/${category}/${title}/${product._id}`}>
                        <LinkMUI target='_blank' sx={{cursor: 'pointer', textDecoration: 'none', }}>
                          <Card 
                            image={`/uploads/${product.files[0].name}`}
                            title={product.title}
                            subtitle={formatCurrency(product.price)}
                          />
                        </LinkMUI>
                      </Link>
                    </Grid>
                  )
                })
              }
            </Grid>
          </BoxStyledList>
        </Container>
      </Stack>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { q } = query

  const products = await productsModel.find({
    $or: [
      { 
        title: { 
          $regex: q,
          $options: 'i',
        }
      },
      { 
        description: { 
          $regex: q,
          $options: 'i',
        }
      }
    ]
  })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      q,
    }
  }
} 

export default List