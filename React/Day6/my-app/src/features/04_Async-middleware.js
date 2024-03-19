// redux - library for state mgmt
// flexibility - but redux suggest go and make use of
// redux-toolkit - set of standard mechanism to use the things

import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://jsonplaceholder.typicode.com/users';
//homeeeeeeeeeeeeeeeeeeeee
const getUsers = createAsyncThunk(
    // action type string
    'users/getUsers',
    async (arg, thunkApi) => {
        try {
            const res = await fetch(url)
                .then((data) => data.json());

            return res;
        } catch (err) {
            return thunkApi.rejectWithValue('Oops, something went wrong!');
        }
    }
)

const user = {name:'Abhijeet',email:'abhijeetgole@gmail.com'};

const addUser = createAsyncThunk(
    'users/addUser',
    async(user, {rejectWithValue}) =>{
        try{
            const response = await fetch(url,
                {
                    method:'POST',
                    body:JSON.stringify(user),
                    headers:{
                        'Content-Type':'application/json;charset:UTF-8',
                    },
                })
                const data = await response.json();
                return data;
        }catch(err){
            return rejectWithValue('Oops, something went wrong!');
        }
    }
)
const callMe = () => {

    const fetchSlice = createSlice({
        name: 'Fetch',
        initialState: {
            loading: false,
            entities: {},
            error: {}
        },
        reducers: {
            // standard reducer logic, with auto-generated types per reducer.
        },
        // Within createSlice, synchronous requests made to the store are 
        // handled in the reducers obejct while extraReducers handles
        // asynchronous requests.

        extraReducers:(builder) =>{
            builder.addCase(getUsers.pending,(state) =>{
                state.loading = true
            })
            builder.addCase(getUsers.fulfilled,(state,action) =>{
                state.loading = false
                state.entities = action.payload
            })
            builder.addCase(getUsers.rejected,(state,{payload}) =>{
                            state.loading = false
                state.error = payload
            })

            builder.addCase(addUser.pending,(state) =>{
                state.loading = true
            })
            builder.addCase(addUser.fulfilled,(state,action) =>{
                state.loading = false
                console.log('addUser payload:- ',action.payload);
            })
            builder.addCase(addUser.rejected,(state,{payload}) =>{
                state.loading = false
                console.error('addUser error:- ',payload);
            })
        }
    })

    const store = configureStore({
        reducer: fetchSlice.reducer,
    })

    // can subscribe to the store
    store.subscribe(() => { console.log(store.getState()) });

    // actions
    store.dispatch(getUsers());
    store.dispatch(addUser(user));
    
}
export default callMe;