import * as yup from 'yup'

export const initialValues = {
  email: '',
  password: '',
}

export const validationSchema = yup.object().shape({
  email: yup.string()
    .required('*Campo Obrigatório')
    .email('Digite um e-mail válido'),
  password: yup.string()
    .required('*A senha é Obrigatória')
    .min(6, 'mínimo de 6 caracteres'),
})