import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./collection-preview-style";
import CollectionItem from "../collection-item/collection-item-component";

const CollectionPreview = ({ title, items, id }) => {
	const classes = useStyles();

	return (
		<Box className={classes.collectionPreviewContainer} key={id}>
			<Typography variant='h4'>{title}</Typography>
			<Box className={classes.preview}>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem
							id={item.id}
							name={item.name}
							imageUrl={item.imageUrl}
							price={item.price}
						/>
					))}
			</Box>
		</Box>
	);
};

export default CollectionPreview;
