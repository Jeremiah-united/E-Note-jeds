import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";


const Login_Page = () => {

	const navigation = useNavigation();
  	
	return (
		<View style={styles.loginPage}>
		<TouchableOpacity style={styles.rectangleParent} onPress={() => [navigation.navigate("Sign_in")] }>
		<View style={[styles.groupChild, styles.loginPosition]} />
		<Text style={[styles.login, styles.loginPosition]}>Login</Text>
		</TouchableOpacity>
		</View>);
		};

const styles = StyleSheet.create({
			loginPosition: {
			height: 60,
			left: "50%",
			position: "absolute"
		},
			groupChild: {
			marginLeft: -149.5,
			top: 0,
			borderRadius: 94,
			backgroundColor: "#0c172c",
			width: 299,
			height: 60,
			left: "50%",
			position: "absolute"
		},
			login: {
			marginTop: -30,
			marginLeft: -135.5,
			top: "50%",
			fontSize: 30,
			letterSpacing: 1.8,
			fontWeight: "700",
			color: "#fff",
			textAlign: "center",
			width: 272,
			height: 60,
			left: "50%",
			position: "absolute"
		},
			rectangleParent: {
			marginLeft: -149,
			top: 370,
			width: 299,
			height: 60,
			left: "50%",
			position: "absolute"
		},
			loginPage: {
			backgroundColor: "#006793",
			flex: 1,
			width: "100%",
			height: 800,
			overflow: "hidden"
		}
	});
export default Login_Page;
			
			