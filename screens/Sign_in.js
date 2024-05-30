import React, { useState } from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import { firestore } from '../Firebase';
import database from '@react-native-firebase/database';
import { collection, getDocs, query, where } from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";


const AndroidLarge1 = () => {

  const [Username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    setError('');
    const studentsRef = collection(firestore, "students");
    const q = query(studentsRef, where('Username', '==', Username), where('password', '==', password));

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        [navigation.navigate('My_Modules')];
      } else {
        setError('Invalid student number or password');
      }
    } catch (err) {
      console.error('Error logging in: ', err);
      setError('Something went wrong. Please try again.');
}
};
  	
  	return (
    		<View style={styles.androidLarge4}>
      			<View style={styles.rectangleParent}>
        				<View style={[styles.groupChild, styles.groupTransform]} />
        				<View style={[styles.groupItem, styles.groupTransform]} />
        				<View style={[styles.groupInner, styles.groupTransform]} />
      			</View>
      			<TouchableOpacity style={[styles.vectorParent, styles.groupParentLayout]} onPress={handleLogin}>
        				<Image style={[styles.rectangleIcon, styles.rectanglePosition]} resizeMode="cover" source="Rectangle 38.png" />
        				<Text style={[styles.enter, styles.enterClr]}>Login</Text>
      			</TouchableOpacity>
      			<View style={[styles.androidLarge4Child, styles.rectangleParent1Layout]} />
      			<Text style={[styles.forgotPassword, styles.enterTypo1]}>forgot password</Text>
      			<Text style={[styles.welcomeBack, styles.enterClr]}>Welcome Back</Text>
      			<Text style={[styles.loginToYour, styles.enterClr]}>Login to your account</Text>
      			<TouchableOpacity style={[styles.rectangleGroup, styles.groupParentLayout]} onPress={() => [navigation.navigate("TestNoter")]}>
        				<View style={[styles.rectangleView, styles.rectangleViewBg]} />
        				<Text style={[styles.dontHaveAnContainer, styles.enterTypo1]}>
          					<Text style={styles.dontHaveAn}>{`Don’t have an account?`}</Text>
          					<Text style={styles.createAccount}>{`\nCreate account`}</Text>
                </Text>
            </TouchableOpacity>
            <View style={[styles.groupParent, styles.groupParentLayout]}>
                <View style={[styles.rectangleContainer, styles.groupChildPosition]}>
                    <View style={[styles.groupChild1, styles.groupChildPosition]} />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    <TextInput
                      style={[styles.enterYourUsername, styles.enterTypo]}
                      placeholder="Username"
                      value={Username}
                      onChangeText={setUsername}
                    />
                </View>
                <View style={styles.ellipseParent}>
                    <Image style={[styles.ellipseIcon, styles.ellipseIconLayout]} resizeMode="cover" source="Ellipse 24.png" />
                    <View style={[styles.groupChild2, styles.groupChildPosition]} />
                </View>
            </View>
            <View style={[styles.groupContainer, styles.groupParentLayout]}>
                <View style={[styles.rectangleContainer, styles.groupChildPosition]}>
                    <View style={[styles.groupChild1, styles.groupChildPosition]} />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    <TextInput
                    style={[styles.enterYourPassword, styles.instanceChildLayout]}
                    placeholder="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    />
                </View>
                <Image style={[styles.instanceChild, styles.instanceChildLayout]} resizeMode="cover" source="Group 68.png" />
            </View>
            <View style={[styles.rectangleParent1, styles.rectangleParent1Layout]}>
                <View style={[styles.instanceItem, styles.groupChildPosition]} />
                <View style={[styles.rectangleContainer, styles.groupChildPosition]}>
                    <Text style={[styles.staySignedIn, styles.groupChildPosition]}>    Stay signed in?</Text>
                    <View style={styles.groupChild4} />
                </View>
            </View>
            <TouchableOpacity style={[styles.backArrrow, styles.backLayout]} onPress={()=>{}}>
                <Image style={[styles.backArrrowChild, styles.backLayout]} resizeMode="cover" source="Ellipse 23.png" />
                <View style={styles.rectangleParent2}>
                    <View style={[styles.groupChild5, styles.groupChildLayout]} />
                    <View style={[styles.groupChild6, styles.groupChildLayout]} />
                </View>
            </TouchableOpacity>
        </View>);
};

const styles = StyleSheet.create({
    groupTransform: {
        transform: [
            {
                rotate: "-118.4deg"
            }
        ],
        borderRadius: 32,
        position: "absolute"
    },
    groupParentLayout: {
        height: 60,
        width: 299
    },
    rectanglePosition: {
        top: 0,
        left: 0
    },
    enterClr: {
        color: "blue",
        textAlign: "center",
        position: "absolute"
    },
    rectangleParent1Layout: {
        height: 33,
        width: 299,
        left: 30,
        position: "absolute"
    },
    enterTypo1: {
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700"
    },
    rectangleViewBg: {
        backgroundColor: "#d9d9d9",
        borderRadius: 59
    },
    groupChildPosition: {
        left: "0%",
        position: "relative",
        width: "100%"
    },
    enterTypo: {
        left: "20.74%",
        top: "21.67%",
        width: "73.24%",
        textAlign: "center",
        color: "#fff",
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700",
        letterSpacing: 1.2,
        fontSize: 20
    },
    ellipseIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden"
    },
    instanceChildLayout: {
        height: "50%",
        position: "absolute"
    },
    backLayout: {
        height: 40,
        width: 40,
        position: "absolute"
    },
    groupChildLayout: {
        height: 4,
        backgroundColor: "#000",
        borderRadius: 60,
        transform: [
            {
                rotate: "-118.4deg"
            }
        ],
        position: "absolute"
    },
    groupChild: {
        top: 1162,
        left: 406,
        backgroundColor: "#5fb8de",
        width: 854,
        height: 864
    },
    groupItem: {
        top: 972,
        left: 688,
        backgroundColor: "#006793",
        width: 654,
        height: 657
    },
    groupInner: {
        top: 678,
        left: 731,
        width: 362,
        height: 362,
        backgroundColor: "#0c172c"
    },
    rectangleParent: {
        top: -398,
        left: -333,
        width: 1166,
        height: 1162,
        position: "absolute"
    },
    rectangleIcon: {
        borderRadius: 46,
        left: 0,
        height: 60,
        width: 299,
        position: "absolute"
    },
    enter: {
        top: 14,
        height: 32,
        textAlign: "center",
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700",
        letterSpacing: 1.2,
        color: "#000",
        fontSize: 20,
        left: 0,
        width: 299
    },
    vectorParent: {
        top: 573,
        left: 30,
        position: "absolute"
    },
    androidLarge4Child: {
        backgroundColor: "#d9d9d9",
        borderRadius: 59,
        top: 469
    },
    forgotPassword: {
        height: 29,
        color: "#000",
        top: 469,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        width: 299,
        position: "absolute",
        left: 30
    },
    welcomeBack: {
        top: 126,
        left: 35,
        fontSize: 42,
        fontFamily: "Fredoka One",
        textAlign: "center",
        height: 60,
        width: 299
    },
    loginToYour: {
        top: 188,
        left: 99,
        fontSize: 14,
        letterSpacing: 0.8,
        width: 162,
        height: 41,
        textAlign: "center",
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700"
    },
    rectangleView: {
        left: 0,
        top: 0,
        height: 60,
        width: 299,
        position: "absolute"
    },
    dontHaveAn: {
        color: "#000"
    },
    createAccount: {
        color: "#0368ff"
    },
    dontHaveAnContainer: {
        letterSpacing: -0.2,
        height: 58,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        left: 0,
        top: 0,
        width: 299,
        position: "absolute"
    },
    rectangleGroup: {
        top: 699,
        left: 30,
        position: "absolute"
    },
    groupChild1: {
        bottom: "0%",
        right: "0%",
        left: "0%",
        top: "0%",
        height: "100%",
        borderRadius: 46,
        backgroundColor: "#0c172c"
    },
    enterYourUsername: {
        height: "56.67%",
        position: "absolute",
        justifyContent: "center"
    },
    rectangleContainer: {
        bottom: "0%",
        right: "0%",
        left: "0%",
        top: "0%",
        height: "100%"
    },
    ellipseIcon: {
        height: "44.44%",
        width: "48%",
        right: "24%",
        bottom: "55.56%",
        left: "28%",
        top: "0%",
        position: "absolute"
    },
    groupChild2: {
        height: "48.15%",
        top: "51.85%",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        bottom: "0%",
        right: "0%",
        left: "0%",
        backgroundColor: "#fff"
    },
    ellipseParent: {
        height: "45%",
        width: "8.36%",
        top: "30%",
        right: "82.27%",
        bottom: "25%",
        left: "9.36%",
        position: "absolute"
    },
    groupParent: {
        top: 309,
        left: 30,
        position: "absolute"
    },
    enterYourPassword: {
        left: "20.74%",
        top: "21.67%",
        width: "73.24%",
        textAlign: "center",
        color: "#fff",
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700",
        letterSpacing: 1.2,
        fontSize: 20
    },
    instanceChild: {
        width: "8.49%",
        top: "23.33%",
        right: "82.14%",
        bottom: "26.67%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        left: "9.36%"
    },
    groupContainer: {
        top: 389,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        left: 30,
        position: "absolute"
    },
    instanceItem: {
        backgroundColor: "rgba(217, 217, 217, 0)",
        bottom: "0%",
        right: "0%",
        left: "0%",
        top: "0%",
        height: "100%",
        borderRadius: 59
    },
    staySignedIn: {
        top: "0%",
        height: "100%",
        color: "#000",
        textAlign: "center",
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700",
        fontSize: 20
    },
    groupChild4: {
        height: "90.91%",
        width: "10.03%",
        top: "6.06%",
        right: "71.91%",
        bottom: "3.03%",
        left: "18.06%",
        borderRadius: 8,
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 4,
        position: "absolute",
        backgroundColor: "#fff"
    },
    rectangleParent1: {
        top: 519
    },
    backArrrowChild: {
        left: 0,
        top: 0
    },
    groupChild5: {
        top: 15,
        width: 22,
        left: 0
    },
    groupChild6: {
        top: 13,
        left: 3,
        width: 21
    },
    rectangleParent2: {
        top: 5,
        left: 9,
        width: 18,
        height: 30,
        position: "absolute"
    },
    backArrrow: {
        top: 16,
        left: 16
    },
    androidLarge4: {
        flex: 1,
        height: 800,
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#fff"
    }
});

export default AndroidLarge1;
