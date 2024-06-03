import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { useRoute, useNavigation } from '@react-navigation/native';
import { database } from '../Firebase';

const CollectionViewer = () => {
  const [years, setYears] = useState([]);
  const route = useRoute();
  const [expandedYears, setExpandedYears] = useState({});
  const navigation = useNavigation();
  const { course } = route.params;

  useEffect(() => {
    const fetchYears = () => {
      const coursesRef = ref(database, `Courses/${course}`);
      onValue(coursesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const yearList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setYears(yearList);
        }
      });
    };

    fetchYears();
  }, [course]);

  const handleYearPress = (yearId) => {
    setExpandedYears(prevState => ({
      ...prevState,
      [yearId]: !prevState[yearId],
    }));
  };

  const handleModulePress = (yearId, moduleId) => {
    navigation.navigate('ModuleInterface', { yearId, moduleId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{course}</Text>
      <FlatList
        data={years}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => handleYearPress(item.id)}>
              <Text style={styles.yearText}>{item.id}</Text>
            </TouchableOpacity>
            {expandedYears[item.id] && (
              <FlatList
                data={item.subjects}
                keyExtractor={(subject, index) => index.toString()}
                renderItem={({ item: subject, index }) => (
                  <TouchableOpacity
                    style={[styles.moduleButton, styles.moduleButtonLayout]}
                    onPress={() => handleModulePress(item.id, index)}
                  >
                    <Text style={styles.moduleText}>{subject}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
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
  header: {
    fontWeight: "800",
    color: "#c2c2c2",
    fontSize: 36,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  yearText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color: "#c2c2c2"
  },
  moduleButton: {
    padding: 16,
    marginVertical: 4,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
  },
  moduleButtonLayout: {
    marginTop: 28,
    height: 79,
    borderRadius: 360,
    width: 331,
    alignContent: "center",
    alignSelf: "center"
  },
  moduleText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CollectionViewer;
