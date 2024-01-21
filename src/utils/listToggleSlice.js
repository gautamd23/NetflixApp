import { createSlice } from "@reduxjs/toolkit";


const listToggleSlice = createSlice({
    name:'listToggle',
    initialState:{
        listAddBtnToggle:false
    },
    reducers:{
        toggleAddListBtn:(state, action)=>{
            state.listAddBtnToggle = !state.listAddBtnToggle
        }
    }
})
export const {toggleAddListBtn} = listToggleSlice.actions
export default listToggleSlice.reducer