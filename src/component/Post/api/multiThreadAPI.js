import { get, post } from 'axios';
import { serverURL, hotPostsAPIurl, followedPostAPIurl} from '../config/url';

export const getHotThreads = async () => {
    const res = {
        success: true,
        threads: []
    }
    const url = serverURL + hotPostsAPIurl;
    try {
        let resp = await get(url);
        res.threads = resp.data;
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export const getFollowedThreads = async (userID, userToken) => {
    const res = {
        success: true,
        threads: []
    }
    const url = serverURL + followedPostAPIurl + '/getFollows';
    try {
        res.threads = await get(url);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export const makeFollowedThread = async (userID, userToken, threadID) => {
    const res = {
        success: true
    }
    const body = {
        UserID: userID,
        UserToken: userToken,
        ThreadID: threadID
    };
    const url = serverURL + followedPostAPIurl + '/makeFollow';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}