import React from 'react';

import clsx from 'clsx'

import { Box, CssBaseline, Divider, Grid, Paper, Typography, withStyles } from '@material-ui/core';
import NavBar from '../Public/NavBar';

import { getThread } from './api/threadAPI'

import layoutStyle from '../Public/style/shiftableContent'
import contentStyle from './style/ThreadStyle'
import { getComments } from './Comment';

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {},
            title: "",
            content: "",
            dateCreated: "",
            comments: [],
            navBarOpen: true,
            redirects: []
        }
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.addRedirect = this.addRedirect.bind(this);
    }

    componentDidMount() {
        let threadData = {};
        getThread(this.props.location.state.id).then((res) => {
            if (res.success)
                threadData = res.thread;
            this.setState({
                author: {
                    id: threadData.AuthorID,
                    name: threadData.AuthorUsername
                },
                title: threadData.Title, 
                content: threadData.Content,
                dateCreated: threadData.CreationDate,
            })
            getComments(threadData.CommentIDs).then((res) => {
                this.setState({
                    comments: res
                })
            })
        })
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
    
    render() {
        const {classes} = this.props;
        return (
            <>
                <NavBar
                    session={this.props.session}
                    closeHandler={this.handleDrawerClose}
                    openHandler={this.handleDrawerOpen}
                    navBarOpen={this.state.navBarOpen}
                    redirectAdder={this.addRedirect}
                />
                <Box className={clsx(classes.bodyBox, { [classes.bodyBoxShift]: this.state.navBarOpen }, classes.root)}>
                    <Grid container>
                        <CssBaseline/>
                        <Grid item xs sm md lg>

                        </Grid>
                        <Grid item xs={11} sm={10} md={9}>
                            <Paper className={classes.paper}>
                                <Typography>
                                    <Box fontWeight='fontWeightBold' fontSize={26}>
                                        {this.state.title}
                                    </Box>
                                    <Box fontStyle='italic'>
                                        {this.state.dateCreated.slice(0, 10)}
                                    </Box>
                                    <Box fontStyle='italic' fontWeight='fontWeightBold'>
                                        {this.state.author.name}
                                    </Box>
                                </Typography>
                            </Paper>
                            <Paper className={classes.paper}>
                                <Typography>
                                    {this.state.content}
                                </Typography>
                            </Paper>
                            {(()=>{
                                const dividers = [];
                                for (let i = 0; i < 30; i++)
                                    dividers.push((<Divider/>));
                                return dividers;
                            })()}
                            {this.state.comments}
                        </Grid>
                        <Grid item xs sm md lg>

                        </Grid>
                    </Grid>
                </Box>
                {this.state.redirects}
            </>
        );
    }
}

export default withStyles((theme) => ({...layoutStyle(theme), ...contentStyle(theme)}), {withTheme: true})(Thread);