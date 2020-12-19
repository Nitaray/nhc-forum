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

import { validate } from "./api/Validate";
import { submitRegister } from "./api/authAPI";

import "./style/Auth.css"
import style from '../Public/style/shiftableContent';
import NavBar from "../Public/NavBar";

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

    handleRegister(email, username, password) {
        console.log('Logging in')
        submitRegister(email, username, password)
            .then(resp => {
                if (resp.success) {
                    const id = resp.userID, token = resp.userToken;
                    this.props.session['idHandler'](id);
                    this.props.session['tokenHandler'](token);
                    console.log(`Registration complete!`);
                    alert('Registration successful! Please log in!')
                } else {
                    alert('Registration error! Please try again!')
                }
            });
        this.addRedirect((
            <Redirect to='/login' />
        ))
    }

    render() {
        const { classes } = this.props;
        return this.props.session.token ? (
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
                            <Grid item xs sm md lg></Grid>
                            <Grid item xs={12} sm={8} md={6} lg={4}>
                                <div align="center">
                                    <Paper className="paper" variant="outlined">
                                        <div>
                                            <h1>Create a new NHC account</h1>
                                        </div>
                                        <div>
                                            <TextField
                                                id="email"
                                                label="Email"
                                                className="textfield"
                                                type="text"
                                                value={this.state.email.value}
                                                variant="outlined"
                                                required
                                                autoComplete="email"
                                                margin="normal"
                                                error={this.state.email.incorrect}
                                                helperText={this.state.email.errorMsg}
                                                onChange={(event) => {
                                                    let correctStatus =
                                                        validate(event.target.value, "email") ||
                                                        event.target.value === "";
                                                    this.setState({
                                                        email: {
                                                            value: event.target.value,
                                                            incorrect: !correctStatus,
                                                            errorMsg: correctStatus ? "" : "Invalid email address",
                                                        },
                                                    });
                                                }}
                                            />
                                            <TextField
                                                id="username"
                                                label="Username"
                                                className="textfield"
                                                type="text"
                                                value={this.state.username.value}
                                                variant="outlined"
                                                required
                                                autoComplete="username"
                                                margin="normal"
                                                error={this.state.username.incorrect}
                                                helperText={this.state.username.errorMsg}
                                                onChange={(event) => {
                                                    let correctStatus =
                                                        validate(event.target.value, "username") ||
                                                        event.target.value === "";
                                                    this.setState({
                                                        username: {
                                                            value: event.target.value,
                                                            incorrect: !correctStatus,
                                                            errorMsg: correctStatus ? "" :
                                                                "Username must be 6-20 characters long, and does not contain special characters!",
                                                        },
                                                    });
                                                }}
                                            />
                                            <TextField
                                                id="password"
                                                className="textfield"
                                                label="Password"
                                                type="password"
                                                variant="outlined"
                                                required
                                                autoComplete="new-password"
                                                margin="normal"
                                                value={this.state.password.value}
                                                error={this.state.password.incorrect}
                                                helperText={this.state.password.errorMsg}
                                                onChange={(event) => {
                                                    let correctStatus =
                                                        validate(event.target.value, "password") ||
                                                        event.target.value === "";
                                                    this.setState({
                                                        password: {
                                                            value: event.target.value,
                                                            incorrect: !correctStatus,
                                                            errorMsg: correctStatus ? "" :
                                                                "Password must be at least 8 characters long and contains at least one letter and one number!",
                                                        },
                                                    });
                                                }}
                                            />
                                            <TextField
                                                id="confirm-password"
                                                className="textfield"
                                                label="Confirm Password"
                                                type="password"
                                                variant="outlined"
                                                required
                                                autoComplete="new-password"
                                                margin="normal"
                                                value={this.state.confirmPassword.value}
                                                error={this.state.confirmPassword.incorrect}
                                                helperText={this.state.confirmPassword.errorMsg}
                                                onChange={(event) => {
                                                    let correctStatus =
                                                        event.target.value === this.state.password.value ||
                                                        event.target.value === "";
                                                    this.setState({
                                                        confirmPassword: {
                                                            value: event.target.value,
                                                            incorrect: !correctStatus,
                                                            errorMsg: correctStatus ? "" :
                                                                "Re-entered password does not match!",
                                                        },
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={
                                                    this.state.email.incorrect ||
                                                        this.state.username.incorrect ||
                                                        this.state.password.incorrect ||
                                                        this.state.confirmPassword.incorrect
                                                        ? () => {
                                                            this.setState({
                                                                email: {
                                                                    value: "",
                                                                    incorrect: true,
                                                                    errorMsg:
                                                                        "Invalid information! Please try again!",
                                                                },
                                                                username: {
                                                                    value: "",
                                                                    incorrect: true,
                                                                    errorMsg:
                                                                        "Invalid information! Please try again!",
                                                                },
                                                                password: {
                                                                    value: "",
                                                                    incorrect: true,
                                                                    errorMsg:
                                                                        "Invalid information! Please try again!",
                                                                },
                                                                confirmPassword: {
                                                                    value: "",
                                                                    incorrect: true,
                                                                    errorMsg:
                                                                        "Invalid information! Please try again!",
                                                                }
                                                            });
                                                        }
                                                        : () => {
                                                            this.handleRegister(
                                                                this.state.email.value,
                                                                this.state.username.value,
                                                                this.state.password.value
                                                            );
                                                        }
                                                }
                                                className="button"
                                            >
                                                Create account
                                        </Button>
                                        </div>
                                        <div>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Link component={RouteLink} to="/login">
                                                        <Typography variant="body1" align="center">
                                                            Already have an account? Log in here!
                                                    </Typography>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Paper>
                                </div>
                            </Grid>
                            <Grid item xs sm md lg></Grid>
                        </Grid>
                    </Box>
                    {this.state.redirects}
                </>
            );
    }
}

export default withStyles(style, { withTheme: true })(ThreadCreate);