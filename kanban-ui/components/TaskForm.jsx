import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useModalContext } from '../contexts/ModalContext';
import { useTasks } from '../contexts/TaskContext';
import uuid from 'react-native-uuid';

const TaskForm = () => {
    const [title, setTitle] = useState('New Task');
    const [description, setDescription] = useState('This is a new Task');
    const [priority, setPriority] = useState('ToDo'); 
    const [tasks, addTask] =  useTasks(); 
    const [modalVisible,setModalVisible] = useModalContext();
   

    // Function to handle the submission of a task
    const handleSubmit = () => {
        const newTask = {  id: uuid.v4(),title, description, priority,owner : 'none' };
        addTask(newTask);
        
       
        setTitle('');
        setDescription('');
        setPriority('');

        
    };

    return (
        <View style={styles.formContainer}>
            <View>
                <Text style={styles.formText}>Project title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                    returnKeyType='done'
                />
            </View>
            <View>
                <Text style={styles.formText}>Description</Text>
                <TextInput
                    returnKeyType='done'
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    
                />
            </View>
            <View>
                <Text style={styles.formText}>Current priority status: </Text>
                <View style={styles.statusButtons}>
                    <TouchableOpacity
                    //When priority is "ToDo" the button shall have a background of Black.
                        style={[styles.interactiveButton, { backgroundColor: priority === 'ToDo' ? 'black' : '#3b82f6' }]}
                        onPress={() => setPriority("ToDo")}
                    >
                        <Text style={styles.interactiveButtonText}>ToDo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    //When priority is "Progress" the button shall have a background of Black.
                        style={[styles.interactiveButton, { backgroundColor: priority === 'In Progress' ? 'black' : '#3b82f6' }]}
                        onPress={() => setPriority("In Progress")}
                    >
                        <Text style={styles.interactiveButtonText}>Progress</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    //When priority is "Done" the button shall have a background of Black.
                        style={[styles.interactiveButton, { backgroundColor: priority === 'Done' ? 'black' : '#3b82f6' }]}
                        onPress={() => setPriority("Done")}
                    >
                        <Text style={styles.interactiveButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.statusButtons}>
                <TouchableOpacity style={[styles.button]} onPress={() => {setModalVisible(!modalVisible);handleSubmit(); }} >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginTop: 18,
        padding: 10,
        width: 85,
        height: 40,
        backgroundColor: '#000080',
      },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',},
    formContainer:{
        marginTop: 45,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'Grey',
    },
    formText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#18184A',
        alignSelf: 'center',
    },

        input: {
          maxHeight: 80,
          width: 250,
          margin: 12,
          borderWidth: 1,
          padding: 2,
          fontWeight: 'bold',
        },
        statusButtons: {
            marginTop: 5,
            marginLeft: 14,
            marginBottom: 5,
            flexDirection: 'row',
           
        },
        interactiveButton: {
            alignItems: 'center',
        
            padding: 10,
            width: 90,
            height: 40,
            backgroundColor: '#3b82f6',
        },
        interactiveButtonText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',     
        },


});

export default TaskForm;