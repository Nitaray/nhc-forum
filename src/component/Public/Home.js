import React from 'react'
import clsx from 'clsx'

import NavBar from './NavBar'
import { CssBaseline, Grid, withStyles, Box} from '@material-ui/core';

import style from './style/shiftableContent'

import HotThreads from '../Post/HotThreads'
import NewThreads from '../Post/NewThreads'
import FollowedThreads from '../Post/FollowedThreads'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarOpen: true,
            redirects: [],
            threadType: 'New'
        }
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.addRedirect = this.addRedirect.bind(this);
        this.handleThreadType = this.handleThreadType.bind(this);
    }

    handleDrawerOpen() {
        this.setState({
            navBarOpen: true
        })
    }

    handleDrawerClose() {
        this.setState({
            navBarOpen: false
        })
    }

    addRedirect(redirect) {
        this.setState({
            navBarOpen: this.state.navBarOpen,
            redirects: [redirect]
        })
    }

    handleThreadType(type) {
        this.setState({
            threadType: type
        })
    }


    render() {
        const {classes} = this.props;
        return (
            <>
                <CssBaseline/>
                <NavBar
                    session={this.props.session}
                    closeHandler={this.handleDrawerClose}
                    openHandler={this.handleDrawerOpen}
                    navBarOpen={this.state.navBarOpen}
                    redirectAdder={this.addRedirect}
                    threadTypeHandler={this.handleThreadType}
                />
                <Box className={clsx(classes.bodyBox, {[classes.bodyBoxShift]: this.state.navBarOpen}, 'root')}>
                    <Grid container>
                        <Grid item xs sm md>

                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            {(() => {
                                switch(this.state.threadType) {
                                    case "Hot":
                                        return (<HotThreads/>)
                                    case "Followed":
                                        return (<FollowedThreads session={this.props.session}/>)
                                    default:
                                        return (<NewThreads/>)
                                }
                            })()}
                        </Grid>
                        <Grid item xs sm md>

                        </Grid>
                    </Grid>
                </Box>
                {this.state.redirects}
            </>
        )
    }
}

export default withStyles(style,{withTheme:true})(Home);