import {getBlogStart, getBlogSuccess, getBlogFailure,
addBlogStart, addBlogSuccess, addBlogFailure, 
updateBlogStart, updateBlogSuccess, updateBlogFailure,
deleteBlogStart, deleteBlogSuccess, deleteBlogFailure } from "../redux/productReducer";
import authRequest from './requestMethods'
import productRequest from './requestMethods'


export const getBlogs =  async (dispatch) => {
    dispatch(getBlogStart());
try {
    const res = await productRequest.get("/product");
    dispatch(getBlogSuccess(res.data));
} catch (error) {
    dispatch(getBlogFailure())
}
};


export const deleteBlog = async (id, dispatch) => {
    dispatch(deleteBlogStart());
    try {
        dispatch(deleteBlogSuccess(id))
    } catch (error) {
        dispatch(deleteBlogFailure())
    }
}

export const updateBlog = async (id, product, dispatch) => {
    dispatch(updateBlogStart());
    try {
        dispatch(updateBlogSuccess({id, product}))
    } catch (error) {
        dispatch(updateBlogFailure())
    }
};

export const addBlog = async (dispatch, product) => {
    dispatch(addBlogStart());
    try {
        const res = await authRequest.post(`/products`, product)
        dispatch(addBlogSuccess(res.data));
    } catch (error) {
        dispatch(addBlogFailure())
    }
};

