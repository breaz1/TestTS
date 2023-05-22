import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    users:[],    
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_,{ rejectWithValue, dispatch }) => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(setUsers(res.data))
    }
)

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        setUsers:(state, action) =>{
            state.users = action.payload
        }
    }
})

export const { setUsers } = userSlice.actions
export default userSlice.reducer