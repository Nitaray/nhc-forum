import React from "react";

import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	IconButton,
	withStyles,
} from "@material-ui/core";

import icons from "./config/navIcons";
import requireToken from './config/navVisibility'

import { ChevronLeft } from "@material-ui/icons";

import { navFunc } from './api/NavFunc'

import style from './style/navBar'

class NavBar extends React.Component {
	navList(classes) {
		const token = this.props.session.token;
		const session = this.props.session;
		return (
			<div>
				<div className={classes.drawerHeader} align='right'>
					<IconButton onClick={this.props.closeHandler}>
						<ChevronLeft />
					</IconButton>
				</div>
				<Divider />
				<List>
					{["Home", "New", "Hot", "Followed"].map((text) => {
						return (token || !requireToken[text]) ? (
							<ListItem button key={text} onClick={() => { 
								(requireToken[text]) ? 
								navFunc[text](session, this.props.redirectAdder, this.props.threadTypeHandler) : 
								navFunc[text](this.props.redirectAdder, this.props.threadTypeHandler)
							}}>
								<ListItemIcon>{icons[text]}</ListItemIcon>
								<ListItemText>{text}</ListItemText>
							</ListItem>
						) : (
							<>
							</>
						)
					})}
				</List>
				<Divider />
				<List>
					{["Create Thread", "Search Thread"].map((text) => {
						return (token || !requireToken[text]) ? (
							<ListItem button key={text} onClick={() => {
								(requireToken[text]) ? 
								navFunc[text](session, this.props.redirectAdder) : 
								navFunc[text](this.props.redirectAdder) 
							}}>
								<ListItemIcon>{icons[text]}</ListItemIcon>
								<ListItemText>{text}</ListItemText>
							</ListItem>
						) : (
							<>
							</>
						)
					})}
				</List>
				<Divider />
				<List>
					{["My Account", "Logout", "Login"].map((text) => {
						return ((token || !requireToken[text]) && (!token || text !== 'Login')) ? (
							<ListItem button key={text} onClick={() => {
								(requireToken[text]) ? 
								navFunc[text](session, this.props.redirectAdder) : 
								navFunc[text](this.props.redirectAdder) 
							}}>
							<ListItemIcon>{icons[text]}</ListItemIcon>
							<ListItemText>{text}</ListItemText>
						</ListItem>
						) : (
							<>
							</>
						)
					})}
				</List>
			</div>
		);
	}

	render() {
		const {classes} = this.props;
		return (
			<Drawer
                className={classes.drawer}
				anchor="left"
				open={this.props.navBarOpen}
				variant='persistent'
				classes={{
					paper: classes.drawerPaper
				}}
			>
				{this.navList(this.props)}
			</Drawer>
		);
	}
}

export default withStyles(style, {withTheme: true})(NavBar);
