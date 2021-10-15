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
  
    const [rounds,setRounds]= useState(app.workout.rounds)
    const [roundsDone,setRoundsDone] = useState(1)
    const [countWork,setCountWork]= useState(app.workout.worktime)
    const [countRest,setCountRest]= useState(app.workout.resttime)
    const [value,setValue] = useState(0)

    const [work,setWork] = useState(true)
    const [finish, setFinish] = useState(false)

    useInterval(
        () => {
            if(rounds==0){
                setFinish(true)
            } else {
                if(work){       
                    if(countWork==1){
                        setWork(false) 
                        setCountWork(app.workout.worktime)
                        setValue(0)
                    } else {
                        setCountWork(countWork-1)  
                        setValue(value + 100/app.workout.worktime)  
                    } 
                } else {
                    if(countRest==1){
                        setWork(true) 
                        setCountRest(app.workout.resttime)
                        setRounds(rounds-1)
                        setRoundsDone(roundsDone +1)
                        setValue(0)
                    } else{
                        setCountRest(countRest-1)
                        setValue(value + 100/app.workout.resttime)  
                       
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
                value = {value}
                time={work ? countWork : countRest}
                mode = { work ? 'WORK' : 'REST' }
            />
            <p className="text-center text-yellow-500 font-bold mt-10 text-2xl">{roundsDone}/{app.workout.rounds}</p>
        </Layout>
    )
}

export default Workout