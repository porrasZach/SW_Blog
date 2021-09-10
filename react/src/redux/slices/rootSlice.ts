import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {
        user_token: '',
        user_name: ''
    },

    reducers: {
        chooseUserToken: (state, action) => 
        { state.user_token = action.payload },
        chooseUserName: (state, action) => 
        { state.user_name = action.payload }
    }
})



export const rootReducer = rootSlice.reducer;
export const {
    chooseUserToken,
    chooseUserName
    } = rootSlice.actions;