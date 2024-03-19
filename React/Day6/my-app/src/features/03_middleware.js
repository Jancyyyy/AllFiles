// redux - library for state mgmt
// flexibility - but redux suggest go and make use of
// redux-toolkit - set of standard mechanism to use the things

import {createSlice, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';

const callMe = () =>{

    const counterSlice = createSlice({
        name:'counter',
        initialState:{
            value:0
        },
        reducers:{
            increment: state =>{
                //console.log('increment!');
                state.value += 1;
            },
            decrement: state=>{
                //console.log('decrement!');
                state.value -=1;
            }
        }
    })

    const {increment,decrement} = counterSlice.actions;

    // custom middleware - myLogger
    const myLogger = (store) =>
                        (next) =>
                            (action) =>{
                                console.log('Action Fired ',action);
                                console.log('Original State ',store.getState());
                                next(action); // calling next middleware 
                            }

    const store = configureStore({
        reducer: counterSlice.reducer,
        //middleware: [logger,myLogger]
        // By default, configureStore adds some middleware to the Redux store
        // setup automatically

        // getDefaultMiddleware is useful if you want to add some custom
        // middleware, but also the default middleware to be there
        middleware:(getDefaultMiddleware) =>(
            // getDefaultMiddleware().concat(logger,myLogger)
            getDefaultMiddleware().concat(logger)
        )
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