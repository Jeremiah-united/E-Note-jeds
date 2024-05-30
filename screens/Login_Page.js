import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";


const AndroidLarge = () => {

	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.androidLarge3}>
      			<View style={[styles.androidLarge3Inner, styles.frameWrapperLayout]}>
        				<View style={[styles.frameWrapper, styles.wrapperPosition]}>
          					<View style={[styles.frameWrapper, styles.wrapperPosition]}>
            						<View style={[styles.frameChild, styles.frameTransform]} />
            						<View style={[styles.frameItem, styles.frameTransform]} />
            						<View style={[styles.frameInner, styles.frameTransform]} />
          					</View>
        				</View>
      			</View>
      			<TouchableOpacity style={[styles.rectangleGroup, styles.groupLayout]} onPress={() => [navigation.navigate("Sign_in")]}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.login, styles.loginTypo]}>Login</Text>
      			</TouchableOpacity>
    		</View>);
};

const styles = StyleSheet.create({
  	frameWrapperLayout: {
    		height: 1108,
    		width: 1079,
    		position: "absolute"
  	},
  	wrapperPosition: {
    		left: 0,
    		top: 0
  	},
  	frameTransform: {
    		transform: [
      			{
        				rotate: "-117.6deg"
      			}
    		],
    		borderRadius: 32,
    		position: "absolute"
  	},
  	groupLayout: {
    		height: 60,
    		width: 299,
    		position: "absolute"
  	},
  	loginTypo: {
    		width: 272,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#fff",
    		fontFamily: "ZenMaruGothic-Bold",
    		fontWeight: "700",
    		fontSize: 30,
    		left: 14,
    		height: 60,
    		position: "absolute"
  	},
  	frameChild: {
    		top: 1108,
    		left: 375,
    		backgroundColor: "#5fb8de",
    		width: 809,
    		height: 805
  	},
  	frameItem: {
    		top: 927,
    		left: 636,
    		backgroundColor: "#006793",
    		width: 614,
    		height: 618
  	},
  	frameInner: {
    		top: 646,
    		left: 677,
    		width: 336,
    		height: 344,
    		backgroundColor: "#0c172c"
  	},
  	frameWrapper: {
    		height: 1108,
    		width: 1079,
    		position: "absolute"
  	},
  	androidLarge3Inner: {
    		top: -358,
    		left: -246
  	},
  	groupChild: {
    		borderRadius: 94,
    		backgroundColor: "#0c172c",
    		left: 0,
    		top: 0
  	},
  	rectangleWrapper: {
    		left: 0,
    		top: 0
  	},
  	createAnAccount: {
    		top: 4,
    		letterSpacing: 0.9
  	},
  	groupParent: {
    		top: 491,
    		height: 64,
    		width: 299,
    		left: 30,
    		position: "absolute"
  	},
  	login: {
    		letterSpacing: 1.8,
    		top: 0,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#fff",
    		fontFamily: "ZenMaruGothic-Bold",
    		fontWeight: "700",
    		fontSize: 30,
    		left: 14
  	},
  	rectangleGroup: {
    		top: 400,
    		left: 30,
    		height: 60
  	},
  	androidLarge3: {
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 800,
    		overflow: "hidden"
  	}
});

export default AndroidLarge;





