import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { database } from '../Firebase';
import { ref, onValue } from 'firebase/database';

const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]);
  const route = useRoute();
  const { courseId, moduleId } = route.params;

  useEffect(() => {
    const subjectsRef = ref(database, `Courses/${courseId}/modules/${moduleId}/subjects/`);
    onValue(subjectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const subjectsArray = Object.keys(data).map((key) => ({
          id: key,
          name: data[key],
        }));
        setSubjects(subjectsArray);
      }
    });
  }, [courseId, moduleId]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={subjects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  button: {
    backgroundColor: '#006793',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SubjectsList;
