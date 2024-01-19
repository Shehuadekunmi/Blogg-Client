import {createSlice} from '@reduxjs/toolkit';

const initialState = {
blogs: [],
loading: false,
error: false
}

 const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        // GET ALL PRODUCT
        getBlogStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        getBlogSuccess : (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        getBlogFailure: (state) => {
            state.error = true;
            state.loading = false
        },

        // DELETE
        deleteBlogStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        deleteBlogSuccess: (state) => {
            state.products = splice(
                state.products.findIndex((item) => item._id === action.payload), 1
            );
            state.loading = false;
        },
        deleteBlogFailure: (state) => {
            state.loading = false;
            state.error = true;
        },

        // ADD PRODUCT
        addBlogStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        addBlogSuccess: (state, action) => {
            state.products.push(action.payload);
            state.loading = false
        },
        addBlogFailure: (state) => {
            state.error = true;
            state.loading = false
        },

        // UPDATE
        updateBlogStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        updateBlogSuccess: (state, action) => {
            state.products[
                state.products.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.product;
            state.loading = false
        },
        updateBlogFailure: (state) => {
            state.error = true;
            state.loading = false;
        },

    },
});


export const { getBlogStart, getBlogSuccess, getBlogFailure, 
updateBlogStart, updateBlogSuccess, updateBlogFailure, addBlogStart, addBlogSuccess, addBlogFailure, 
deleteBlogStart, deleteBlogSuccess, deleteBlogFailure} = blogSlice.actions

export default blogSlice.reducer
