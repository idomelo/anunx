import { useState } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import { getSession } from "next-auth/react"
import { useRouter } from 'next/router'

import {
  Stack,
  Container,
  Input,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import initialValues, { validationSchema } from '../../../src/utils/formValuesPublish'
import BoxStyled from '../../../src/components/BoxStyled'
import FileUpload from '../../../src/components/FileUpload'
import useToasty from '../../../src/contexts/Toasty'
import ButtonLoading from '../../../src/components/ButtonLoading'

import { statesList } from '../../../src/utils/statesList'

const Publish = ({ userId, image}) => {
  const [ loadingButton, setLoadingButton ] = useState(false)
  const { setToasty } = useToasty()
  const router = useRouter()

  const formValues = {
    ...initialValues,
    userId,
    image,
  }

  const handleSuccess = () => {
    setLoadingButton(false)
    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio cadastrado com sucesso!',
    })

    router.push('/user/dashboard')
  }

  const handleError = (err) => {
    console.log(err)
    setLoadingButton(false)
    setToasty({
      open: true,
      severity: 'error',
      text: 'Ops! Ocorreu um erro, tente novamente mais tarde.',
    })
  }


  const handleFormSubmit = (values) => {
    const formData = new FormData()
    setLoadingButton(true)

    for(let field in values) {
      if(field === 'files') {
        values.files.forEach(file => {
          formData.append('files', file)
        })

      } else {
        formData.append(field, values[field])
      }
    }

    axios.post('/api/products/add', formData)
      .then(handleSuccess)
      .catch( err => {
        handleError(err)
      })
  }

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
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {
            ({
              touched,
              values,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting,
            }) => {


              return (
              <form noValidate onSubmit={handleSubmit}>
                <Input type='hidden' name='userId' value={values.userId}/>
                <Input type='hidden' name='image' value={values.image}/>

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
                      <Typography component="h6" variant="h6">
                        Dados de Contato:
                      </Typography>
                      <Typography component="div" variant="body2" gutterBottom sx={{mb:2}}>
                        Os visitantes poderão ver esses dados no seu Anúncio.
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

                        <FormControl fullWidth size="small" error={errors.local && touched.local}>
                          <Select
                            displayEmpty
                            name="local"
                            value={values.local}
                            fullWidth
                            onChange={handleChange}
                            renderValue={(selected) => {
                              if (selected.length === 0) {
                                return <em>Localidade do Anúncio(selecione um Estado <strong>ALEATÓRIO</strong>)</em>
                              }
                              return selected
                            }}
                          > 
                            <MenuItem disabled value=""><em>Localidade do Anúncio(selecione um Estado <strong>ALEATÓRIO</strong>)</em></MenuItem>
                            
                            {
                              Object.keys(statesList).map((state) => (
                                <MenuItem key={state} value={state}>{state}</MenuItem>
                              ))
                            }

                          </Select>
                          <FormHelperText>
                            {touched.local && errors.local}
                          </FormHelperText>
                        </FormControl>

                      </Stack>
                    </BoxStyled>
                  </Container>
                </Stack>

                <Container maxWidth="md" sx={{display: 'flex', textAlign: "right"}}>
                  <Container sx={{ display: 'flex', justifyContent: 'right', margin: '20px 0'}}>
                    <ButtonLoading 
                      text="Publicar Anúncio"
                      loading={loadingButton}
                    />
                  </Container>
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

export async function getServerSideProps({ req }) {
  const { user, userId } = await getSession({ req })

  return {
    props: {
      userId,
      image: user.image? user.image : null
    }
  }
}

export default Publish