// ModuleDetails.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../Firebase'; // Adjust the import path as necessary

const ModuleDetails = ({ route }) => {
  const { moduleId } = route.params;
  const [moduleDetails, setModuleDetails] = useState(null);

  useEffect(() => {
    const fetchModuleDetails = async () => {
      const docRef = doc(firestore, 'modules', moduleId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setModuleDetails(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchModuleDetails();
  }, [moduleId]);

  if (!moduleDetails) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{moduleDetails['Module name']}</Text>
      <Text style={styles.detail}>Credits: {moduleDetails.Credits}</Text>
      <Text style={styles.detail}>Details: {moduleDetails.Details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ModuleDetails;
