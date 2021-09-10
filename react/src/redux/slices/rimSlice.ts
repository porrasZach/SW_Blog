import { createSlice } from "@reduxjs/toolkit";

const rimSlice = createSlice({
    name: 'rim',
    initialState:{
        character: 'Rando Charissian',
        homeworld: 'Heumwurld',
        chosen_num: '1'
    },
    reducers: {
        chooseChosenNum: (state, action) => 
        { state.chosen_num = action.payload }
    }
})


export const rimReducer = rimSlice.reducer;
export const {
    chooseChosenNum
} = rimSlice.actions;