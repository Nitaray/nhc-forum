import Component from 'react';
import 'style/Thread.css';

class Thread extends Component {
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
                
            </div>
        );
    }
}

export default Thread;