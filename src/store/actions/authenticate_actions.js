import { AUTH_USER, UNAUTH_USER,  AUTH_ERROR } from './actionTypes';
import data from '../../json/login.json';
import createHistory from "history/createBrowserHistory"

const history = createHistory()


export function signinUser(values,push) {
    console.log(values);
    let login = data.Login;
    debugger;
    return function(dispatch) {
        if (values.email === login.loginid && values.password === login.password) {
            debugger;
            dispatch({ type: AUTH_USER, payload: login.userName});
            localStorage.setItem('token', values.password);
            localStorage.setItem('userId', login.userName);
            push('/');

        }
        else {
            debugger;
            dispatch({type: AUTH_ERROR, payload: 'User Name or password is incorrect'});
            dispatch({type: UNAUTH_USER});
 
            
        }

        
    }

}
export function signupUser(values,push) {
    
    return function(dispatch) {

        dispatch({ type: AUTH_USER, payload: values.name});
        localStorage.setItem('token', values.password);
        localStorage.setItem('userId', values.name);
        push('/');
     }
}

export function signoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    
    return { type: UNAUTH_USER };
}