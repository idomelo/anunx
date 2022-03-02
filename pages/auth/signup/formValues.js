import * as yup from 'yup'

export const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
}

export const validationSchema = yup.object().shape({
  name: yup.string()
    .required('*Campo Obrigatório')
    .min(3, 'Por favor, preencha ao menos 3 caracteres.')
    .max(25, 'Nome muito grande'),
  email: yup.string()
    .required('*Campo Obrigatório')
    .email('Digite um e-mail válido'),
  password: yup.string()
    .required('*A senha é Obrigatória')
    .min(6, 'mínimo de 6 caracteres'),
  passwordConf: yup.string()
  .required('*Confirmação Obrigatória')
  .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
})