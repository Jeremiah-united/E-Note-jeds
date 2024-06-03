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
      <Text style={styles.header}>COURSES</Text>
      <FlatList
        data={courses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.courseButton, styles.courseButtonLayout]} onPress={() => handleCoursePress(item)}>
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
    backgroundColor: '#0c172c',
  },
  courseButton: {
    zIndex: 8,
    backgroundColor: "#d9d9d9",
    marginTop: 28,
    alignSelf: "center",
    alignContent: "center"
  },
  courseButtonLayout: {
    marginTop: 28,
    height: 79,
    borderRadius: 360,
    width: 331,
    alignContent: "center"
  },
  header: {
    fontWeight: "800",
    color: "#c2c2c2",
    fontSize: 36,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  courseText: {
    marginTop: 25,
    letterSpacing: 1,
    fontWeight: "700",
    color: "#000",
    fontSize: 20,
    textAlign: "center"
  },
});

export default CoursesList;
