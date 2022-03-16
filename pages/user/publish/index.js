import { Formik } from 'formik'

import {
  Stack,
  Container,
  Input,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import { BoxStyled } from './styles'
import FileUpload from '../../../src/components/FileUpload'

const Publish = () => {
  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm">
          <Typography component="h1" fontSize='h4.fontSize' align="center">
            Publicar Anúncio
          </Typography>
          <Typography component="h6" variant="h6" fontWeight='light' align="center">
            Quanto mais detalhado, melhor!
          </Typography>
        </Container>
        <br /><br />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values)=> {
            console.log('ok, enviou o form', values)
          }}
        >
          {
            ({
              touched,
              values,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue
            }) => {


              return (
              <form noValidate onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{alignItems: 'center'}}>
                  <Container maxWidth="md">
                    <BoxStyled>

                      <Typography component="h6" variant="h6" gutterBottom>
                        Título do Anúncio:
                      </Typography>
                      <FormControl error={errors.title && touched.title} fullWidth>
                        <Input
                          name="title"
                          onChange={handleChange}
                          value={values.title}
                          placeholder="Ex.: Bicicleta Aro 18 com garantia"
                        />
                        <FormHelperText>
                          { touched.title && errors.title }
                        </FormHelperText>
                      </FormControl>

                      <br/><br/>
                      <Typography component="h6" variant="h6">
                        Categoria
                      </Typography>
                      <FormControl fullWidth error={errors.category && touched.category}>
                        <Select
                          displayEmpty
                          name="category"
                          value={values.category}
                          fullWidth
                          onChange={handleChange}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em>Selecione</em>
                            }
                            return selected
                          }}
                        >
                          <MenuItem disabled value=""><em>Selecione</em></MenuItem>
                          <MenuItem value="Bebê e Crianças">Bebê e Crianças</MenuItem>
                          <MenuItem value="Agricultura">Agricultura</MenuItem>
                          <MenuItem value="Moda">Moda</MenuItem>
                          <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                          <MenuItem value="Serviços">Serviços</MenuItem>
                          <MenuItem value="Lazer">Lazer</MenuItem>
                          <MenuItem value="Animais">Animais</MenuItem>
                          <MenuItem value="Móveis, Casa e Jardim">Móveis, Casa e Jardim</MenuItem>
                          <MenuItem value="imóveis">imóveis</MenuItem>
                          <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                          <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                          <MenuItem value="Esporte">Esporte</MenuItem>
                          <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                          <MenuItem value="Emprego">Emprego</MenuItem>
                          <MenuItem value="Outros">Outros</MenuItem>
                        </Select>
                        <FormHelperText>
                          {touched.category && errors.category}
                        </FormHelperText>
                      </FormControl>

                    </BoxStyled>
                  </Container>

                  <Container maxWidth="md">
                    <BoxStyled>
                      <FileUpload 
                        files={values.files}
                        errors={errors.files}
                        touched={touched.files}
                        setFieldValue={setFieldValue}
                      />
                      
                    </BoxStyled>
                  </Container>

                  <Container maxWidth="md">
                    <BoxStyled>
                      <Typography component="h6" variant="h6" gutterBottom>
                        Descrição
                      </Typography>
                      <Typography component="div" variant="body2">
                        Escreva os detalhes do que está vendendo:
                      </Typography>
                      <FormControl error={errors.description && touched.description} fullWidth>
                        <OutlinedInput
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          multiline
                          rows={6}
                        />
                        <FormHelperText>
                          {touched.description && errors.description}
                        </FormHelperText>
                      </FormControl>
                    </BoxStyled>
                  </Container>

                  <Container maxWidth="md">
                    <BoxStyled>
                      <Typography component="h6" variant="h6">
                        Preço
                      </Typography>
                      <br />
                      <FormControl error={errors.price && touched.price} fullWidth>
                        <InputLabel>Valor</InputLabel>
                        <OutlinedInput
                          name="price"
                          onChange={handleChange}
                          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                          label="Valor"
                        />
                        <FormHelperText>
                          {touched.price && errors.price}
                        </FormHelperText>
                      </FormControl>
                    </BoxStyled>
                  </Container>

                  <Container maxWidth="md">
                    <BoxStyled>
                      <Typography component="h6" variant="h6" gutterBottom>
                        Dados de Contato:
                      </Typography>
                      <Stack spacing={1}>
                        <FormControl error={errors.name && touched.name} fullWidth size="small">
                          <InputLabel htmlFor="name">Nome</InputLabel>
                          <OutlinedInput 
                            label="Nome"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            value={values.name}
                          />
                          <FormHelperText>
                            {touched.name && errors.name}
                          </FormHelperText>
                        </FormControl>

                        <FormControl error={errors.email && touched.email} fullWidth size="small">
                          <InputLabel htmlFor="email">E-mail</InputLabel>
                          <OutlinedInput 
                            label="E-mail"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                          />
                          <FormHelperText>
                            {touched.email && errors.email}
                          </FormHelperText>
                        </FormControl>

                        <FormControl error={errors.phone && touched.phone} fullWidth size="small">
                          <InputLabel htmlFor="phone">Telefone</InputLabel>
                          <OutlinedInput 
                            label="Telefone"
                            name="phone"
                            id="phone"
                            onChange={handleChange}
                            value={values.phone}
                          />
                          <FormHelperText>
                            {touched.phone && errors.phone}
                          </FormHelperText>
                        </FormControl>
                      </Stack>
                    </BoxStyled>
                  </Container>
                </Stack>

                <Container maxWidth="md" sx={{textAlign: "right"}}>
                  <Button type="submit" sx={{margin: '20px 0'}} variant="contained" >
                    Publicar Anúncio
                  </Button>
                </Container>
              </form>
            )}
          }
        </Formik>
      </TemplateDefault>
    </>
  )
}

Publish.requireAuth = true

export default Publish