import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ChoiseButton from "../composants/ChoiseButton";

import { Context } from "../store/Store";
import * as ACTIONS from "../store/actions/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons"
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

function TimerSelector(){

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        dispatch(ACTIONS.setWorkout({
            rounds : data.rounds,
            worktime : data.worktime,
            resttime : data.resttime,
        }))
    };
    const onError = (errors, e) => console.log(errors, e);

    const { app, dispatch } = React.useContext(Context);
    console.log(app)


    return (
        <div className="mt-10">
        <Link
            to="/"
        >
            <FontAwesomeIcon 
                icon={faArrowCircleLeft}
                className="ml-3 text-gray-600 cursor-pointer"
            />
        </Link>
        <h2 className="text-center mt-5 text-xl uppercase text-gray-600 font-semibold font-serif">Durée du Workout</h2>
            <form onSubmit={handleSubmit(onSubmit, onError)} className="mx-auto mt-3 flex flex-col">
                <ChoiseButton
                    value = '8'
                    title = 'Nombres de Tours'
                    register = {register}
                    nameregister = "rounds"
                    type="number"
                />
                <ChoiseButton
                    value = '00:40'
                    title = 'Temps de travail'
                    register = {register}
                    nameregister = "worktime"
                    type="time"
                />
                <ChoiseButton
                    value = '00:20'
                    title = 'Temps de repos'
                    register = {register}
                    nameregister = "resttime"
                    type="time"
                />
                <button className="py-2 mt-10 justify-end bg-blue-600 mx-4 text-white text-xl rounded-3xl" type="submit">Valider</button>
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