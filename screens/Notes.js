import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Notes = ({ route }) => {
  const { yearId, moduleId } = route.params;
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const savedNotes = await AsyncStorage.getItem(`${yearId}-${moduleId}-note`);
        if (savedNotes) {
          setNotes(JSON.parse(savedNotes));
        }
      } catch (error) {
        console.error('Error loading notes: ', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', loadNotes);

    return unsubscribe;
  }, [navigation, yearId, moduleId]);

  const deleteNote = async (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    try {
      await AsyncStorage.setItem(`${yearId}-${moduleId}-note`, JSON.stringify(newNotes));
    } catch (error) {
      console.error('Error deleting note: ', error);
    }
  };

  const confirmDeleteNote = (index) => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteNote(index), style: 'destructive' },
      ],
      { cancelable: false }
    );
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item}</Text>
            <View style={styles.noteActions}>
              <TouchableOpacity style={styles.deleteButton} onPress={() => confirmDeleteNote(index)}>
                <Image 
                style={styles.buttonText}
                source={require('../assets/images/3.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NoteEditor2', { yearId, moduleId })}
      >
        <Text style={styles.buttonText}>Write New Note</Text>
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
  noteItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
  },
  noteText: {
    fontSize: 16,
    color: '#000',
  },
  noteActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  editButton: {
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  deleteButton: {
    padding: 2,
    backgroundColor: '#FF5722',
    borderRadius: 4,
  },
  button: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default Notes;

