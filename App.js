import * as React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login_Page from "./screens/Login_Page";

import Sign_in from "./screens/Sign_in";

import Modules from "./screens/My_Modules";

import NoteTest from './screens/TestNoter';

import Notes from './screens/Notes';

import ModulesList from './screens/Modules_List';

import SubjectsList from "./screens/SubjectsList";

import CoursesList from "./CoursesList";

//import AndroidLarge3 from "./Schedule";

//import AndroidLarge4 from "./To_Do";

//import AndroidLarge5 from "./Goals";

//import LoginScreen from "./Material_You";

const App = () => {

const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login_Page">
      <Stack.Screen component={Login_Page} name="Login_Page" />
      <Stack.Screen component={Sign_in} name="Sign_in" />
      <Stack.Screen component={Modules} name="My_Modules" />
      <Stack.Screen component={NoteTest} name="TestNoter" />
      <Stack.Screen component={Notes} name="Notes" />
      <Stack.Screen component={CoursesList} name="CoursesList" />
      <Stack.Screen component={ModulesList} name="Modules_List" />
      <Stack.Screen component={SubjectsList} name="SubjectsList" />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  </SafeAreaView>
  </GestureHandlerRootView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default App;