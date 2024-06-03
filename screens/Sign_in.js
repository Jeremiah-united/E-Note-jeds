import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../Firebase"; // Adjust the import path as necessary
import { useNavigation } from "@react-navigation/native";

const Sign_in = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;

                // Fetch user's course from Firestore
                const userDoc = await getDoc(doc(firestore, "users", user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const userCourse = userData.course; // Assuming "course" field contains the course

                    // Navigate to CollectionViewer with the course
                    navigation.navigate('CollectionViewer', { course: userCourse });
                    Alert.alert("Success", "You have successfully signed in!");
                } else {
                    Alert.alert("Error", "User data not found!");
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                Alert.alert("Error", errorMessage);
            });
    };

    return (
        <View style={styles.signIn}>
            <Text style={[styles.welcomeBack, styles.signLayout]}>Welcome Back</Text>
            <Text style={[styles.logInTo, styles.enterTypo1]}>Log in to your account</Text>
            <View style={[styles.signInInner, styles.signLayout]}>
                <View style={styles.groupChildPosition}>
                    <View style={[styles.groupChild, styles.groupChildPosition]} />
                    <TextInput 
                        style={[styles.enterYourUsername, styles.enterTypo]}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
            </View>
            <View style={[styles.signInChild, styles.signLayout]}>
                <View style={styles.groupChildPosition}>
                    <View style={[styles.groupChild, styles.groupChildPosition]} />
                    <TextInput
                        style={[styles.enterYourPassword, styles.enterTypo]}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
            </View>
            <TouchableOpacity style={[styles.rectangleContainer, styles.signLayout]} onPress={handleSignIn}>
                <View style={[styles.groupInner, styles.enterPosition]} />
                <Text style={[styles.enter, styles.enterPosition]}>Enter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    signPosition: {
        height: 60,
        marginLeft: -150,
        width: 299,
        left: "50%",
        position: "absolute"
    },
    enterTypo1: {
        fontWeight: "700",
        textAlign: "center"
    },
    groupChildPosition: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%"
    },
    enterTypo: {
        letterSpacing: 1.2,
        fontSize: 20,
        left: "20.74%",
        top: "21.67%",
        width: "73.24%",
        fontWeight: "700",
        textAlign: "center",
        color: "#fff",
        position: "absolute"
    },
    enterPosition: {
        top: 0,
        height: 60,
        left: "50%",
        position: "absolute"
    },
    welcomeBack: {
        top: 128,
        fontSize: 42,
        textAlign: "center",
        height: 60,
        color: "#fff",
    },
    logInTo: {
        marginLeft: -81,
        top: 188,
        fontSize: 14,
        letterSpacing: 0.8,
        width: 162,
        height: 41,
        color: "#fff",
        left: "50%",
        position: "absolute",
        fontWeight: "700"
    },
    groupChild: {
        borderRadius: 46,
        backgroundColor: "#0c172c"
    },
    enterYourUsername: {
        height: "56.67%",
        alignContent: "center",
    },
    signInInner: {
        top: 309,
        height: 60,
        marginLeft: 50,
        marginRight: 50
    },
    enterYourPassword: {
        height: "50%",
        alignContent: "center"
    },
    signInChild: {
        top: 389,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 0,
        marginRight: 50,
        height: 60,
        marginLeft: 50
    },
    groupInner: {
        marginLeft: -149.5,
        borderRadius: 94,
        backgroundColor: "#c2c2c2",
        width: 299,
        top: 0
    },
    enter: {
        marginLeft: -134.50,
        fontSize: 30,
        letterSpacing: 1.8,
        color: "#0c172c",
        width: 272,
        fontWeight: "700",
        textAlign: "center"
    },
    rectangleContainer: {
        top: 559,
        height: 60,
        marginLeft: 50,
        marginRight: 50
    },
    signIn: {
        backgroundColor: "#006793",
        flex: 1,
        height: 800,
        overflow: "hidden",
        width: "100%"
    }
});

export default Sign_in;
