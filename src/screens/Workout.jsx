import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import { useContext } from "react";
import { Context } from "../store/Store";
import * as ACTIONS from "../store/actions/actions";

import Layout from "../layout/Layout";
import CircleProgression from "../composants/CircleProgression";

function Workout(){

    const { app, dispatch } = React.useContext(Context);
    const [workout,setWorkout] = useState({
        rounds : null,
        worktime : null,
        resttime : null,
        work : true,
        finish : false
    })

    useEffect(()=>{
        setWorkout(app.workout)
    })

    return(
        <Layout color="bg-green-100">
            <CircleProgression />
        </Layout>
    )
}

export default Workout