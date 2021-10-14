
import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

export default function CircleProgression({time}){

    return(
        <div style={{ width: 400, height: 400 }} className="mx-auto mt-20">
            <CircularProgressbarWithChildren value={time}>
                <p>Work</p>
                {time}
            </CircularProgressbarWithChildren>
        </div>
    )
}

