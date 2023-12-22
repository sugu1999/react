import {createSlice} from '@reduxjs/toolkit';

export let counterSlice=createSlice({
    name:'counter',
    initialState:{counter:1},
    reducers:{
        incrementCounter:(state,action)=>{
            state.counter=state.counter+1
        },
        decrementCounter:(state,action)=>{
            state.counter=state.counter-1;
        },
        incrementCounterByValue:(state,action)=>{
            state.counter=state.counter+action.payload;
        }
    }
})

export default counterSlice.reducer;
//generate action creator functions
export let {incrementCounter,decrementCounter,incrementCounterByValue}=counterSlice.actions;