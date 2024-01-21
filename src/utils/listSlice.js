import { createSlice } from "@reduxjs/toolkit";


const listSlice= createSlice({
    name:'list',
    initialState:{
        myList:[]
    },
    reducers:{
        addMyList:(state, action)=>{
            state.myList.push(action.payload)
        }
    }
})
export const {addMyList} = listSlice.actions;
export default listSlice.reducer;