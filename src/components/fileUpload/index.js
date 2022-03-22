import {useDropzone} from 'react-dropzone'
import { 
  Box, 
  IconButton, 
  Typography 
} from '@mui/material'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import {
  Dropzone,
  Thumb,
  Mask,
} from './styles.js'

export default function FileUpload({ files, errors, touched, setFieldValue }) {
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        // Para cada arquivo, cria objeto com arquivo recebido e cria URL para acessá-lo
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFieldValue('files', [
        ...files,  
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = fileName => {
    const newFileState = files.filter(file => file.name !== fileName)
    setFieldValue('files', newFileState)
  }


  return (
    <>
      <Typography component="h6" variant="h6" gutterBottom>
        Imagens
      </Typography>
      <Typography component="h6" variant="body2">
        A Primeira imagem é a Principal do seu Anúncio.
      </Typography>
      {
        errors && touched 
          ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
          : null
      }
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '10px',
        alignContent: 'center',
      }}>
        <Dropzone error={touched  ? errors : null} {...getRootProps()}>
          <input name="files" {...getInputProps()}/>
          <Typography variant="body2" color={errors && touched ? "error" : "textPrimary"}>
            Clique para adicionar ou arraste uma imagem.
          </Typography>
        </Dropzone>
        {
          files.map((file, index) => (
            <Thumb 
              key={file.name}
              sx={{
                backgroundImage: `url(${file.preview})`,
                backgroundColor: 'primary.main',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
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
    </>
  )
}