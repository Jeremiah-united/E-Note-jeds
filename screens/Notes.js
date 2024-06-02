// Notes.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notes = ({ route }) => {
  const { yearId, moduleId } = route.params;
  const [note, setNote] = useState('');

  useEffect(() => {
    const loadNote = async () => {
      const savedNote = await AsyncStorage.getItem(`${yearId}-${moduleId}-note`);
      if (savedNote) {
        setNote(savedNote);
      }
    };

    loadNote();
  }, [yearId, moduleId]);

  const saveNote = async () => {
    await AsyncStorage.setItem(`${yearId}-${moduleId}-note`, note);
    alert('Note saved!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        value={note}
        onChangeText={setNote}
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default Notes;

