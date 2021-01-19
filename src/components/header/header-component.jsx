import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";

const Header = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<AppBar position='static' color='#f6f6f6'>
			<Toolbar>
				<Tabs value={value} onChange={handleChange}>
					<Tab label='home' to='/' component={Link} />
					<Tab label='shop' to='/shop' component={Link} />
					<Tab label='contact' />
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
