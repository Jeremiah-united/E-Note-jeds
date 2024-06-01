import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from './Firebase';
import { ref, onValue } from 'firebase/database';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const coursesRef = ref(database, 'Courses/');
    onValue(coursesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const coursesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCourses(coursesArray);
      }
    });
  }, []);

  const handlePress = (courseId) => {
    navigation.navigate('ModulesList', { courseId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(item.id)}>
      <Text style={styles.buttonText}>Course {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
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

export default CoursesList;

