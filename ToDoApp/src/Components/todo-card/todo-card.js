import React, {useEffect, useState} from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import AddTodo from '../add-todo';
import styles from './todo-card.styles';

const TodoCard = props => {
  const [todo_get, setTodos] = useState([
    {id: 1, name: 'React Native', isDone: true},
    {id: 2, name: 'Patika.dev', isDone: false},
  ]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(todo_get.filter(todo => !todo.isDone).length);
  }, [todo_get]);
  const isDoneChange = id => {
    const newTodo_get = todo_get.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodo_get);
  };
  const removeTodo = id => {
    const newTodo_get = todo_get.filter(todo => todo.id !== id);
    setTodos(newTodo_get);
  };
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>YAPILACAKLAR</Text>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={todo_get}
        renderItem={({item}) => (
          <TouchableHighlight
            style={styles.touchableContainer}
            underlayColor="#DDDDDD"
            onPress={() => {
              isDoneChange(item.id);
            }}
            onLongPress={() => removeTodo(item.id)}>
            <View
              style={item.isDone ? styles.isDoneButton : styles.notDoneButton}>
              <Text
                style={item.isDone ? styles.isDoneText : styles.notDoneText}>
                {item.name}
              </Text>
            </View>
          </TouchableHighlight>
        )}
      />
      <AddTodo todo_get={todo_get} setTodos={setTodos} />
    </View>
  );
};

export default TodoCard;
