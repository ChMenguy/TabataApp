import Layout from "../layout/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCogs, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useState } from "react"

function Home(){
    return(
        <Layout>   
            <div className="flex m-4 justify-evenly">
                <h1 className="text-white text-2xl">Tabata App </h1>    
                <Link 
                    to="/settings"
                >                                  
                    <FontAwesomeIcon
                        icon={faCogs}
                        className=" text-2xl cursor-pointer ml-14 text-white text-center"
                    />    
                </Link> 
            </div>
               
            
            <Link 
                to="/timer"
                className="mx-auto"
            >
                <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="mx-auto mt-36 text-yellow-500 text-center cursor-pointer"
                    size="10x"
                />  
            </Link>         
        </Layout>        
    )
}

export default Home