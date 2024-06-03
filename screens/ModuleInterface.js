// ModuleInterface.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, get } from 'firebase/database';

const ModuleInterface = ({ route }) => {
  const { course, yearId, moduleId } = route.params;
  const navigation = useNavigation();
  const [moduleName, setModuleName] = useState('');

  useEffect(() => {
    const fetchModuleName = async () => {
      try {
        const db = getDatabase();
        const moduleRef = ref(db, `Courses/${course}/${yearId}/subjects/${moduleId}`);
        const snapshot = await get(moduleRef);
        if (snapshot.exists()) {
          setModuleName(snapshot.val());
        } else {
          console.log('No such module!');
        }
      } catch (error) {
        console.error('Error fetching module name: ', error);
      }
    };

    fetchModuleName();
  }, [course, yearId, moduleId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{moduleName || 'Loading...'}</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate('Notes', { course, yearId, moduleId })}
      >
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate('Todo', { course, yearId, moduleId })}
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
