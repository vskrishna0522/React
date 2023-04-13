import Axios from 'axios'
let USER_REQ = 'USER_REQ'
let USER_SUCCESS = 'USER_SUCCESS'
let USER_FAILURE = 'USER_FAILURE'
let user_Req = () => {
        return{ type: USER_REQ }
}
let user_Success = (users) => {
        return { payload: users, type: USER_SUCCESS  }
}
let user_Failure = (err) => {
    return{ type: USER_FAILURE}
}
 let user_Action = () => {
    return async (dispatch) =>{
        dispatch()
        Axios.get('')
        .then((succ) => {
            dispatch()
        })
        .catch(( fail) => {
            dispatch()
        })
    }
}
export {USER_REQ,USER_SUCCESS,USER_FAILURE,user_Action}