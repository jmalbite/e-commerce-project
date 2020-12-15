import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	collectionPreviewContainer: {
		//border: "1px solid black",
		marginTop: "80",
		maginBottom: 80,
		width: "80%",
		display: "column",
		margin: "auto",
	},

	preview: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

export default useStyles;
