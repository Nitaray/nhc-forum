import { submitLogout } from '../../Auth/api/authAPI'

function navToHome() {

}

function navToNews() {

}

function navToHot() {

}

function navToFollowed() {

}

function navToThreadCreate() {

}

function navToThreadSearch() {

}

function navToAccount() {

}

export const navFunc = {
    'Home': navToHome,
    'New': navToNews,
    'Hot': navToHot,
    'Followed': navToFollowed,
    'CreateThread': navToThreadCreate,
    'SearchThread': navToThreadSearch,
    'My Account': navToAccount,
    'Logout': submitLogout
}