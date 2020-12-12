import { serverURL, loginAPIurl, registerAPIurl, logoutAPIurl} from '../config/url';
import { post } from 'axios';


export const submitLogin = async (username, password) => {
    const body = {
        Username: username,
        Password: password
    };
    const url = serverURL + loginAPIurl;
    try {
        let res = await post(url, body);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

export const submitLogout = async (userID, userToken) => {
    const body = {
        UserID: userID,
        UserToken: userToken
    }
    const url = serverURL + logoutAPIurl;
    try {
        let res = await post(url, body);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

export async function submitRegister(email, username, password) {
    const body = {
        Email: email,
        Username: username,
        Password: password
    };
    const url = serverURL + registerAPIurl;
    try {
        let res = await post(url, body);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}