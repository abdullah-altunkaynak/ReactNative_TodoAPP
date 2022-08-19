import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import TodoCard from './src/Components/todo-card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7ECDE',
  },
});
export default App;
