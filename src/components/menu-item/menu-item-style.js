import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#F4F4F6",
		"&:hover": {
			boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
		},
	},
	media: {
		height: 350,
		width: 400,
		backgroundPosition: "center",
		backgroundSize: "cover",
	},
}));

export default useStyles;
