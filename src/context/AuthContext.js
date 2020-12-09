import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import axios from 'axios';
import ToastExample from '../../android/app/src/main/java/com/secondtestproj/ToastExample';
import StateManager from '../screens/StateManager';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'signout':
            return {token: null, errorMessage:''};
        case 'clear_error_message':
            return {...state, errorMessage:''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({type: 'signin', payload: token});
        navigate('User');
    } else{
        navigate('NUser');
    }
};

const clearErrorMessage = dispatch => () =>{
    dispatch({type: 'clear_error_message'});
};

const signup = dispatch => async ({email, password, retypePassword, phone, username, method}) => {
    try{
        const response = await axios.post('http://screenlimit-frontend-api.herokuapp.com/create_user', {email, password, retypePassword, phone, username, method});
        StateManager.setLoggedInUser(response.data.user)
        await AsyncStorage.setItem('token', response.data.token);
        ToastExample.sendUserID(response.data.user._id)
        dispatch({type: 'signup', payload: response.data.token});
        navigate('User', {user: response.data.user})
    

    } catch (err){
        dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
    }
};

const signin = dispatch => async ({email, password}) =>{
    try {
        const response = await axios.post('https://screenlimit-frontend-api.herokuapp.com/login', {email, password});
        console.log(response.data.user);
        StateManager.setLoggedInUser(response.data.user)
        await AsyncStorage.setItem('token', response.data.token);
        await dispatch({type: 'signin', payload: response.data.token});
        ToastExample.sendUserID(response.data.user._id);
        if (response.data.user.trial === true){
            navigate('TrialUser', {user: response.data.user})
        } else{
            navigate('User', {user: response.data.user})
        }
        
        } catch (err){
            console.log('Error');
            await dispatch({type: 'add_error', payload: 'Invalid Username or Password'});
    }
};

const signout = dispatch => async() => {
    await AsyncStorage.removeItem('token');
    StateManager.clearLoggedInUser();
    dispatch({type: 'signout'});
    navigate('NUser');

};

export const {Provider, Context} = createDataContext (
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage:''}
);