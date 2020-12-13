import { Component } from 'react'

import ThreadPreview from './ThreadPreview'

import { getHotThreads } from './api/multiThreadAPI'
import { getThread } from './api/threadAPI'

class HotThreads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotThreadsPreviews: []
        }
    }

    async getThreadPreviews(threadIDs) {
        console.log('Getting previews')
        let threadPreviews = [];
        for (const id in threadIDs) {
            let res = await getThread(threadIDs[id])
            console.log(res);
            const author = {
                AuthorName: res.thread.AuthorUsername,
                AuthorID: res.thread.AuthorID
            }
            threadPreviews.push(<ThreadPreview author={author} title={res.thread.Title}/>)
            console.log('Got previews\n')
            console.log(threadPreviews)
        }
        return threadPreviews;
    }

    componentDidMount() {
        console.log('Getting hot threads ids')
        var hotThreadIds;
        getHotThreads()
        .then((res) => {
            hotThreadIds = res.threads;
            console.log('Got hot threads ids');
            console.log(hotThreadIds);
            this.getThreadPreviews(hotThreadIds)
            .then((previews) => {
                this.setState({
                    hotThreadsPreviews: previews
                })
                console.log(this.state.hotThreadsPreviews)
            })
        })
        .catch((err) => { console.log(err) })
    }

    render() {
        return this.state.hotThreadsPreviews.length ? (
            <>
                {this.state.hotThreadsPreviews}
            </>
        ) : (
            <span>Loading...</span>
        )
    }
}
export default HotThreads;