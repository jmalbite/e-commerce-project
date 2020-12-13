import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	menuItem: {
		minWidth: "30%",
		height: "240px",
		flex: "1 1 auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "0 7.5px 15px",
		overflow: "hidden",
	},

	backgroundImg: {
		width: "100%",
		heigh: "100%",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},

	content: {
		height: "90px",
		padding: "0 25px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		border: "1px solid black",
		backgroundColor: "white",
		opacity: "0.7",
		position: "absolute",
	},
}));

export default useStyles;
