import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    comments:[],    
}
//выгружаю по апи коменты
export const getComments = createAsyncThunk(
    'comments/getComents',
    async (_,{ rejectWithValue, dispatch }) => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
            dispatch(setComments(res.data))
    }
)

export const commentSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{
        setComments:(state, action) =>{
            state.comments = action.payload
        }
    }
})

export const { setComments } = commentSlice.actions
export default commentSlice.reducer