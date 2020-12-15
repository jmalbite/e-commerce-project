import React from "react";
import useStyles from "./collection-item-style";
import {
	Card,
	CardHeader,
	CardMedia,
	CardActions,
	Button,
	Typography,
} from "@material-ui/core";

const CollectionItem = ({ id, name, price, imageUrl }) => {
	const classes = useStyles();
	return (
		<Card className={classes.root} key={id}>
			<CardHeader className={classes.title} title={name} />
			<CardMedia className={classes.media} image={imageUrl} />
			<CardActions>
				<Typography align='center' variant='h6'>
					{price}
				</Typography>
				<Button variant='outlined' size='small'>
					Add to cart
				</Button>
			</CardActions>
		</Card>
	);
};

export default CollectionItem;
