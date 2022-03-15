import * as React from 'react'
import { useState, useEffect } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"

import {
  Avatar,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Alert,
} from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import ButtonLoading from '../../../src/components/ButtonLoading'
import useToasty from '../../../src/contexts/Toasty'

export default function SignIn() {
  const [ bgImage, setBgImage ] = useState('')
  const { setToasty } = useToasty()
  const router = useRouter()

  const { data: session, status } = useSession()
  console.log(session, status, router.query.i)

  // useEffect((req, res) => {
  //   axios.get('https://api.iconscout.com/v3/search?query=ecommerce&product_type=item&asset=illustration&price=free&per_page=10&page=1&formats%5B%5D=svg&sort=relevant&styles%5B%5D=', {
  //     headers: {
  //       'Client-ID': '188996231667293'
  //     }
  //   }).then((res) => {
  //     const imagesList = res.data.response.items.data
  //     const randomIndex = Math.floor(Math.random() * imagesList.length)
  //     const randomImage = imagesList[randomIndex].urls.svg
  //     setBgImage(randomImage)
  //   })
  // }, [])

  const handleFormSubmit = async values => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://localhost:3000/user/dashboard'
    })
  }
  
  return (
   
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Acesse a sua conta
          </Typography>

          <Formik
          initialValues={initialValues}
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
              isSubmitting,
            }) => {
              return (
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  {
                    router.query.i === '1'
                      ? (
                        <Alert severity="error" sx={{ m: "20px 0"}}>
                          Email ou senha Inválidos
                        </Alert>
                      )
                      : null
                  }
                  <Grid container spacing={2}>

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
                          <InputLabel>Senha*</InputLabel>
                          <OutlinedInput 
                            name="password"
                            type="password"
                            value={values.password}
                            label="Senha*"
                            onChange={handleChange}
                          />
                          <FormHelperText>
                            { touched.password && errors.password }
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                  
                  </Grid>

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Lembrar de mim"
                  />

                  <ButtonLoading 
                    text="Entrar"
                    loading={isSubmitting}
                  />

                  <Grid container>
                    <Grid item xs>
                      <Link href="#!" variant="body2">
                        Esqueceu sua Senha?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#!" variant="body2">
                        {"Não tem uma conta? Cadastre-se"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              )
            }
          }
        </Formik>
        </Box>
      </Grid>
    </Grid>
  )
}