import React, {useState} from 'react';
import {View, TextInput, TouchableHighlight, Text} from 'react-native';
import styles from './AddTodo.styles';

const AddTodo = ({todo_get, setTodos}) => {
  const [input, setInput] = useState('');
  const addTodo = () => {
    if (input.trim()) {
      const newTodo_get = {
        id: Math.floor(Math.random() * 100),
        name: input,
        isDone: false,
      };
      setTodos([...todo_get, newTodo_get]);
      setInput('');
    }
  };
  return (
    <View style={styles.addContainer}>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        style={styles.textInput}
        placeholder="Yapılacak..."
      />
      <TouchableHighlight
        style={styles.touchableContainer}
        underlayColor="white"
        onPress={addTodo}>
        <View style={styles.button}>
          <Text style={styles.text}>EKLE</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
export default AddTodo;
