import { serverURL, loginAPIurl, registerAPIurl, logoutAPIurl} from '../config/url';
import { post } from 'axios';


export const submitLogin = async (username, password) => {
    const res = {
        success: false,
        userID: '',
        userToken: ''
    }
    const body = {
        Username: username,
        Password: password
    };
    const url = serverURL + loginAPIurl;
    try {
        let resp = await post(url, body);
        res.success = true;
        res.userID = resp.data.UserID;
        res.userToken = resp.data.UserToken;
        return res;
    } catch (err) {
        console.log(err);
    }
    return res;
}

export const submitLogout = async (userID, userToken) => {
    console.log(`Logging out with ${userID} and ${userToken}`)
    const res = {
        success: false
    }
    const body = {
        UserID: userID,
        UserToken: userToken
    }
    const url = serverURL + logoutAPIurl;
    try {
        await post(url, body);
        res.success = true;
        return res;
    } catch (err) {
        console.log(err);
    }
    return res;
}

export async function submitRegister(email, username, password) {
    const res = {
        success: false
    }
    const body = {
        Email: email,
        Username: username,
        Password: password
    };
    const url = serverURL + registerAPIurl;
    try {
        await post(url, body);
        res.success = true;
        return res;
    } catch (err) {
        console.log(err);
    }
    return res;
}