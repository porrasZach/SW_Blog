import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: "root",
    initialState: {

    },
    // takes in initial state of rootSlice, & data/form submission (action), 
    //     and changes the state based on the specific data submitted (payload)
    reducers: {
        
    }
})



export const reducer = authSlice.reducer;
export const {

    } = authSlice.actions;