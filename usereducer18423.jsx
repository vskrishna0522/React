import React, { useReducer } from 'react'

const Message = () => {
    let intialState = {
        msg: "Hello"
    }
    let userReducer = (state, action) => {
        console.log(action)
        switch (action) {
            case "GM":
                return { msg: "Good Morning" }
            case "GA":
                return { msg: "Good Afternoon" }
            case 'GN':
                return { msg: "Good Night" }
            default:
                return intialState
        }
    }