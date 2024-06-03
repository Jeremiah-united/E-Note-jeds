// ModuleInterface.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ModuleInterface = ({ route }) => {
  const { yearId, moduleId } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{moduleId}</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate('Notes', { yearId, moduleId })}
      >
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate('Todo', { yearId, moduleId })}
      >
        <Text style={styles.buttonText}>To-Do List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0c172c',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: "#c2c2c2"
  },
  button: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonLayout: {
    marginTop: 28,
    height: 79,
    borderRadius: 360,
    width: 331,
    alignContent: "center"
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});

export default ModuleInterface;
