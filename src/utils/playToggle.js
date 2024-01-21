import { createSlice } from "@reduxjs/toolkit";


const playToggle = createSlice({
    name:'play',
    initialState:{
        playToggle:false
    },
    reducers:{
        playToggleBtn:(state, action)=>{
            state.playToggle = !state.playToggle
        },
        resetToggle:(state, action) =>{
            state.playToggle= false
        }

    }
})

export const {playToggleBtn,resetToggle} = playToggle.actions;
export default playToggle.reducer;