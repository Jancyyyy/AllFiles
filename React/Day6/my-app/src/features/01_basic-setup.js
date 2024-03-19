// redux - library for state mgmt
// flexibility - but redux suggest go and make use of
// redux-toolkit - set of standard mechanism to use the things

import {createSlice, configureStore} from '@reduxjs/toolkit';

const callMe = () =>{

    const counterSlice = createSlice({
        // A function that accepts an initial state, an object of reducer functions, and a "slice name", 
        //and automatically generates action creators-createslice
        name:'counter',
        initialState:{
            value:0
        },
        reducers:{
            increment: state =>{
                //Immer library-iny package that allows you to work 
                //with immutable state in a more convenient way.
                // Redux Toolkit allows us to write "mutating" logic 
                // in reducers. It doesn't actually mutate the state 
                // because it uses the Immer library, which detects 
                // changes to a "draft state" and produces a brand 
                // new immutable state based off those changes.
                console.log('increment!');
                state.value += 1;
            },
            decrement: state=>{
                console.log('decrement!');
                state.value -=1;
            }
        }
    })

    const {increment,decrement} = counterSlice.actions;

    const store = configureStore({
        reducer: counterSlice.reducer
    })

    // can subscribe to the store
    store.subscribe(()=>{ console.log(store.getState())});

    // actions
    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(decrement());
    store.dispatch(decrement());
}
export default callMe;