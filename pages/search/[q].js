import Link from 'next/link'
import slugify from 'slugify'

import {
  Container,
  Box,
  Stack,
  Grid,
  Typography,
  Link as LinkMUI,
  Button,
} from '@mui/material'

import { styled } from '@mui/material/styles'

import TemplateDefault from '../../src/templates/Default'
import productsModel from '../../src/models/products'
import SearchBar from '../../src/components/SearchBar'
import { formatCurrency } from '../../src/utils/currency'
import Card from '../../src/components/Card'
import { BoxStyled } from '../../src/components/BoxStyled'


function List({ products, q }) {
  return (
    <TemplateDefault>
      <Stack spacing={3} sx={{alignItems: 'center'}}>
        <Container maxWidth="md">

          {/* Barra de Pesquisa */}
          <SearchBar />
        </Container>
      
        <Container maxWidth="md">
          <BoxStyled>
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
                    <Grid key={product._id} item xs={6} sm={6} md={4}>
                      <Link passHref href={`/${category}/${title}/${product._id}`}>
                        <LinkMUI sx={{cursor: 'pointer', textDecoration: 'none', }}>
                          <Card 
                            image={product.files[0].url}
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
            <Link passHref href='/'>
              <Button variant="outlined" color="secondary" sx={{ mt: 4 }}>
                Voltar
              </Button>
            </Link>
          </BoxStyled>
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