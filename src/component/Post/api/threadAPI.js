import { get, post } from 'axios';
import { serverURL, threadAPIurl } from '../config/url';

export async function getThread(id) {
    const params = {
        ThreadID: id
    };
    const url = serverURL + threadAPIurl + '/getThread';
    const thread = {
        success: true,
        data: {}
    };
    try {
        let res = await get(url, { params });
        thread.data = res.data;
    } catch (err) {
        thread.success = false;
        console.log(err);
    }
    return thread;
}
export async function postThread(title, content, userID, userToken) {
    const body = {
        ThreadTitle: title,
        Content: content,
        CreatorID: userID,
        UserToken: userToken
    };
    const url = serverURL + threadAPIurl + '/postThread';
    try {
        let res = await post(url, body);
        console.log(res);

    } catch (err) {
        console.log(err);
    }
}
export async function updateThreadContent(threadID, newContent, userID, userToken) {
    const body = {
        ThreadID: threadID,
        Content: newContent,
        CreatorID: userID,
        UserToken: userToken
    };
    const url = serverURL + threadAPIurl + '/updateThreadContent';
    try {
        let res = await post(url, body);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
export async function updateThreadTitle(threadID, newTitle, userID, userToken) {
    const body = {
        ThreadID: threadID,
        ThreadTitle: newTitle,
        CreatorID: userID,
        UserToken: userToken
    };
    const url = serverURL + threadAPIurl + '/updateThreadTitle';
    try {
        let res = await post(url, body);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
export async function deleteThread(threadID, userID, userToken) {
    const body = {
        ThreadID: threadID,
        CreatorID: userID,
        DeletorID: userID,
        DeletorToken: userToken
    };
    const url = serverURL + threadAPIurl + '/deleteThread';
    try {
        let res = await post(url, body);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}