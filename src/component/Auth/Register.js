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
import { submitRegister } from "./api/SubmitRegister";

import "./style/Auth.css";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: "",
                incorrect: false,
                errorMsg: "",
            },
            username: {
                value: "",
                incorrect: false,
                errorMsg: "",
            },
            password: {
                value: "",
                incorrect: false,
                errorMsg: "",
            },
            confirmPassword: {
                value: "",
                incorrect: false,
                errorMsg: ""
            }
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
                                    error = {this.state.password.incorrect}
                                    helperText = {this.state.password.errorMsg}
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
                                    error = {this.state.confirmPassword.incorrect}
                                    helperText = {this.state.confirmPassword.errorMsg}
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
                                        this.state.email.incorrect      || 
                                        this.state.username.incorrect   || 
                                        this.state.password.incorrect   ||
                                        this.state.confirmPassword.incorrect
                                            ? () => {
                                                this.setState({
                                                    email: {
                                                        value: "",
                                                        incorrect: true,
                                                        errorMsg:
                                                            "Invalid information! Please try again!",
                                                    },
                                                });
                                            }
                                            : () => {
                                                submitRegister(
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
                                    <Grid item xs="12">
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
        );
    }
}

export default Register;