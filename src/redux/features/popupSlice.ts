import { createSlice } from "@reduxjs/toolkit";

export const popUpSlice = createSlice({
    name: 'popUp',
    initialState: {
        followers: false,

    },
    reducers: {
        toggleFollowers: (state) => {
            state.followers = !state.followers
        },
    }
})

export default popUpSlice.reducer
export const {toggleFollowers} = popUpSlice.actions