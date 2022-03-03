import { Formik } from 'formik'
import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import { BoxStyled } from './style'

import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default function SignUp() {

  return (
    <TemplateDefault>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <BoxStyled>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crie a sua conta. É grátis!
          </Typography>

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
              }) => {
                return (
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>

                      <Grid item xs={12}>
                        <FormControl fullWidth error={errors.name && touched.name}>
                          <InputLabel>Nome*</InputLabel>
                          <OutlinedInput 
                            name="name"
                            id="name"
                            value={values.name}
                            label="Nome*"
                            onChange={handleChange}
                          />
                          <FormHelperText>
                            { touched.name && errors.name }
                          </FormHelperText>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth error={errors.email && touched.email}>
                          <InputLabel>Email*</InputLabel>
                          <OutlinedInput 
                            name="email"
                            id="email"
                            type="email"
                            value={values.email}
                            label="Email*"
                            onChange={handleChange}
                          />
                          <FormHelperText>
                            { touched.email && errors.email }
                          </FormHelperText>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth error={errors.password && touched.password}>
                          <InputLabel>Crie uma Senha*</InputLabel>
                          <OutlinedInput 
                            name="password"
                            type="password"
                            value={values.password}
                            label="Crie uma Senha*"
                            onChange={handleChange}
                          />
                          <FormHelperText>
                            { touched.password && errors.password }
                          </FormHelperText>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                      <FormControl fullWidth error={errors.passwordConf && touched.passwordConf}>
                          <InputLabel>Confirme sua Senha*</InputLabel>
                          <OutlinedInput
                            name="passwordConf"
                            type="password"
                            value={values.passwordConf}
                            label="Confirme sua Senha*"
                            onChange={handleChange}
                          />
                          <FormHelperText>
                            { touched.passwordConf && errors.passwordConf }
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="Quero receber promoções e atualizações via email."
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      // disabled={isSubmitting}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Cadastre-se
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="#!" variant="body2">
                          Já tem uma conta? Entrar
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                )
              }
            }
          </Formik>
        </BoxStyled>
      </Container>
    </TemplateDefault>
  )
}