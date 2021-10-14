import Layout from "../layout/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCogs, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Home(){
    return(
        <Layout
            color="bg-gray-200"
        >
            <Link 
                to="/settings"
                className="flex justify-end m-4"
            >
                <FontAwesomeIcon
                    icon={faCogs}
                    className="cursor-pointer text-gray-500 text-center"
                />    
            </Link> 
            <Link
                to="/workout"
                className="mx-auto"
            >
                <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="mx-auto mt-40 text-9xl text-green-500 text-center"
                />    
            </Link>          

            <h1 className="text-center mt-3 text-xl">Démarrer le WorkOut</h1>
        </Layout>        
    )
}

export default Home