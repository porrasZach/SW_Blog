import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {
        user_token: ''
    },

    reducers: {
        chooseUserToken: (state, action) => 
        { state.user_token = action.payload }
    }
})



export const rootReducer = rootSlice.reducer;
export const {
    chooseUserToken
    } = rootSlice.actions;