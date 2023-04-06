let initialState = {
    msg: "Hindi class"
}
let messageReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GM':
            return{msg: 'namasthei ji' }
            case 'GM':
                return{ msg: 'dhaniyawad ji' }
                default:
            return state

    }
}
export {messageReducer}

