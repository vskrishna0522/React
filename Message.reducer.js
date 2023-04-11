import { UP, DOWN } from "./Message.action"
let initialState = {
    msg: "life has many ups and downs"
}
let messageReducer = (state = initialState, action) => {
        switch (action.type) {
            case UP: 
            return{
                msg : "so, don't give up"
            }
            case DOWN:
                return{
                    msg: "life has many happenning moments"
                }
                default:
                    return state;
        }
}
export {messageReducer}