// CollectionViewer.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

const CollectionViewer = () => {
  const [years, setYears] = useState([]);
  const [expandedYears, setExpandedYears] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const fetchYears = () => {
      const db = getDatabase();
      const coursesRef = ref(db, 'Courses/Electrical'); // Adjust path if necessary
      onValue(coursesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const yearList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setYears(yearList);
        }
      });
    };

    fetchYears();
  }, []);

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
                    style={styles.moduleButton}
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
    backgroundColor: '#f5f5f5',
  },
  yearText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  moduleButton: {
    padding: 16,
    marginVertical: 4,
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },
  moduleText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CollectionViewer;
