import axios from '../utils/config/axios.config'

/**
 * login method
 * @param {string} email email to login user 
 * @param {string} password  password to login user
 * @returns 
 */

export const login = (email:string, password:string) => {

    // declare body POST
    let body = {
        email,
        password
    }

    // sebd POST request to login endpoint 
    return axios.post('/auth/login', body)
}

/**
 * register method
 * @param {string} name name of user 
 * @param {string} email email of user
 * @param {string} password password of user
 * @param {mumber} age age of user
 * @returns 
 */
export const register = (name:string,email:string, password:string, age:number) => {

    // declare body POST
    let body = {
        name,
        email,
        password,
        age
    }

    // sebd POST request to register endpoint 
    return axios.post('/auth/register', body)
}