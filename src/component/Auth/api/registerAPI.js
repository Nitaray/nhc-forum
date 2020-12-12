import { serverURL, registerAPIurl } from '../config/url';
import { post } from 'axios';


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