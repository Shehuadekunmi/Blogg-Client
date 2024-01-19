import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../fireBase'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signinSuccess } from '../redux/userReducer';

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
       try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        const result = await signInWithPopup(auth, provider)

        const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
            }),
        });
        const date = await res.json();
        dispatch(signinSuccess(data));
        navigate('/')
       } catch (error) {
        console.log('could not sign in with google', error);
       }
    }
  return (
    <div>
        <button type='button' onClick={handleGoogleClick}>
            Continue with Google
        </button>
    </div>
  )
}

export default OAuth