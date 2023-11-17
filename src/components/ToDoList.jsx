import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';


const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      <View style={{borderBottomWidth: 5, borderColor: '#ccc',marginTop: 20,marginBottom:20}} />
      <Text style={styles.title}>
        ToDoList
      </Text>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task,index % 2 === 0 ? styles.evenTask : styles.oddTask]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 30,
    color: '#3DB3C1',
    textAlign: 'center',
    
  },
  evenTask: {
    backgroundColor: '#FFCF96', 
  },
  oddTask: {
    backgroundColor: '#CDFAD5', 
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
    color: '#61A3BA',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
export default ToDoList