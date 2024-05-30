import 'react-native-gesture-handler';
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AndroidLarge from "./screens/Login_Page";

import AndroidLarge1 from "./screens/Sign_in";

import AndroidLarge2 from "./screens/My_Modules";

import NoteTaker from "./screens/NoteTaker";

import NoteTest from './screens/TestNoter';

import Notes from './screens/Notes';

//import AndroidLarge3 from "./Schedule";

//import AndroidLarge4 from "./To_Do";

//import AndroidLarge5 from "./Goals";

//import LoginScreen from "./Material_You";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login_Page">
      <Stack.Screen component={AndroidLarge} name="Login_Page" />
      <Stack.Screen component={AndroidLarge1} name="Sign_in" />
      <Stack.Screen component={AndroidLarge2} name="My_Modules" />
      <Stack.Screen component={NoteTaker} name="NoteTaker" />
      <Stack.Screen component={NoteTest} name="TestNoter" />
      <Stack.Screen component={Notes} name="Notes" />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}




