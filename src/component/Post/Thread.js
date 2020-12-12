import React from 'react';
import 'style/Thread.css';

import getThread from './api/getThread'

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {},
            title: "",
            content: "",
            comments: [],
        }
    }

    componentDidMount() {
        let threadData = getThread(this.props.id);
        this.setState({
            author: {
                id: threadData.author_id,
                name: threadData.author_name
            },
            title: threadData.title, 
            content: threadData.content,
            comments: threadData.comments
        })
    }
    
    render() {
        return (
            <div className="Thread"> 
                <div className='Author-info'>
                    {this.state.author.name}
                </div>
                <div className='Title'>
                    {this.state.title}
                </div>
                <div className='Content'>
                    {this.state.content}
                </div>
                <div className='Comments'>
                    {this.state.comments}
                </div>
            </div>
        );
    }
}

export default Thread;