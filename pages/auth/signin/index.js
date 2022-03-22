import * as React from 'react'
import { useState, useEffect } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

import {
  Avatar,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Alert,
  Button,
  Container,
} from '@mui/material'

import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
} from '@mui/icons-material'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import ButtonLoading from '../../../src/components/ButtonLoading'
import useToasty from '../../../src/contexts/Toasty'
import { BoxStyled } from '../signup/style'

export default function Signin({ APP_URL }) {
  const [ bgImage, setBgImage ] = useState('')
  const { setToasty } = useToasty()
  const router = useRouter()

  const { data: session, status } = useSession()
  console.log(session, status, router.query.i)

  const handleGoogleLogin = () => {
    signIn('google', {
      callbackUrl: `${APP_URL}/user/dashboard`
    })
  }

  const handleFacebookLogin = () => {
    signIn('facebook', {
      callbackUrl: `${APP_URL}/user/dashboard`
    })
  }

  const handleFormSubmit = async values => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `${APP_URL}/user/dashboard`
    })
  }
  
  return (
   
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <BoxStyled>
        <Link passHref href='/'>
          <Avatar sx={{ m: 1}} >
            <Image src='/shop.svg' layout='fill' alt='' />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          Acesse a sua conta
        </Typography>

        <Grid container spacing={2} sx={{mt: 1, mb: 2,}}>
          <Grid item xs={12}>
            <ButtonLoading 
              text="Entrar com o facebook"
              onClick={handleFacebookLogin}
              startIcon={<FacebookIcon />}
              fullWidth={true}
            />
          </Grid>

          <Grid item xs={12}>
            <ButtonLoading 
              text="Entrar com o Google"
              onClick={handleGoogleLogin}
              startIcon={<GoogleIcon />}
              fullWidth={true}
            />
          </Grid>
        </Grid>

        <Divider sx={{width: '100%'}}> ou </Divider>

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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt:2 }}>
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

                  <FormControlLabel sx={{mb: 3}}
                    control={<Checkbox value="remember" color="primary" />}
                    label="Lembrar de mim"
                  />

                  <ButtonLoading
                    text="Entrar"
                    loading={isSubmitting}
                  />

                  <Grid container sx={{mt: 2}}>
                    <Grid item xs={12} md={6}>
                      <Link href="#!" variant="body2" color="secondary">
                        Esqueceu sua Senha?
                      </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="body2">
                        Não tem uma conta?
                        <Link href="#!" color="secondary">
                          {" Cadastre-se"}
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              )
            }
          }
        </Formik>
      </BoxStyled>
    </Container>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      APP_URL: process.env.APP_URL
    }
  }
}