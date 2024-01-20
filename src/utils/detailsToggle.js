import { createSlice } from "@reduxjs/toolkit";


const detailsToggle = createSlice({
    name:'details',
    initialState:{
        detailToggle:false
    },
    reducers:{
        showDetails:(state,action) =>{
            state.detailToggle = !state.detailToggle
        }
    }
})
export const {showDetails} = detailsToggle.actions
export default detailsToggle.reducer;