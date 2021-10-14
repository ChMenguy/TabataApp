import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { Link , useHistory, Redirect} from "react-router-dom";
import Layout from "../layout/Layout";

import { useInterval } from "usehooks-ts";

function Timer(){

    const [count,setCount] = useState(5)
    let history = useHistory();

    useInterval(
        () => {
          setCount(count - 1)
        },
        count == 0 ? null : 1000,
    )




    return(
        <Layout
            color="bg-gray-100"
        >   
            {count != 0 ?
                <span className="text-center mt-56 text-yellow-500 font-bold text-9xl">{count}</span>        
            : 
                <Redirect to="/workout" />
            }
            
        </Layout>
    )
}

export default Timer