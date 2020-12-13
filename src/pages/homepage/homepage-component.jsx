import React from "react";
import Directory from "../../components/directory/directory-component";
import useStyles from "./homepage-style";

const HomePage = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Directory />
		</div>
	);
};

export default HomePage;
