import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { login } from '../../services/authService'
import { response } from 'express'
import { AxiosResponse } from 'axios'

// Define schema of validation with yup

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

// Login component
const LoginForm = () => {
    // define credential initial
    const initialCredentials = {
        email: '',
        password: ''
    } 

    let navigate = useNavigate()

    return (
        <div>
            <h4>Login Form</h4>
            {/* formik to encapsulate a form */}
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    // await new Promise((response) => setTimeout(response, 1000))
                    // alert(JSON.stringify(values, null, 2))
                    // console.table(values)

                    login(values.email, values.password).then(async(response: AxiosResponse)=> {
                        if (response.status === 200) {
                            
                            if (response.data.token) {
                                console.table(response.data)    
                                await sessionStorage.setItem('sessiontoken', response.data.token)
                                navigate('/')
                            }else{
                                throw new Error('error generating login token')
                            }
                        }else{
                            throw new Error('Invalid credentials')
                        }
                    })
                    .catch(err => console.log('Error en el login', err)
                    )
                }}
            
            >
                {
                    ({values, touched, errors, isSubmitting, handleChange, handleBlur}) => 
                    (
                        <Form>
                            <label htmlFor="email"></label>
                            <Field id='email' type='email' name='email' placeholder='example@hotmail.com'/>
                            
                            {/* email erros */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                )
                            }
                        
                        <label htmlFor="password"></label>
                            <Field id='password' type='password' name='password' placeholder='example'/>
                            
                            {/* password erros */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                            <button type='submit'>Login</button>
                            {
                                isSubmitting ? ( <p>Checking credentials...</p>) : null
                            }
                        
                        </Form>


                    )

                    
                }


            </Formik>




        </div>
    )


}

export default LoginForm