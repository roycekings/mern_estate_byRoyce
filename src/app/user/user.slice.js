import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    currentuser:null,
    loading:false,
    error:""  
}

const userSlice = create