import { Box, Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

const ContainerFooter = styled(Container)(({ theme }) => ({
  borderTop: `1px solid ${ theme.palette.divider}`,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  }
}))

export default function Footer() {
  /* Depois adicionar Links */
  return (
    <ContainerFooter  maxWidth="lg" component="footer" sx={{ textAlign: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3} textAlign="center">
          <Box>
            <Link href="#!">
              <Typography color="textSecondary" variant="subtitle1">Ajuda e Contato</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} textAlign="center">
          <Box>
            <Link href="#!">
              <Typography color="textSecondary" variant="subtitle1">Dicas de Segurança</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} textAlign="center" >
          <Box>
            <Link href="#!">
              <Typography color="textSecondary" variant="subtitle1">Anunciar e Vender</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} textAlign="center" >
          <Box>
            <Link href="#!">
              <Typography color="textSecondary" variant="subtitle1">Plano Profissional</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </ContainerFooter>
  )
}