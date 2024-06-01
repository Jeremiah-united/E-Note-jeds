import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { database } from '../Firebase';
import { ref, onValue } from 'firebase/database';

const ModulesList = () => {
  const [modules, setModules] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { courseId } = route.params;

  useEffect(() => {
    const modulesRef = ref(database, `Courses/${courseId}/modules/`);
    onValue(modulesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const modulesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setModules(modulesArray);
      }
    });
  }, [courseId]);

  const handlePress = (moduleId) => {
    navigation.navigate('SubjectsList', { courseId, moduleId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(item.id)}>
      <Text style={styles.buttonText}>Module {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={modules}
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

export default ModulesList;

