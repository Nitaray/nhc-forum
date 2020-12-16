import React from "react";

import { Link as RouteLink, Redirect } from "react-router-dom";

import {
    TextField,
    Grid,
    Paper,
    Button,
    Link,
    Typography,
    CssBaseline,
    Avatar,
} from "@material-ui/core";

import LockOpenIcon from '@material-ui/icons/LockOpen';

import { validate } from "./api/Validate";
import { submitLogin } from "./api/authAPI";

import "./style/Auth.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: {
                value: "",
                incorrect: false,
                errorMsg: "",
            },
            password: {
                value: "",
            }
        };
    }

    handleLogin(username, password) {
        console.log('Logging in')
        submitLogin(username, password)
        .then(resp => {
            if (resp.success) {
                const id = resp.userID, token = resp.userToken;
                this.props.session['idHandler'](id);
                this.props.session['tokenHandler'](token);
                console.log(`Logged in with token ${token}`);
                console.log(this.props.session);
            } else {
                alert('Login error! Please try again!')
        }});
    }

    render() {
        return this.props.session.token ?  (
            <Redirect to='/'/>
        ) : (
            <>
                <Grid container className="root">
                    <CssBaseline />
                    <Grid item xs sm md lg></Grid>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <div align="center">
                            <Paper className="paper" variant="outlined">
                                <div>
                                    <h1>LOGIN TO NHC FORUM</h1>
                                </div>
                                <div>
                                    <Avatar className='avatar'>
                                        <LockOpenIcon color='secondary'/>
                                    </Avatar>
                                </div>
                                <div>
                                    <TextField
                                        id           = "username"
                                        label        = "Username"
                                        className    = "textfield"
                                        type         = "text"
                                        value        = {this.state.username.value}
                                        variant      = "outlined"
                                        required
                                        autoComplete = "username"
                                        margin       = "normal"
                                        error        = {this.state.username.incorrect}
                                        helperText   = {this.state.username.errorMsg}
                                        onChange     = {(event) => {
                                            let correctStatus =
                                                validate(event.target.value, "username") ||
                                                event.target.value === "";
                                            this.setState({
                                                username: {
                                                    value: event.target.value,
                                                    incorrect: !correctStatus,
                                                    errorMsg: correctStatus ? "" : "Invalid username",
                                                },
                                            });
                                        }}
                                    />
                                    <TextField
                                        id           = "password"
                                        className    = "textfield"
                                        label        = "Password"
                                        type         = "password"
                                        variant      = "outlined"
                                        required
                                        autoComplete = "current-password"
                                        margin       = "normal"
                                        onChange     = {(event) => {
                                            this.setState({
                                                password: {
                                                    value: event.target.value,
                                                },
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <Button
                                        variant   = "contained"
                                        color     = "primary"
                                        className = "button"
                                        onClick   = {
                                            this.state.username.incorrect ? 
                                                () => {
                                                    this.setState({
                                                        username: {
                                                            value: "",
                                                            incorrect: true,
                                                            errorMsg:
                                                                "Invalid username! Please try again!",
                                                        },
                                                    });
                                                }
                                                : () => {
                                                    this.handleLogin(
                                                        this.state.username.value,
                                                        this.state.password.value
                                                    );
                                                }
                                            }>
                                        Login
                                    </Button>
                                </div>
                                <div>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Link component={RouteLink} to="/register">
                                                <Typography variant="body1" align="center">
                                                    Don't have an account? Sign up here!
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
            </>
        );
    }
}

export default Login;
