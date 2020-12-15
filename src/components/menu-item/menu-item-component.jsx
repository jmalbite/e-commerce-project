import React from "react";
import useStyle from "./menu-item-style";
import { withRouter } from "react-router-dom";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";

const MenuItem = ({ title, imageUrl, linkUrl, history, match }) => {
	const classes = useStyle();
	return (
		<Card
			className={classes.root}
			variant='outlined'
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<CardActionArea>
				<CardMedia className={classes.media} image={imageUrl} title={title} />
				<CardContent>
					<Typography variant='h5'>{title.toUpperCase()}</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Typography variant='h6' color='secondary'>
					Shop Now
				</Typography>
			</CardActions>
		</Card>
	);
};

export default withRouter(MenuItem);
//use withRouter() fucntion to avoid props tunneling
