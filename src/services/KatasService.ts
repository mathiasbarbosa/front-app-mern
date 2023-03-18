import  axios from '../utils/config/axios.config'

export const getAllKatas = (token:string) => {


    return axios.get('/katas', {
        headers: {
            'x-access-token': token
        },
       
    })


}

export const getKataById = (token:string, id: string) => {
    return axios.get('/katas', {
        headers: {
            'x-access-token': token
        },
       params:{
        id
       }
    })
}