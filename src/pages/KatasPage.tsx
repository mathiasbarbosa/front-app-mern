
import { AxiosResponse } from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import { useSessionStorage } from "../hooks/useSessionStorage";
import { getAllKatas } from "../services/KatasService";
import { Kata } from "../utils/types/Kata.type";


export const KatasPage = () => {

    let loggedIn = useSessionStorage('sessiontoken')

    let navigate = useNavigate()
    
    const [katas, setKatas] = useState([])
    
   

    useEffect(() => {
        if (!loggedIn) {
            return navigate('/login')
        }else{
            getAllKatas(loggedIn).then((response:AxiosResponse) => {

                if (response.status === 200 && response.data.katas) {
                    console.table(response.data);
                    setKatas(response.data.katas)
                }else{
                    throw new Error("[Error] obtaining katas");
                    
                }
            }).catch((error) => {
                console.log('error get all katas:', error);
                
            })
        }
    },[loggedIn])
    
    /**
     * method to navigate to kata details 
     * @param  id of kata to navigate to
     */
    const navigateToKataDetail = (id:number) => {
        navigate(`/katas/${id}`)
    }
 
    return (
        <div>
            <h1> Katas </h1>
            
            {
                katas.length > 0 ? 
                <div>
                    
                        {katas.map((kata:Kata) => 
                            (
                                <div key={kata._id}>
                                    <h3 onClick={() => navigateToKataDetail(kata._id)}>{kata.name}</h3>
                                    <h4>{kata.description}</h4>
                                    <h5>Creator:{kata.creator}</h5>
                                    <p> Rating: {kata.stars}/5</p>

                                </div>
                            )
                        )}     
                    
                </div>

                :
                
                <div>
                    <h5>No katas found</h5>
                </div>

                
            }
            
           
        </div>
    )

}