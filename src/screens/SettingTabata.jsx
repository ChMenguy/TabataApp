import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ChoiseButton from "../composants/ChoiseButton";
import Layout from "../layout/Layout";

import { Context } from "../store/Store";
import * as ACTIONS from "../store/actions/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons"


import { Link } from "react-router-dom";

function TimerSelector(){

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        dispatch(ACTIONS.setWorkout({
            rounds : data.rounds,
            worktime : data.worktime,
            resttime : data.resttime,
        }));
    };
    const onError = (errors, e) => console.log(errors, e);

    const { app, dispatch } = React.useContext(Context);
    return (
        <div className="mt-10">
        <Link
            to="/"
        >
            <FontAwesomeIcon 
                icon={faArrowCircleLeft}
                className="ml-3  text-3xl text-white cursor-pointer"
            />
        </Link>
        <h2 className="text-center mt-5 text-xl uppercase text-yellow-500 font-semibold font-serif">Paramétrage Workout</h2>
            <form onSubmit={handleSubmit(onSubmit, onError)} className="mx-auto mt-3 flex flex-col">
                <ChoiseButton
                    value = {app.workout.rounds}
                    title = 'Nombres de Tours'
                    register = {register}
                    nameregister = "rounds"
                    type="number"
                />
                <ChoiseButton
                    value = {app.workout.worktime}
                    title = 'Temps de travail (en secondes)'
                    register = {register}
                    nameregister = "worktime"
                    type="number"
                />
                <ChoiseButton
                    value = {app.workout.resttime}
                    title = 'Temps de repos (en secondes)'
                    register = {register}
                    nameregister = "resttime"
                    type="number"
                />
                <button className="py-2 mt-10 justify-end bg-yellow-500 mx-4 text-white text-xl rounded-3xl" type="submit">Valider</button>
            </form>
        </div>
    )
}



function SettingTabata(){
    return(
        <Layout
            color="bg-gray-200"
        >
            <TimerSelector />
        </Layout>
        
    )
}
export default SettingTabata