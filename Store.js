import { messageReducer } from "./inonuu/message.reducer";
import { createStore } from 'redux'
let store = createStore(messageReducer)
export {store}