import { Component } from 'react'

import ThreadPreview, {getThreadPreviews} from './ThreadPreview'

import { getHotThreads } from './api/multiThreadAPI'
import { getThread } from './api/threadAPI'

class HotThreads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotThreadsPreviews: []
        }
    }

    componentDidMount() {
        console.log('Getting hot threads ids')
        var hotThreadIds;
        getHotThreads()
        .then((res) => {
            hotThreadIds = res.threads;
            console.log('Got hot threads ids');
            console.log(hotThreadIds);
            getThreadPreviews(hotThreadIds)
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
            <span style={{color:'white'}}>Loading...</span>
        )
    }
}
export default HotThreads;