import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: 'Star Wars Book',
        author: 'Author Person',
        release_year: '2021',
        description: 'A wonderful story of a place with people from the Star Wars universe.'
    },
    // takes in initial state of rootSlice, & data/form submission (action), 
    //     and changes the state based on the specific data submitted (payload)
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseReleaseYear: (state, action) => { state.release_year = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload }
    }
})



export const reducer = rootSlice.reducer;
export const {
    chooseTitle, 
    chooseAuthor, 
    chooseReleaseYear, 
    chooseDescription 
    } = rootSlice.actions;