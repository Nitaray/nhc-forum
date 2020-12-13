import { get, post } from 'axios';
import { serverURL, manageMemberAPIurl } from '../config/url'

export const getMembers = async (userID, userToken) => {
    const res = {
        success: true,
        members: {}
    }
    const params = {
        UserID: userID,
        UserToken: userToken
    }
    const url = serverURL + manageMemberAPIurl + '/getMemberUsernamesAndIDs';
    try {
        let resp = await get(url, {params});
        res.members = resp.data;
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export const banMember = async (userID, userToken, memberID) => {
    const res = {
        success: true
    }
    const body = {
        AdminID: userID,
        AdminToken: userToken,
        MemberID: memberID
    }
    const url = serverURL + manageMemberAPIurl + '/banMember';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export const makeMod = async (userID, userToken, memberID) => {
    const res = {
        success: true
    }
    const body = {
        AdminID: userID,
        AdminToken: userToken,
        NewModID: memberID
    }
    const url = serverURL + manageMemberAPIurl + '/makeMod';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}

export const removeMod = async (userID, userToken, modID) => {
    const res = {
        success: true
    }
    const body = {
        AdminID: userID,
        AdminToken: userToken,
        OldModID: modID
    }
    const url = serverURL + manageMemberAPIurl + '/takeMod';
    try {
        await post(url, body);
    } catch (err) {
        res.success = false;
        console.log(err);
    }
    return res;
}