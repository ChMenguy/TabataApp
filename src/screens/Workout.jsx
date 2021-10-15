import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import { Context } from "../store/Store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons"

import Layout from "../layout/Layout";
import CircleProgression from "../composants/CircleProgression";
import { useInterval } from "usehooks-ts";

function Workout(){

    const { app, dispatch } = React.useContext(Context);
  
    let [rounds,setRounds]= useState(app.workout.rounds)
    let [countWork,setCountWork]= useState(app.workout.worktime)
    let [countRest,setCountRest]= useState(app.workout.resttime)

    const [work,setWork] = useState(true)
    const [finish, setFinish] = useState(false)

    useEffect(()=>{
        
    },[])

    useInterval(
        () => {
            if(rounds==0){
                setFinish(true)
            } else {
                if(work){       
                    if(countWork==1){
                        setWork(false) 
                    } else {
                        setCountWork(countWork-1)    
                    } 
                } else {
                    if(countRest==1){
                        setWork(true) 
                        setRounds(rounds-1)
                    } else{
                        setCountRest(countRest-1)
                       
                    }
                }      
            }
         
        },
        1000,
    )


    return(
        finish ?
            <Layout>
                <FontAwesomeIcon
                    icon={faThumbsUp}
                    className = "mx-auto mt-52 text-yellow-500"
                    size="10x"
                />
                <h1 className="text-center text-2xl text-white mt-6">Bien Joué</h1>
            </Layout>
        :
        <Layout>
            <CircleProgression 
                value = {work ? countWork : countRest}
                time={work ? countWork : countRest}
                mode = { work ? 'WORK' : 'REST' }
            />
        </Layout>
    )
}

export default Workout