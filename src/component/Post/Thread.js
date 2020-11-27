import React from 'react';
import 'style/Thread.css';

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            author: "",
        };
    }
    
    render() {
        return (
            <div className="Thread"> 
                <h1>Thread</h1>
            </div>
        );
    }
}

export default Thread;