import { get, post } from 'axios';
import { serverURL, commentAPIurl } from '../config/url';

export const getComment = async (commentID) => {
    const res = {
        success: true,
        comment: {}
    }
    const params = {
        CommentID: commentID
    }
    const url = serverURL + commentAPIurl + '/getComment';
    try {
        let resp = await get(url, {params});
        res.comment = resp.data;
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export const createComment = async (content, userID, userToken, threadID) => {
    const res = {
        success: true
    }
    const body = {
        Content: content,
        CreatorID: userID,
        UserToken: userToken,
        ContainingThreadID: threadID
    }
    const url = serverURL + commentAPIurl + '/createComment';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export const updateComment = async (content, commentID, userID, userToken) => {
    const res = {
        success: true
    }
    const body = {
        Content: content,
        CommentID: commentID,
        CreatorID: userID,
        UserToken: userToken
    }
    const url = serverURL + commentAPIurl + '/updateComment';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export const deleteComment = async (commentID, userID, userToken) => {
    const res = {
        success: true
    }
    const body = {
        CommentID: commentID,
        DeletorID: userID,
        DeletorToken: userToken
    }
    const url = serverURL + commentAPIurl + '/deleteComment';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

