import * as React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login_Page from "./screens/Login_Page";

import Sign_in from "./screens/Sign_in";

import Modules from "./screens/My_Modules";

import Notes from "./screens/Notes";

import NoteEditor from './screens/NoteEditor2';

import CoursesList from "./screens/CoursesList";

import ModuleDetails from "./screens/ModuleDetails";

import CollectionViewer from "./screens/CollectionViewer";

import ModuleInterface from "./screens/ModuleInterface";

import Todo from "./screens/Todo";


const App = () => {

const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login_Page" screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login_Page} name="Login_Page" />
      <Stack.Screen component={Sign_in} name="Sign_in" />
      <Stack.Screen component={Modules} name="My_Modules" />
      <Stack.Screen component={Notes} name="Notes" />
      <Stack.Screen component={NoteEditor} name="NoteEditor2" />
      <Stack.Screen component={CoursesList} name="CoursesList" />
      <Stack.Screen component={CollectionViewer} name="CollectionViewer" />
      <Stack.Screen component={ModuleDetails} name="ModuleDetails" />
      <Stack.Screen component={ModuleInterface} name="ModuleInterface" />
      <Stack.Screen component={Todo} name="Todo" />
    </Stack.Navigator>
    <StatusBar style= "auto" />
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