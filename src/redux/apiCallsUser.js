import axios from "axios";
import { signinStart,  signinSuccess, signinFailure, updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart,
    deleteUserSuccess, deleteUserFailure, sighOutUserStart, sighOutUserSuccess, sighOutUserFailure,
   registerStart, registerSuccess, registerFailure } from "../redux/userReducer";
import {API_URL, api} from '../requestMethods'



export const login  = async (dispatch, user) => {
    dispatch(signinStart())
try {
    const res = await axios.post(`${api}/signin`, {user,
        // headers: { token: `Bearer${TOKEN}`}
    });
    dispatch(signinSuccess(res.data));
    console.log(res.data);
} catch (error) {
    dispatch(signinFailure())
}
};

export const register  =  async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await axios.post(`http://localhost:4200/api/v1/auth/register`, user);
        dispatch(registerSuccess(res.data))
        console.log(res.data);
    } catch (error) {
        dispatch(registerFailure())
    }
};

export const updateUser = async (dispatch, id, user) => {
    dispatch(updateUserStart());
    try {
        dispatch( updateUserSuccess(id, user))
    } catch (error) {
        dispatch(updateUserFailure())
    }
};

export const deleteUser = async (dispatch, id) => {
    dispatch(deleteUserStart());
    try {
        dispatch(deleteUserSuccess(id))
    } catch (error) {
        dispatch(deleteUserFailure())
    }
};

export const signOut = async (id, dispatch) => {
    dispatch(sighOutUserStart());
    try {
        dispatch(sighOutUserSuccess(id))
    } catch (error) {
        dispatch(sighOutUserFailure())
    }
};