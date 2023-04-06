import React from "react";
import {useDispatch , useSelector} from 'react-redux'
import { gmAction, gnAction } from './Redux/inonuu/message.action';
const Message = () => {
    let message = useSelector((state) => {
        return state
    })
    let dispatch = useDispatch()
    let gmHandler = () => {
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return(
        <div>
                <h1> component </h1>
                <pre>{JSON.stringify(message)}</pre>
                <h2>Value:{message.msg}</h2>
                <button onClick={gmHandler}> namasthei ji </button>
                <button onClick={gnHandler}> dhaniyawad ji </button>
        </div>
    )
}
export default Message