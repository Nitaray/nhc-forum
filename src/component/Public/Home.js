import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

import HotThreads from '../Post/HotThreads'
import NavBar from './NavBar'
import ThreadPreview from '../Post/ThreadPreview';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div align='center'>
                    {/* <div>
                        <h1>Home</h1>
                    </div>
                    <div>
                        <Button variant='contained' color='primary' component={Link}to='/login'>
                            Hi
                        </Button>
                    </div> */}
                    <HotThreads/>
                </div>
                <div>
                    <NavBar/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;