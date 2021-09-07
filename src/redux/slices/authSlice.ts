import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        name: '',
        email: '',
        token: ''
    },
    reducers: {
        changeName: (state, action) => { state.name = action.payload },
        changeEmail: (state, action) => { state.email = action.payload },
        changeToken: (state, action) => { state.token = action.payload }
    }
})


export const authReducer = authSlice.reducer;
export const {
    changeName,
    changeEmail,
    changeToken
} = authSlice.actions;