import { get, post } from 'axios';
import { serverURL, threadAPIurl } from '../config/url';

export async function getThread(id) {
    const params = {
        ThreadID: id
    };
    const url = serverURL + threadAPIurl + '/getThread';
    const res = {
        success: true,
        thread: {}
    };
    try {
        let resp = await get(url, { params });
        res.thread = resp.data;
        return res;
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export async function postThread(title, content, userID, userToken) {
    const res = {
        success: true
    }
    const body = {
        ThreadTitle: title,
        Content: content,
        CreatorID: userID,
        UserToken: userToken
    };
    const url = serverURL + threadAPIurl + '/postThread';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export async function updateThreadContent(threadID, newContent, userID, userToken) {
    const res = {
        success: true
    }
    const body = {
        ThreadID: threadID,
        Content: newContent,
        CreatorID: userID,
        UserToken: userToken
    };
    const url = serverURL + threadAPIurl + '/updateThreadContent';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export async function updateThreadTitle(threadID, newTitle, userID, userToken) {
    const res = {
        success: true
    }
    const body = {
        ThreadID: threadID,
        ThreadTitle: newTitle,
        CreatorID: userID,
        UserToken: userToken
    };
    const url = serverURL + threadAPIurl + '/updateThreadTitle';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export async function deleteThread(threadID, userID, userToken) {
    const res = {
        success: true
    }
    const body = {
        ThreadID: threadID,
        CreatorID: userID,
        DeletorID: userID,
        DeletorToken: userToken
    };
    const url = serverURL + threadAPIurl + '/deleteThread';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}