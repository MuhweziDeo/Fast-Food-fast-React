import { REGISTER_USER_FAILS,REGISTER_USER_SUCCEEDS } from '../../actions/actionTypes'
import { postData,baseURL } from '../../constants'
const initialState={
  register_successful:flase,
  payload:"",
  status:""
}

const registerActionCreator=(payload)=(dispatch)=>{
  postData(`${baseURL/api/v2/auth/login}`,payload,'').then(
    data=>{
      console.log(data)
    }
  )
}

export default registerActionCreator
