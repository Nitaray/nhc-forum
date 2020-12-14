import { get, post } from 'axios';
import { serverURL, hotPostsAPIurl, newPostsAPIurl, followedPostAPIurl} from '../config/url';

export const getHotThreads = async () => {
    const res = {
        success: false,
        threads: []
    }
    const url = serverURL + hotPostsAPIurl;
    try {
        let resp = await get(url);
        res.threads = resp.data.IDs;
        res.success = true;
    } catch (err) {
        console.log(err);
    }
    return res;
}

export const getNewThreads = async () => {
    const res = {
        success: false,
        threads: []
    }
    const url = serverURL + newPostsAPIurl;
    try {
        let resp = await get(url);
        res.threads = resp.data.IDs;
        res.success = true;
    } catch (err) {
        console.log(err);
    }
    return res;
}

export const getFollowedThreads = async (userID, userToken) => {
    const res = {
        success: false,
        threads: []
    }
    const params = {
        UserID: userID,
        UserToken: userToken
    }
    const url = serverURL + followedPostAPIurl + '/getFollows';
    try {
        let resp = await get(url, {params});
        res.threads = resp.data.IDs
        res.success = true;
    } catch (err) {
        console.log(err);
    }
    return res;
}

export const makeFollowedThread = async (userID, userToken, threadID) => {
    const res = {
        success: false
    }
    const body = {
        UserID: userID,
        UserToken: userToken,
        ThreadID: threadID
    };
    const url = serverURL + followedPostAPIurl + '/makeFollow';
    try {
        await post(url, body);
        res.success = true;
    } catch (err) {
        console.log(err);
    }
    return res;
}