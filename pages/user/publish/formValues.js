import * as yup from 'yup'

export const initialValues = { 
  title: '',
  category: '',
  description:'',
  price: '',
  email: '',
  name: '',
  phone: '',
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
    .min(25, 'Escreva uma Descrição maior')
    .max(100, 'Descrição muito grande'),
  price: yup.number()
    .typeError('Este campo deve conter apenas números')
    .required('*Campo Obrigatório')
    .positive('O preço deve ser maior que zero'),
  email: yup.string()
    .required('*Campo Obrigatório')
    .email('Digite um e-mail válido'),
  name: yup.string()
    .required('*Campo Obrigatório'),
  phone: yup.number()
    .typeError('Este campo deve conter apenas números')
    .positive('O número não pode ser negativo')
    .required('*Campo Obrigatório'),
  files: yup.array()
  .required('*Campo Obrigatório')
  .min(1, 'Envie pelo menos 1 foto'),
})