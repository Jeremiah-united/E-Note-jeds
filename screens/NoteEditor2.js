// NoteEditor.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const NoteEditor = ( {route} ) => {
  const { yearId, moduleId } = route.params;
  const [note, setNote] = useState('');
  const navigation = useNavigation();

  const saveNote = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem(`${yearId}-${moduleId}-note`);
      let notes = [];
      if (savedNotes) {
        notes = JSON.parse(savedNotes);
        if (!Array.isArray(notes)) {
          notes = [];
        }
      }
      notes.push(note);
      await AsyncStorage.setItem(`${yearId}-${moduleId}-note`, JSON.stringify(notes));
      navigation.navigate('Notes', { yearId, moduleId });
    } catch (error) {
      console.error('Error saving note: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a Note</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your note here..."
        value={note}
        onChangeText={setNote}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={saveNote}>
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0c172c',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#c2c2c2',
  },
  textInput: {
    height: 200,
    padding: 16,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
  },
  button: {
    padding: 16,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default NoteEditor;
