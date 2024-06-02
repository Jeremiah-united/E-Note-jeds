// CoursesList.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { database } from '../Firebase'; // Adjust the import path as necessary

const CoursesList = ({ navigation }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, 'Courses');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const courseKeys = Object.keys(data);
        setCourses(courseKeys);
      }
    });
  }, []);

  const handleCoursePress = (course) => {
    navigation.navigate('CollectionViewer', { path: `Courses/${course}` });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.courseButton} onPress={() => handleCoursePress(item)}>
            <Text style={styles.courseText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  courseButton: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },
  courseText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CoursesList;
