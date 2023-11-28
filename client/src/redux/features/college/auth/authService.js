import axios  from "axios";

const BACKEND_URL = REACT_APP_BACKEND_URL
const API_URL = `${BACKEND_URL}/college/`

const signup = async(userSignupData) =>{
    const response = await axios.post(API_URL + "signup" , userSignupData)
    return response.userSignupData
}

export default collegeAuthService = {
    signup
}