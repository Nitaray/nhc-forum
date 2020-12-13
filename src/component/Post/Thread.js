import React from 'react';
import 'style/Thread.css';

import { getThread } from './api/threadAPI'

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
        let threadData = {};
        getThread(this.props.id).then((res) => {
            if (res.success)
                threadData = res.thread;
        });
        this.setState({
            author: {
                id: threadData.AuthorID,
                name: threadData.AuthorUsername
            },
            title: threadData.Title, 
            content: threadData.Content,
            comments: threadData.CommentIDs
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