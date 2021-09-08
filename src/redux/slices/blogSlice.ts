import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'auth',
    initialState:{
        post_title: 'Blog Post for the Ages',
        sub_title: 'SPOILER ALERT',
        body: 'Bloggish Authorr',
    },
    reducers: {
        choosePostTitle: (state, action) => { state.post_title = action.payload },
        chooseBody: (state, action) => { state.body = action.payload },
        chooseSubtitle: (state, action) => { state.sub_title = action.payload }
    }
})


export const blogReducer = blogSlice.reducer;
export const {
    choosePostTitle, 
    chooseBody, 
    chooseSubtitle
} = blogSlice.actions;