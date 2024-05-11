import {configureStore} from '@reduxjs/toolkit'
import user from './userSlice'
import general from './generalSlice'
export  const store= configureStore({
    reducer:{
        user:user,
        general:general
    }
})
