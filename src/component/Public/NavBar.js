import React from "react";

import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	Divider,
} from "@material-ui/core";

import icons from "./config/navIcons";

import "./style/nav.css";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	toggle(open) {
		this.setState({
			open: open,
		});
	}

	navList() {
		return (
			<div>
				<List>
					{["Home", "New", "Hot", "Followed"].map((text) => {
						<ListItem button key={text}>
							<ListItemIcon>{icons[text]}</ListItemIcon>
						</ListItem>;
					})}
				</List>
				<Divider />
				<List>
					{["Create Thread", "Search Thread"].map((text) => {
						<ListItem button key={text}>
							<ListItemIcon>{icons[text]}</ListItemIcon>
						</ListItem>;
					})}
				</List>
				<Divider />
				<List>
					{["My Account", "Logout"].map((text) => {
						<ListItem button key={text}>
							<ListItemIcon>{icons[text]}</ListItemIcon>
						</ListItem>;
					})}
				</List>
			</div>
		);
	}

	render() {
		return (
			<Drawer
                className='.drawer'
				anchor="left"
				open={this.state.open}
				// onClose={this.toggle(false)}
			>
				{this.navList()}
			</Drawer>
		);
	}
}

export default NavBar;
