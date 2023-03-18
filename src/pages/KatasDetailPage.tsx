import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { Editor } from "../components/editor/Editor";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { getKataById } from "../services/KatasService";
import { Kata } from "../utils/types/Kata.type";

export const KatasDetailPage = () => {
    
    let {id} = useParams()
    let navigate = useNavigate()

    const [kata, setkata] = useState<Kata | undefined>(undefined)

    const [showSolution, setshowSolution] = useState(false)

    let loggedIn = useSessionStorage('sessiontoken')

    
    useEffect(() => {
        if (!loggedIn) {
            return navigate('/login')
        }else{
            if (id) {
                getKataById(loggedIn,id).then((response: AxiosResponse) => {
                    if (response.status === 200 && response.data) {
                        let kataData: Kata = {
                            _id: response.data._id,
                            name: response.data.name,
                            description: response.data.description,
                            stars: response.data.stars,
                            level:response.data.level,
                            intents: response.data.intents,
                            creator:response.data.creator,
                            solution:response.data.solution,
                            participants:response.data.participants 
                        } 
                        setkata(kataData)
                        console.table(kataData);
                        
                    }
                }).catch((error) => {
                    console.log('Kata by id error:', error);
                    
                })
            }else{
                return navigate('/katas')
            }
        }
    },[loggedIn])

    return (
        <div>
            <h1> Katas: {id} </h1>
            { kata ?
                <div className="kata-data">
                     <h2>{kata?.description}</h2>
                     <h3>Rating: {kata?.stars}/5</h3>
                </div>
                    :
                <div>
                    <h2>Loading data...</h2>
                </div>
            }
            
            <button onClick={() => setshowSolution(!showSolution)}>{showSolution? 'show solution' : 'hide solution'}</button>
           
           {showSolution ? null : <Editor>{kata?.solution}</Editor>}
        </div>
    )

}