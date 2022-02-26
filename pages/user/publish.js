import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'

import {
  Stack,
  Container,
  TextField,
  Typography,
  Select,
  Button,
} from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  boxShadow:' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
}))

export default function publish() {
  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm" sx={{padding: theme.spacing(8, 0, 6)}}>
          <Typography component="h1" variant="h3" align="center">
            Publicar Anúncio
          </Typography>
          <Typography component="h6" variant="h6" align="center">
            Quanto mais detalhado, melhor!
          </Typography>
        </Container>

        <Stack spacing={2} sx={{alignItems: 'center'}}>
          <Container maxWidth="md">
            <BoxStyled>
              <Typography component="h6" variant="h6" gutterBottom>
                Título do Anúncio:
              </Typography>
              <TextField
                size="small"
                variant="standard"
                placeholder="Ex.: Bicicleta Aro 18 com garantia"
                fullWidth
              />

              <br/><br/>
              <Typography component="h6" variant="h6">
                Categoria
              </Typography>
              <Select 
                native
                variant='standard'
                value=""
                fullWidth
                onChange={() => {}}
                inputProps={{
                  name: 'age',
                }}
              >
                <option value="">Selecione</option>
                <option value={1}>Bebê e Crianças</option>
                <option value={1}>Agricultura</option>
                <option value={1}>Moda</option>
                <option value={1}>Carros, Motos e Barcos</option>
                <option value={1}>Serviços</option>
                <option value={1}>Lazer</option>
                <option value={1}>Animais</option>
                <option value={1}>Móveis, Casa e Jardim</option>
                <option value={1}>imóveis</option>
                <option value={1}>Equipamentos e Ferramentas</option>
                <option value={1}>Celulares e Tablets</option>
                <option value={1}>Esporte</option>
                <option value={1}>Tecnologia</option>
                <option value={1}>Emprego</option>
                <option value={1}>Outros</option>
              </Select>
            </BoxStyled>
          </Container>

          <Container maxWidth="md">
            <BoxStyled>
              <Typography component="h6" variant="h6" gutterBottom>
                Imagens
              </Typography>
              <Typography component="h6" variant="body2">
                A Primeira imagem é a foto Principal do seu Anúncio.
              </Typography>
            </BoxStyled>
          </Container>

          <Container maxWidth="md">
            <BoxStyled>
              <Typography component="h6" variant="h6" gutterBottom>
                Descrição
              </Typography>
              <Typography component="h6" variant="body2">
                Escreva os detalhes do que está vendendo:
              </Typography>
              <TextField 
                multiline
                rows={6}
                variant="outlined"
                fullWidth
              />
            </BoxStyled>
          </Container>

          <Container maxWidth="md">
            <BoxStyled>
              <Typography component="h6" variant="h6" gutterBottom>
                Dados de Contato:
              </Typography>
              <Stack spacing={1}>
                <TextField 
                  label="Nome"
                  size="small"
                  fullWidth
                />
                <TextField 
                  label="Email"
                  size="small"
                  fullWidth
                />
                <TextField 
                  label="Telefone"
                  size="small"
                  fullWidth
                />

              </Stack>
            </BoxStyled>
          </Container>
        </Stack>

        <Container maxWidth="md" sx={{textAlign: "right"}}>
          <Button sx={{margin: '20px 0'}} variant="contained">
            Publicar Anúncio
          </Button>
        </Container>
      </TemplateDefault>
    </>
  )
}