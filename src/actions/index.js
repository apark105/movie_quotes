import types from './types';
import axios from 'axios'; 

export function userSignIn(){
    console.log('user sign in called')
    return {
        type: types.SIGN_IN
    }
}

export function userSignOut(){
    return {
        type: types.SIGN_OUT
    }
}

export function userSignUP(){
    return {
        type: types.SIGN_UP
    }
}