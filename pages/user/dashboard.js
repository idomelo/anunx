import {
  Button,
  Container,
  Typography,
  Grid,
} from '@mui/material'

import { getSession } from 'next-auth/react'
import dbConnect from '../../src/utils/dbConnect'

import productsModel  from '../../src/models/products.js'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { formatCurrency } from '../../src/utils/currency'

const Dashboard = ({ products }) => {

  console.log(products)
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

          {
            products.map(product => (
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <Card 
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={formatCurrency(product.price)}
                  actions={
                    <>
                      <Button size="small">Editar</Button>
                      <Button size="small">Remover</Button>
                    </>
                  }
                />
              </Grid>
            ))
          }

        </Grid>
      </Container>
    </TemplateDefault>
    </>
  )
}

Dashboard.requireAuth = true

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  await dbConnect()

  const products = await productsModel.find({ 'user.id': session.userId })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Dashboard
