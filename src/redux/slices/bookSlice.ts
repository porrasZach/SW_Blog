import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'auth',
    initialState:{
        title: 'Star Wars Book',
        author: 'Author Person',
        release_year: '2021',
        description: 'A wonderful story of a place with people from the Star Wars universe.',
        book_id: ''
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseReleaseYear: (state, action) => { state.release_year = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        chooseBookID: (state, action) => { state.book_id = action.payload },
    }
})


export const bookReducer = bookSlice.reducer;
export const {
    chooseTitle, 
    chooseAuthor, 
    chooseReleaseYear, 
    chooseDescription,
    chooseBookID,
} = bookSlice.actions;