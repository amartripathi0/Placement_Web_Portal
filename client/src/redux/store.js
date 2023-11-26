import {configureStore} from '@reduxjs/toolkit'
import studentAuthReducer from './features/student/auth/authSlice'
import globalAuthReducer from './features/common/globalSlice'
export const store = configureStore({
    reducer : {
        studentAuth  : studentAuthReducer ,
        globalAuth : globalAuthReducer
    }
})