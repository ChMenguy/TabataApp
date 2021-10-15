import React from "react";

import { Context } from "../store/Store";
import Layout from "../layout/Layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom"


function Home(){

    const { app, dispatch } = React.useContext(Context);
    return(
        <Layout>   
            <div className="flex m-4 justify-evenly">
                <h1 className="text-white text-center text-5xl">Tabata App </h1>    
            </div>           
            <Link 
                to="/timer"
                className="mx-auto"
            >
                <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="mx-auto mt-28 text-yellow-500 text-center cursor-pointer"
                    size="10x"
                />  
            </Link>
            <div className="text-center text-white text-2xl mt-14 flex flex-col">
                <span>{app.workout.rounds} Tours</span>
                <span>{app.workout.worktime} Secondes / {app.workout.resttime} Secondes</span>
                <div>
                    <Link to="/settings">
                        <button className="bg-yellow-500 p-2 mt-4 rounded-full">Modifier</button>
                    </Link>
                    
                </div>               
            </div>
                    
        </Layout>        
    )
}

export default Home