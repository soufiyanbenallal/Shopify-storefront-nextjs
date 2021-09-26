import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Yup from 'yup';
import { Formik } from 'formik';
import {Button,TextField} from '@material-ui/core';
import Head from 'next/head';
import Layout from '../../src/layouts';


const Login = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="login-page"  title="Login" >
          <section className="container">
            <div className="is-grid grid-2 grid-md-1">
              <div className="hidden-md">
                <img src={("/img/register.jpg")} alt='#' style={{width:"100%"}} />
              </div>
              <div >
                <Formik
                  initialValues={{
                    email: '',
                    password: ''
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                  })}
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
                      <h1 className="big-title mb-3">Sign in</h1>
                      <h5 className="mb-3">Sign in on the internal platform</h5>
                      <Button
                        fullWidth
                        startIcon={<ion-icon name="logo-facebook"></ion-icon>}
                        onClick={handleSubmit}
                        size="medium"
                        variant="contained"
                        className="mb-3"
                      >
                        <span className="blue">Login with Facebook</span>
                      </Button>
                      <Button
                        fullWidth
                        startIcon={<ion-icon name="logo-google"></ion-icon>}
                        onClick={handleSubmit}
                        size="medium"
                        variant="contained"
                        className="mb-3"
                      >
                        <span className="red">Login with Google</span>
                      </Button>
                      <small className="w-100 text-center">
                        or login with email address
                      </small>
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
                        margin="dense"
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
                        margin="dense"
                      />
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        round={50}
                        variant="contained"
                      >
                        Sign in now
                      </Button>
                      <p>Don&apos;t have an account?{' '}
                        <Link href="/auth/register">
                          <a>Sign up</a>
                        </Link>
                      </p>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Login;
