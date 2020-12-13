import React from "react";
import { Button } from "@material-ui/core";
import useStyle from "./menu-item-style";

const MenuItem = ({ title, imageUrl }) => {
	const classes = useStyle();
	return (
		<div className={classes.menuItem}>
			<div
				className={classes.backgroundImg}
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>

			<div className={classes.content}>
				<h1 className={classes.title}>{title.toUpperCase()}</h1>
				<Button variant='outlined'>Shop Now</Button>
			</div>
		</div>
	);
};

export default MenuItem;
