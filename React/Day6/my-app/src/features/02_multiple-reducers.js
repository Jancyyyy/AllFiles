// redux - library for state mgmt
// flexibility - but redux suggest go and make use of
// redux-toolkit - set of standard mechanism to use the things

import {createSlice, configureStore} from '@reduxjs/toolkit';

const callMe = () =>{

    const userSlice = createSlice({
        name:'user',
        initialState:{
            name:'',
            age:0
        },
        reducers:{
            changeName: (state,action) =>{
                state.name = action.payload 
            },
            changeAge: (state,action)=>{
                state.age = action.payload
            }
        }
    })

    const {changeName,changeAge} = userSlice.actions;

    const tweetsSlice = createSlice({
        name:'tweets',
        initialState:{
            tweetsArr :[]
        },
        reducers:{
            addTweet: (state,action) =>{
                state.tweetsArr.push(action.payload);
            }
        }
    })

    const {addTweet} = tweetsSlice.actions;

    const store = configureStore({
        reducer: {
            userReducer:userSlice.reducer,
            tweetsReducer:tweetsSlice.reducer
        }
    })

    // can subscribe to the store
    store.subscribe(()=>{ console.log(store.getState())});

    // actions
    store.dispatch(changeName('Ashish'));
    store.dispatch(changeAge(22));
    store.dispatch(addTweet('This is my first tweet!'));
    store.dispatch(addTweet('Learn FLUX and REDUX!'));
}
export default callMe;