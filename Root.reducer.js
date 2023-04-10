import { combineReducers } from "redux";
import { counterReducer } from './Counter/Counter.reducer'
import { messageReducer } from './Message/Message.reducer'
let rootReducer = combineReducers({ counter: counterReducer, message: messageReducer })
export { rootReducer }