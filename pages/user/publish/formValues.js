import * as yup from 'yup'

export const initialValues = { 
  title: '',
  category: '',
  description:'',
  price: '',
  name: '',
  local: '',
  files: [],
}

export const validationSchema = yup.object().shape({
  title: yup.string()
    .required('*Campo Obrigatório')
    .min(6, 'Escreva um Título maior')
    .max(50, 'Título muito grande'),
  category: yup.string()
    .required('*Campo Obrigatório'),
  description: yup.string()
    .required('*Campo Obrigatório')
    .min(25, 'Escreva uma Descrição maior, com no mínimo 25 caracteres')
    .max(400, 'Descrição muito grande, no máximo 400 caracteres são permitidos'),
  price: yup.number()
    .typeError('Este campo deve conter apenas números')
    .required('*Campo Obrigatório')
    .positive('O preço deve ser maior que zero'),
  name: yup.string()
    .required('*Campo Obrigatório'),
  local: yup.string()
    .required('*Campo Obrigatório'),
  files: yup.array()
    .required('*Campo Obrigatório')
    .min(1, 'Envie pelo menos 1 foto')
})