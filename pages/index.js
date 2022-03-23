import Link from 'next/link'
import slugify from 'slugify'

import {
  Container,
  Typography,
  Grid,
  Link as LinkMUI,
} from '@mui/material'

import dbConnect from '../src/utils/dbConnect'
import TemplateDefault from '../src/templates/Default'
import theme from '../src/theme'
import SearchBar from '../src/components/SearchBar'
import Card from '../src/components/Card'
import productsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'

const Home = ({ products }) => {
  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography component="h1" variant='h3' align="center">
          O que deseja encontrar?
        </Typography>

        {/* Barra de Pesquisa */}
        <SearchBar />

      </Container>
      <Container maxWidth="md" sx={{padding: theme.spacing(8, 4, 6)}}>
        <Typography component="h2" variant="h4" align="center">
          Destaques
        </Typography>
        <br />
        <Grid container spacing={2}>
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
                <Grid key={product._id} item xs={6} sm={4}>
                  <Link passHref href={`/${category}/${title}/${product._id}`}>
                    <LinkMUI sx={{cursor: 'pointer', textDecoration: 'none', }}>
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

      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const products = await productsModel.aggregate([{ 
    $sample: { size: 10 } 
  }])

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
} 

export default Home