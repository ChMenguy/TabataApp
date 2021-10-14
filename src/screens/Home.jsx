import Layout from "../layout/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCogs, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useState } from "react"

function Home(){

    const [startCounter,setStartCounter] = useState(5)

    return(
        <Layout
            color="bg-gray-200"
        >   
            <div className="flex m-4 justify-evenly">
                <h1 className=" text-2xl">Tabata App </h1>    
                <Link 
                    to="/settings"
                >                                  
                    <FontAwesomeIcon
                        icon={faCogs}
                        className=" text-2xl cursor-pointer ml-3 text-gray-500 text-center"
                    />    
                </Link> 
            </div>
               
            
            <Link 
                to="/timer"
                className="mx-auto"
            >
                <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="mx-auto mt-36 text-9xl text-green-500 text-center cursor-pointer"
                />  
            </Link>         
        </Layout>        
    )
}

export default Home