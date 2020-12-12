import React from "react";

import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	IconButton,
} from "@material-ui/core";

import icons from "./config/navIcons";

import "./style/nav.css";
import { ChevronLeft } from "@material-ui/icons";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	toggle(willOpen) {
		this.setState({
			open: willOpen,
		});
	}

	navList() {
		return (
			<div>
				<div className='drawerHeader' align='right'>
					<IconButton>
						<ChevronLeft />
					</IconButton>
				</div>
				<Divider />
				<List>
					{["Home", "New", "Hot", "Followed"].map((text) => {
						return (
							<ListItem button key={text}>
								<ListItemIcon>{icons[text]}</ListItemIcon>
								<ListItemText>{text}</ListItemText>
							</ListItem>
						);
					})}
				</List>
				<Divider />
				<List>
					{["Create Thread", "Search Thread"].map((text) => {
						return(
							<ListItem button key={text}>
								<ListItemIcon>{icons[text]}</ListItemIcon>
								<ListItemText>{text}</ListItemText>
							</ListItem>
						);
					})}
				</List>
				<Divider />
				<List>
					{["My Account", "Logout"].map((text) => {
						return(
						<ListItem button key={text}>
							<ListItemIcon>{icons[text]}</ListItemIcon>
							<ListItemText>{text}</ListItemText>
						</ListItem>
						);
					})}
				</List>
			</div>
		);
	}

	render() {
		return (
			<Drawer
                className='drawer'
				anchor="left"
				open={this.state.open}
				// onClose={this.toggle(false)}
				variant='persistent'
			>
				{this.navList()}
			</Drawer>
		);
	}
}

export default NavBar;
