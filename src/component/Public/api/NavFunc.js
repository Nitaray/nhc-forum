import { Redirect } from 'react-router-dom'
import { submitLogout } from '../../Auth/api/authAPI'

function navToHome(redirector) {
    console.log('navHome')
}

function navToNews(redirector) {
    console.log('navNew')
}

function navToHot(redirector) {
    console.log('navHot')
}

function navToFollowed(session, redirector) {
    console.log('navFollow')
}

function navToThreadCreate(session, redirector) {
    console.log('navCreate')
}

function navToThreadSearch(redirector) {
    console.log('navSearch')
    alert('This feature is not yet implemented!')
}

function navToAccount(session, redirector) {
    console.log('navAccount')
    alert('This feature is not yet implemented!')
}

function navToLogout(session, redirector) {
    submitLogout(session.id, session.token).then(()=> {
        session.tokenHandler('');
        session.idHandler('');
        redirector((
        <Redirect to="/"/>
        ))
    })
}

function navToLogin(redirector) {
    redirector((
        <Redirect to="/login"/>
    ))
}

export const navFunc = {
    'Home': navToHome,
    'New': navToNews,
    'Hot': navToHot,
    'Followed': navToFollowed,
    'Create Thread': navToThreadCreate,
    'Search Thread': navToThreadSearch,
    'My Account': navToAccount,
    'Logout': navToLogout,
    'Login' : navToLogin
}