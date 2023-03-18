import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { register } from '../../services/authService'
import { AxiosResponse } from 'axios'

const RegisterForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        age: 18
    }

    // Yup validation Schema 
    const registerSchema = Yup.object().shape(
        {
            name: Yup.string().min(6, 'username must have 6 letters minium').max(12, 'Username must have maximum 12 letters').required('username is required'),
            email: Yup.string().email('invalid email format').required('email is required'),
            password: Yup.string().min(8,'password to short').required('password is required'),
            confirm: Yup.string().when("password", (password, schema) => {
                return password && password.length > 0
                  ? schema.oneOf([Yup.ref("password")], "Password must match")
                  : schema;
            }).required('you mus confirm your password'),
            age: Yup.number().min(18, 'you must be over 18 years old').required('age is required')
        }
    )


    return(
        <div>
            <h4> Register Form a new user </h4>

            <Formik
              initialValues={initialValues}
              validationSchema={registerSchema}
              onSubmit={async (values) => {
                // await new Promise((response) => setTimeout(response, 1000))
                // alert(JSON.stringify(values, null, 2))
                // console.table(values)

                register(values.name, values.email, values.password, values.age).then((response: AxiosResponse)=> {
                    if (response.status === 200) {
                        console.log('User registered', response.data);
                    }else{
                        throw new Error('Error in registry')
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

                            <label htmlFor="name">name</label>
                            <Field id='name' type='text' name='name' placeholder='example@hotmail.com'/>
                            
                            {/* name erros */}
                            {
                                errors.name && touched.name && (
                                    <ErrorMessage name='name' component='div'></ErrorMessage>
                                )
                            }


                            <label htmlFor="email">email</label>
                            <Field id='email' type='email' name='email' placeholder='example@hotmail.com'/>
                            
                            {/* email erros */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                )
                            }
                        
                        <label htmlFor="password">password</label>
                            <Field id='password' type='password' name='password' placeholder='example'/>
                            
                            {/* password erros */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="confirm">confirm password</label>
                            <Field id='confirm' type='password' name='confirm' placeholder='example'/>
                            
                            {/* confirm erros */}
                            {
                                errors.confirm && touched.confirm && (
                                    <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                )
                            }
                            <label htmlFor="age">age </label>
                            <Field id='age' type='number' name='age'/>
                            
                            {/* age erros */}
                            {
                                errors.age && touched.age && (
                                    <ErrorMessage name='age' component='div'></ErrorMessage>
                                )
                            }

                            <button type='submit'>register</button>
                            {
                                isSubmitting ? ( <p>sending data new user...</p>) : null
                            }
                        
                        </Form>


                    )

                    
                }


            </Formik>

        </div>
    )


}

export default RegisterForm