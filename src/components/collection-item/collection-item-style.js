import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "20px",
		marginBottom: "20px",
		width: "22.5%",
		//border: "1px solid black",
		boxSizing: "border-box",
		backgroundColor: "#ffe2e2",

		"&:hover": {
			boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
		},
	},

	media: {
		height: 400,
	},

	title: {},

	actions: {
		justifyContent: "space-between",
	},
}));

export default useStyles;
