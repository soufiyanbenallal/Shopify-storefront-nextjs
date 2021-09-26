import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import Head from 'next/head';
import Layout from '../../src/layouts';


const Register = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main
          className="register-page"
          title="Register"
        >
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            justifyContent="center"
          >
            <Container >
            <Grid  spacing={3} container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} md={5}>
                  <Formik
                    initialValues={{
                      email: '',
                      firstName: '',
                      lastName: '',
                      password: '',
                      policy: false
                    }}
                    validationSchema={
                      Yup.object().shape({
                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                        firstName: Yup.string().max(255).required('First name is required'),
                        lastName: Yup.string().max(255).required('Last name is required'),
                        password: Yup.string().max(255).required('password is required'),
                        policy: Yup.boolean().oneOf([true], 'This field must be checked')
                      })
                    }
                    onSubmit={() => {
                      router.push('/')
                    }}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      values
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <Box mb={3}>
                          <Typography
                            color="textPrimary"
                            variant="h2"
                          >
                            Create new account
                          </Typography>
                        
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                          >
                            Use your email to create new account
                          </Typography>
                        </Box>
                        <TextField
                          error={Boolean(touched.firstName && errors.firstName)}
                          fullWidth
                          helperText={touched.firstName && errors.firstName}
                          label="First name"
                          margin="normal"
                          name="firstName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.lastName && errors.lastName)}
                          fullWidth
                          helperText={touched.lastName && errors.lastName}
                          label="Last name"
                          margin="normal"
                          name="lastName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.email && errors.email)}
                          fullWidth
                          helperText={touched.email && errors.email}
                          label="Email Address"
                          margin="normal"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          value={values.email}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.password && errors.password)}
                          fullWidth
                          helperText={touched.password && errors.password}
                          label="Password"
                          margin="normal"
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          value={values.password}
                          variant="outlined"
                        />
                        <Box
                          alignItems="center"
                          display="flex"
                          ml={-1}
                        >
                          <Checkbox
                            checked={values.policy}
                            name="policy"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            I have read the
                            {' '}
                            <Link href="/auth/login">
                              <a>Login</a>
                            </Link>
                          </Typography>
                        </Box>
                        {Boolean(touched.policy && errors.policy) && (
                          <FormHelperText error>
                            {errors.policy}
                          </FormHelperText>
                        )}
                        <Box my={2}>
                          <Button
                            color="primary"
                            disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                          >
                            Sign up now
                          </Button>
                        </Box>
                        <Typography
                          color="textSecondary"
                          variant="body1"
                        >
                          Have an account?
                          {' '}
                          <Link href="/auth/login">
                            <a>Sign in</a>
                          </Link>
                        </Typography>
                      </form>
                    )}
                  </Formik>
                </Grid>
                <Grid item xs={12} md={7}>
                  <img src={("/img/contact.png")} alt='#' style={{width:"100%"}} />
                </Grid>
            </Grid>
            </Container>
          </Box>
        </main>
      </Layout>
    </>
  );
};

export default Register;
