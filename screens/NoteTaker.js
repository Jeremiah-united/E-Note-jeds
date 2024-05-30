import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const Note = ({ title, content }) => (
  <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
    <Text style={{ fontSize: 18 }}>{title}</Text>
    <Text>{content}</Text>
  </View>
);

const NoteTaker = () => {
  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const addNote = () => {
    if (newTitle.trim() && newContent.trim()) {
      setNotes([...notes, { title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Notes</Text>
      <TextInput
        value={newTitle}
        onChangeText={setNewTitle}
        placeholder="Note Title"
        style={{ marginBottom: 10, padding: 10, backgroundColor: '#eee' }}
      />
      <TextInput
        value={newContent}
        onChangeText={setNewContent}
        placeholder="Note Content"
        multiline
        style={{ padding: 10, backgroundColor: '#eee' }}
      />
      <Button title="Add Note" onPress={addNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => <Note title={item.title} content={item.content} />}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default NoteTaker;
