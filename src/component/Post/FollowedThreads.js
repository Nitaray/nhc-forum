import { Component } from 'react'

import { getFollowedThreads } from './api/multiThreadAPI'
import { getThreadPreviews } from './ThreadPreview'

class FollowedThreads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followedThreadPreviews: []
        }
    }

    componentDidMount() {
        console.log('Getting followed threads ids')
        var followedThreadIDs;
        getFollowedThreads(this.props.session.id, this.props.session.token)
            .then((res) => {
                followedThreadIDs = res.threads;
                console.log('Got followed threads ids');
                console.log(followedThreadIDs);
                getThreadPreviews(followedThreadIDs)
                    .then((previews) => {
                        this.setState({
                            followedThreadPreviews: previews
                        })
                        console.log(this.state.followedThreadPreviews)
                    })
            })
            .catch((err) => { console.log(err) })
    }

    render() {
        return this.state.followedThreadPreviews.length ? (
            <>
                {this.state.followedThreadPreviews}
            </>
        ) : (
                <span style={{ color: 'white', cursor: 'progress'}}>Loading...</span>
            )
    }
}
export default FollowedThreads;