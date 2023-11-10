import React from 'react'
import {useState} from 'react';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { View,Button,Text,Alert,StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
      ]);
      
      const addTask = (taskText) => {
        if (taskText === '') {
          Alert.alert('Please enter a task');
          return;
        }else if (tasks.includes(taskText)) {
          Alert.alert('Task already exists');
          return;
        }else{
          setTasks([...tasks, taskText]);
        }
      }
    
  return (
    <MainLayout style={styles.container}>
            <ToDoList tasks={tasks}/> 
            <ToDoForm addTask={addTask}/>    
        <View>
        <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
                style={styles.buttonContainer}
            />
        </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // The container takes all available space
        justifyContent: 'space-between', // Maximize space between child components
    },
    buttonContainer: {
        width: '100%', // Ensure the button stretches to the container width
        position: 'absolute', // Position the button absolutely 
        bottom: 0, // At the bottom of the container
        padding: 10, // Add some padding to move the button up a bit from the very bottom
    }
});

export default HomeScreen