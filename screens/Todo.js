import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Todo = ({ route }) => {
  const { yearId, moduleId } = route.params;
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem(`${yearId}-${moduleId}-tasks`);
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    };

    loadTasks();
  }, [yearId, moduleId]);

  const saveTasks = async (newTasks) => {
    await AsyncStorage.setItem(`${yearId}-${moduleId}-tasks`, JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const addTask = () => {
    const newTasks = [...tasks, { text: task, completed: false }];
    saveTasks(newTasks);
    setTask('');
  };

  const toggleTaskCompleted = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    saveTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    saveTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity 
      style={styles.button} 
      placeholder="Add Task" 
      onPress={addTask}>
      <Text style={styles.addtask}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTaskCompleted(index)}>
              <Text style={[styles.task, item.completed && styles.completedTask]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
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
    backgroundColor: '#c2c2c2',
  },
  input: {
    height: 40,
    borderColor: 'white',
    color: "black",
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  task: {
    fontSize: 18,
    color:"black",
  },
  button: {
    padding: 16,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: '#FF5722',
    padding: 8,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default Todo;
