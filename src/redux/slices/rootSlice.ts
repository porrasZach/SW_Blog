import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {
        user_token: ''
    },
    // takes in initial state of rootSlice, & data/form submission (action), 
    //     and changes the state based on the specific data submitted (payload)
    reducers: {
        chooseUserToken: (state, action) => { state.user_token = action.payload }
    }
})



export const rootReducer = rootSlice.reducer;
export const {
    chooseUserToken
    } = rootSlice.actions;