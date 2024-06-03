import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Login_Page = () => {

	const navigation = useNavigation();
  	
	return (
		<ImageBackground
      source={require('../assets/paper background.jpg')}
      style={styles.background}
	  >
		<View style={styles.loginPage}>
		<View style={styles.topHalf}>	
		<Image
          source={require('../assets/E-Note-logo.png')}
          style={styles.enote}
          resizeMode="contain"
        />
		</View>
		<TouchableOpacity style={styles.rectangleParent} onPress={() => [navigation.navigate("Sign_in")] }>
		<View style={[styles.groupChild, styles.loginPosition]} />
		<Text style={[styles.login, styles.loginPosition]}>Login</Text>
		</TouchableOpacity>
		</View>
		</ImageBackground>);
		};

const styles = StyleSheet.create({
			background: {
			flex: 1,
			resizeMode: 'cover',
		},
			loginPosition: {
			height: 60,
			left: "50%",
			position: "absolute"
		},
		topHalf: {
			flex: 1,
			top: 80,
			left: 10,
			alignItems: 'center',
		},
			enote: {
			width: 150, // 50% of screen width
			height: 150 // 50% of screen height
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
			backgroundColor: 'rgba(0,0,0,0.1)',
			flex: 1,
			justifyContent: 'center',
    		alignItems: 'center',
		}
	});
export default Login_Page;
			
			