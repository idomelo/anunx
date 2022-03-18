import Link from 'next/link'
import slugify from 'slugify'
import TemplateDefault from '../src/templates/Default'
import theme from '../src/theme'
import Card from '../src/components/Card'

import {
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Link as LinkMUI,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import dbConnect from '../src/utils/dbConnect'
import productsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'

const Home = ({ products }) => {
  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography component="h1" fontSize='h4.fontSize' align="center">
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

      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const products = await productsModel.aggregate([{ 
    $sample: { size: 6 } 
  }])

  console.log(products)

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
} 

export default Home