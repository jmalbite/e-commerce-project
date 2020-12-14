import React from "react";
import useStyle from "./menu-item-style";

import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Grid,
} from "@material-ui/core";

const MenuItem = ({ title, imageUrl, size }) => {
	const classes = useStyle();
	return (
		// <Box className={classes.menuContainer} padding={0.5}>
		// 	<img className={classes.bkgrndImage} src={imageUrl} />
		// 	<Box className={classes.content}>
		// 		<h1 className={classes.title}>{title.toUpperCase()}</h1>
		// 		<Button variant='outlined'>Shop Now</Button>
		// 	</Box>
		// </Box>

		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={imageUrl} title={title} />
				<CardContent>
					<Typography variant='h5'>{title.toUpperCase()}</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button variant='outlined'>SHOP NOW</Button>
			</CardActions>
		</Card>
	);
};

export default MenuItem;
