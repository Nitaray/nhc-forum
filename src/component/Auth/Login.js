import React from "react";

import { Link as RouteLink } from "react-router-dom";

import {
    TextField,
    Grid,
    Paper,
    Button,
    Link,
    Typography,
    CssBaseline,
} from "@material-ui/core";

import { validate } from "./api/Validate";
import { submitLogin } from "./api/SubmitLogin";

import "./style/Auth.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: "",
                incorrect: false,
                errorMsg: "",
            },
            password: {
                value: "",
            },
        };
    }

    render() {
        return (
            <Grid container className="root">
                <CssBaseline />
                <Grid item xs sm md lg></Grid>
                <Grid item xs="12" sm="8" md="6" lg="4" alignContent="center">
                    <div align="center">
                        <Paper className="paper" variant="outlined">
                            <div>
                                <h1>Log in to NHC Forum</h1>
                            </div>
                            <div>
                                <TextField
                                    id           = "email"
                                    label        = "Email"
                                    className    = "textfield"
                                    type         = "text"
                                    value        = {this.state.email.value}
                                    variant      = "outlined"
                                    required
                                    autoComplete = "email"
                                    margin       = "normal"
                                    error        = {this.state.email.incorrect}
                                    helperText   = {this.state.email.errorMsg}
                                    onChange     = {(event) => {
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
                                        this.state.email.incorrect ? 
                                            () => {
                                                this.setState({
                                                    email: {
                                                        value: "",
                                                        incorrect: true,
                                                        errorMsg:
                                                            "Invalid email address! Please try again!",
                                                    },
                                                });
                                            }
                                            : () => {
                                                submitLogin(
                                                    this.state.email.value,
                                                    this.state.password.value
                                                );
                                            }
                                        }>
                                    Login
                                </Button>
                            </div>
                            <div>
                                <Grid container>
                                    <Grid item xs="12">
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
        );
    }
}

export default Login;
