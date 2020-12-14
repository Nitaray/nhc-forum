import { Component } from 'react'

import { getNewThreads } from './api/multiThreadAPI'
import { getThreadPreviews } from './ThreadPreview'

class NewThreads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newThreadsPreviews: []
        }
    }

    componentDidMount() {
        console.log('Getting new threads ids')
        var newThreadIds;
        getNewThreads()
            .then((res) => {
                newThreadIds = res.threads;
                console.log('Got new threads ids');
                console.log(newThreadIds);
                getThreadPreviews(newThreadIds)
                    .then((previews) => {
                        this.setState({
                            newThreadsPreviews: previews
                        })
                        console.log(this.state.newThreadsPreviews)
                    })
            })
            .catch((err) => { console.log(err) })
    }

    render() {
        return this.state.newThreadsPreviews.length ? (
            <>
                {this.state.newThreadsPreviews}
            </>
        ) : (
                <span style={{color: 'white'}}>Loading...</span>
            )
    }
}
export default NewThreads;