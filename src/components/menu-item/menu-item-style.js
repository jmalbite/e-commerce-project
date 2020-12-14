import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	// menuContainer: {
	// 	overflow: "hidden",
	// },
	// content: {
	// 	display: "flex",
	// 	justifyContent: "space-between",
	// },
	// bkgrndImage: {
	// 	backgroundPosition: "center",
	// 	backgroundSize: "cover",
	// 	// "&:hover": {
	// 	// 	transform: "scale(1.1)",
	// 	// 	transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
	// 	// },
	// },

	root: {
		backgroundColor: "#F4F4F6",
	},
	media: {
		height: 350,
		width: 400,
		backgroundPosition: "center",
		backgroundSize: "cover",
	},
}));

export default useStyles;
