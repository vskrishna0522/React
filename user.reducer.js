import { USER_FAILURE, USER_SUCCESS,USER_REQ } from "./user.action";
let initialState = {

}
let userReducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'USER_REQ':
            return {users : []}
        case 'USER_SUCCESS':
            return {}
        case 'USER_FAILURE' :
            return {}
        default :
            return     
    }
}
export {userReducer}