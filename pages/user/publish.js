import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import {useDropzone} from 'react-dropzone'

import TemplateDefault from '../../src/templates/Default'

import {
  Stack,
  Container,
  TextField,
  Input,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from '@mui/material'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'

const validationSchema = yup.object().shape({
  title: yup.string()
    .required('*Campo Obrigatório')
    .min(6, 'Escreva um Título maior')
    .max(50, 'Título muito grande'),
  category: yup.string()
  .required('*Campo Obrigatório'),
  description: yup.string()
    .required('*Campo Obrigatório')
    .min(25, 'Escreva uma Descrição maior')
    .max(100, 'Descrição muito grande'),
})

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  boxShadow:' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
}))

const Dropzone = styled(Box)(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: 200,
  height: 150,
  margin: '0 10px 10px 0',
  backgroundColor: theme.palette.background.default,
  border: '2px dashed black',
}))

const Thumb = styled(Box)(() => ({
  position: 'relative',
  width: 200,
  height: 150,
  backgroundSize: 'cover',
  margin: '0 15px 15px 0',
  backgroundPosition: 'center center',

  '&:hover .mask': {
    display: 'flex',
  },

  '& .mainImage': {
  position: 'absolute',
  backgroundColor: 'blue',
  padding: '6px 10px',
  bottom: 0,
  left: 0,
  }
}))

const Mask = styled(Box)(() => ({
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
}))


export default function publish() {
  const [files, setFiles] = useState([])

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        // Para cada arquivo, cria objeto com arquivo recebido e cria URL para acessá-lo
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFiles([
        ...files,  
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = fileName => {
    const newFileState = files.filter(file => file.name !== fileName)
    setFiles(newFileState)
  }

  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h3" align="center">
            Publicar Anúncio
          </Typography>
          <Typography component="h6" variant="h6" align="center">
            Quanto mais detalhado, melhor!
          </Typography>
        </Container>
        <br /><br />

        <Formik
        initialValues={{ 
          title: '',
          category: '',
          description:'',
        }}
        validationSchema={validationSchema}
        onSubmit={(values)=> {
          console.log('ok, enviou o form', values)
        }}
        >
          {
            ({
              values,
              errors,
              handleChange,
              handleSubmit,
            }) => {
              return (
              <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{alignItems: 'center'}}>
                  <Container maxWidth="md">
                    <BoxStyled>

                      <Typography component="h6" variant="h6" gutterBottom>
                        Título do Anúncio:
                      </Typography>
                      <FormControl error={Boolean(errors.title)} fullWidth>
                        <Input
                          name="title"
                          onChange={handleChange}
                          value={values.title}
                          placeholder="Ex.: Bicicleta Aro 18 com garantia"
                        />
                        <FormHelperText>
                          {errors.title}
                        </FormHelperText>
                      </FormControl>

                      <br/><br/>
                      <Typography component="h6" variant="h6">
                        Categoria
                      </Typography>
                      <FormControl fullWidth error={Boolean(errors.category)}>
                        <Select
                          name="category"
                          value={values.category}
                          fullWidth
                          onChange={handleChange}
                        >
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
                          {errors.category}
                        </FormHelperText>
                      </FormControl>

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

                      <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '10px',
                        alignContent: 'center',
                      }}>
                        <Dropzone {...getRootProps()}>
                          <input {...getInputProps()}/>
                          <Typography variant="body2">
                            Clique para adicionar ou arraste uma imagem.
                          </Typography>
                        </Dropzone>
                        {
                          files.map((file, index) => (
                            <Thumb 
                              key={file.name}
                              sx={{backgroundImage: `url(${file.preview})`}}
                            >
                              {
                                index === 0 ?
                                  <Box className="mainImage">
                                    <Typography variant="body2" color="secondary">
                                      Principal
                                    </Typography>
                                  </Box>
                                : null
                              }
                              <Mask className="mask">
                                <IconButton color="secondary" size="large" onClick={() => handleRemoveFile(file.name)}>
                                  <DeleteForeverIcon />
                                </IconButton>
                              </Mask>
                            </Thumb>
                          ))
                        }
                      </Box>
                      
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
                      <FormControl error={Boolean(errors.description)} fullWidth>
                        <TextField
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          multiline
                          rows={6}
                        />
                        <FormHelperText>
                          {errors.description}
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
                      <FormControl fullWidth variant="outlined">
                        <InputLabel>Valor</InputLabel>
                        <OutlinedInput 
                          onChange={() => {}}
                          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                          label="Valor"
                        />
                      </FormControl>
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