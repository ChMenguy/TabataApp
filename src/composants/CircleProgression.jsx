
import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

export default function CircleProgression({value,time,mode}){

    return(
        <div style={{ width: 350, height: 350 }} className="mx-auto mt-28 text-gray-800">
            <CircularProgressbarWithChildren 
                value={value}
                styles={{
                    path : {
                        stroke:'#f59e0c'
                    }
                }}
            >
                <span className="text-white font-bold text-6xl">{mode}</span>
                <span className="text-yellow-500 font-bold text-6xl mt-2">{time}</span>
            </CircularProgressbarWithChildren>
        </div>
    )
}

