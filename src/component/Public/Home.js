import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

import NavBar from './NavBar'

class Home extends React.Component {
    render() {
        return (
            <div align='center'>
                <div>
                    <h1>Home</h1>
                </div>
                <div>
                    <Button variant='contained' color='primary' component={Link}to='/login'>
                        Hi
                    </Button>
                </div>
                <div>
                    <NavBar/>
                </div>
            </div>
        )
    }
}

export default Home;