import { messageReducer } from './Message/Message.reducer';
import { createStore } from 'redux';
import { rootReducer } from './rootReducer'
let store = createStore(rootReducer )
export { store }