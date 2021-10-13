import React, { useState } from "react";
import { useForm } from "react-hook-form";

function TimerSelector(){

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
  
    const [roundNumber,setRoundNumber]= useState(0)

    const increment= () =>{
        setRoundNumber(roundNumber+1)
    }
    const decrement= () =>{
        if(roundNumber==0){
            return
        } else{
            setRoundNumber(roundNumber-1)
        }
       
    }


    return (
      <form onSubmit={handleSubmit(onSubmit, onError)} className="mx-auto mt-3">

        <div class="custom-number-input h-10 w-32 justify-center">
            <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold ml-2">
            Nombre de tours
            </label>
            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button onClick={decrement} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                    <span class="m-auto text-2xl font-thin">−</span>
                </button>
            <input type="number" class="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={roundNumber}></input>
                <button onClick={increment} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span class="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>

        <button type="submit">Valider</button>
      </form>
    )
}



function Tabata(){
    return(
        <TimerSelector />
    )
}
export default Tabata