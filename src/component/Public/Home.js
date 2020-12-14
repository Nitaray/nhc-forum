import React from 'react'
import clsx from 'clsx'

import NavBar from './NavBar'
import { AppBar, CssBaseline, Grid, Toolbar, IconButton, Typography, withStyles, Box} from '@material-ui/core';
import { Menu } from '@material-ui/icons'

import style from './style/home'

import HotThreads from '../Post/HotThreads'
import NewThreads from '../Post/NewThreads'
import FollowedThreads from '../Post/FollowedThreads'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarOpen: true,
            redirects: [],
            threadType: 'News'
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
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.navBarOpen,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, this.state.navBarOpen && classes.hide)}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            NHC Forum
                        </Typography>
                    </Toolbar>
                </AppBar>
                <NavBar
                    session={this.props.session}
                    closeHandler={this.handleDrawerClose}
                    navBarOpen={this.state.navBarOpen}
                    redirectAdder={this.addRedirect}
                    threadTypeHandler={this.handleThreadType}
                />
                <Box className={clsx(classes.bodyBox, {[classes.bodyBoxShift]: this.state.navBarOpen}, 'root')}>
                    <Grid container>
                        <Grid item xs sm md>

                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            {/* {() => {
                                switch(this.state.threadType) {
                                    case "Hot":
                                        return (<HotThreads/>)
                                    case "Followed":
                                        return (<FollowedThreads session={this.props.session}/>)
                                    default:
                                        return (<NewThreads/>)
                                }
                            }} */}
                            <FollowedThreads session={this.props.session}/>
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