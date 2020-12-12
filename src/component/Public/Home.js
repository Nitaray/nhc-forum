import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import threadAPI from '../Post/api/threadAPI'

import NavBar from './NavBar'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div align='center'>
                    <div>
                        <h1>Home</h1>
                    </div>
                    <div>
                        <Button variant='contained' color='primary' component={Link}to='/login'>
                            Hi
                        </Button>
                    </div>
                </div>
                <div>
                    <NavBar/>
                </div>

            </React.Fragment>
        )
    }
}

export default Home;