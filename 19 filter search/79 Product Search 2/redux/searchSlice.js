import {message} from 'antd';
import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        products:[],
        search: '',
    },
    reducers:{
        searchProduct: (state, action) => {
            state.search = action.payload;
            console.log(state.search);
        },
    }
});

export const {searchProduct} = searchSlice.actions;

export default searchSlice.reducer;
