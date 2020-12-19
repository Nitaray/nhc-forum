import React from "react";

import clsx from 'clsx';

import { Link as RouteLink, Redirect } from "react-router-dom";

import {
    TextField,
    Grid,
    Paper,
    Button,
    Link,
    Typography,
    CssBaseline,
    Box,
    withStyles,
} from "@material-ui/core";



import layoutStyle from '../Public/style/shiftableContent';
import threadCreateStyle from './style/ThreadCreateStyle'

import NavBar from "../Public/NavBar";
import { postThread } from "./api/threadAPI";

class ThreadCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            navBarOpen: true,
            redirects: []
        };
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.addRedirect = this.addRedirect.bind(this);
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

    handleSubmit(title, content) {
        console.log('Creating Thread');
        postThread(title, content, this.props.session.id, this.props.session.token)
        .then((res) => {
            if (res.success) {
                console.log('Thread created successfully!');
                alert('Thread created successfully!');
                this.addRedirect((<Redirect to='/'/>));
            } else {
                console.log('Failed to create thread!');
                alert('Something went wrong while creating your thread! Please try again!');
            }
        })
    }

    render() {
        const { classes } = this.props;
        return !this.props.session.token ? (
            <Redirect to='/' />
        ) : (
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
                            <CssBaseline />
                            <Grid item xs sm md lg>

                            </Grid>
                            <Grid item xs={11} sm={10} md={9}>
                                <Paper className={classes.paper}>
                                    <TextField
                                        id="title"
                                        label="Thread Title"
                                        className={classes.textfield}
                                        type="text"
                                        value={this.state.title}
                                        variant="outlined"
                                        required
                                        autoComplete="text"
                                        margin="normal"
                                        onChange={(event) => {
                                            this.setState({
                                                title: event.target.value
                                            });
                                        }}>
                                        
                                    </TextField>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <TextField
                                        id="content"
                                        label="Thread Content"
                                        className={classes.textfield}
                                        type="text"
                                        value={this.state.content}
                                        variant="outlined"
                                        required
                                        autoComplete="text"
                                        margin="normal"
                                        multiline
                                        rows={4}
                                        rowsMax={16}
                                        onChange={(event) => {
                                            this.setState({
                                                content: event.target.value
                                            });
                                        }}>

                                    </TextField>
                                </Paper>
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                    onClick={() => {
                                        this.handleSubmit(this.state.title, this.state.content)
                                    }}>
                                    Create Thread
                                </Button>
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

export default withStyles((theme) => ({...layoutStyle(theme), ...threadCreateStyle(theme)}), { withTheme: true })(ThreadCreate);