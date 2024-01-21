import { createSlice } from "@reduxjs/toolkit";


const playToggle = createSlice({
    name:'play',
    initialState:{
        playToggle:false
    },
    reducers:{
        playToggleBtn:(state, action)=>{
            state.playToggle = !state.playToggle
        }
    }
})

export const {playToggleBtn} = playToggle.actions;
export default playToggle.reducer;