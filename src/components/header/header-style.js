import { makeStlyes, makeStyles } from "@material-ui/styles";
import useStyles from "../menu-item/menu-item-style";

const useStlyes = makeStyles((theme) => ({
	logo: {
		height: "20",
		width: "20",
	},
}));

export default useStyles;
