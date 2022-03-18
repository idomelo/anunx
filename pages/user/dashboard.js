import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import {
  Button,
  Container,
  Typography,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

import { getSession } from 'next-auth/react'
import dbConnect from '../../src/utils/dbConnect'

import productsModel  from '../../src/models/products.js'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { formatCurrency } from '../../src/utils/currency'
import useToasy from '../../src/contexts/Toasty'

const Dashboard = ({ products }) => {
  const [ productId, setProductId ] = useState()
  const [ removedProducts, setRemovedProducts ] = useState([])
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const { setToasty } = useToasy()

  const handleCloseModal = () => setOpenConfirmModal(false)

  const handleClickRemove = (productId) => {
    setProductId(productId)
    setOpenConfirmModal(true)
  }

  const handleSuccess = () => {
    setOpenConfirmModal(false)
    setRemovedProducts([ ...removedProducts, productId ])

    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com sucesso!',
    })
  }
  const handleError = () => {
    setOpenConfirmModal(false)
    setToasty({
      open: true,
      severity: 'error',
      text: 'Ocorreu um erro! tente novamente mais tarde.',
    })
  }

  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
    .then(handleSuccess)
    .catch(handleError)
  }

  console.log(products)
  return (
    <>
    <TemplateDefault>

    <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>
          Deseja realmente excluir este Anúncio?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta ação não poderá ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={handleConfirmRemove} autoFocus>
            Remover anúncio
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="sm" sx={{textAlign: 'center', width: 'fit-content'}}>
        <Typography component="h1" fontSize='h4.fontSize' align="center">
          Meus Anúncios
        </Typography>
        <Link href={'/user/publish'} passHref>
          <Button variant="contained" sx={{ margin: '30px auto 50px auto', display:'block'}}>
            Publicar Novo Anúncio
          </Button>
        </Link>
      </Container>

      <Container maxWidth="md">

        {/* Exibir "nenhum anuncio publicado" se não houver nenhum anúncio */}
        {
          products.length === 0 && (
            <Typography component="div" variant="body1" color="textPrimary" align="center" gutterBottom>
              Nenhum Anúncio por aqui... é hora de desapegar e ser feliz! :)
            </Typography>
          )
        }

        <Grid container spacing={4}>

        {/* Exibir anúncios publicados na dashboard */}
          {
            products.map(product => {
              if (removedProducts.includes(product._id)) return null

              return (
                <Grid key={product._id} item xs={12} sm={6} md={4}>
                  <Card 
                    image={`/uploads/${product.files[0].name}`}
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                    actions={
                      <>
                        <Button size="small">Editar</Button>
                        <Button size="small" onClick={() => handleClickRemove(product._id)}>Remover</Button>
                      </>
                    }
                  />
                </Grid>
              )
            }) 
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
