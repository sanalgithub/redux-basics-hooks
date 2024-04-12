//use selector is react hook , redux library provide that act as close equilant to map state to props function we done in cake container.import React from "react";
import React from "react";

import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from "../redux";


function HooksCakeContainer(props){
    const numOfCake = useSelector(state => state.cake.numberOfCake)
    const dispatch = useDispatch()
    return(
        <div>

            <h2>numb of cakes (useSelectorHook) - {numOfCake}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}


export default HooksCakeContainer