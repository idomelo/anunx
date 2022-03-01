import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import {
  Container,
  Box,
  Stack,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Typography,
} from '@mui/material'

import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

const BoxStyledList = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  boxShadow:' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
}))

export default function List() {
  return (
    <TemplateDefault>
      <Stack spacing={3} sx={{alignItems: 'center'}}>
        <Container maxWidth="md">
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
      
        <Container maxWidth="md">
          <BoxStyledList>
            <Typography component="h6" variant="h6">Anúncios</Typography>
            <Typography component="span" variant="subtitle2">Encontrados 300 Anúncios</Typography>
            <br /><br />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  image={'https://source.unsplash.com/random'}
                  title="Produto X"
                  subtitle="R$ 80,00"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  image={'https://source.unsplash.com/random'}
                  title="Produto X"
                  subtitle="R$ 80,00"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  image={'https://source.unsplash.com/random'}
                  title="Produto X"
                  subtitle="R$ 80,00"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://source.unsplash.com/random'}
                  title="Produto X"
                  subtitle="R$ 80,00"
                />
              </Grid>
            </Grid>
          </BoxStyledList>
        </Container>
      </Stack>
    </TemplateDefault>
  )
}