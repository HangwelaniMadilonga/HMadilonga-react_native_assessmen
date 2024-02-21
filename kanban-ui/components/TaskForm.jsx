import {SafeAreaView,View, Text, TextInput, StyleSheet,Pressable,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import PriorityButton from './PriorityButton';
const TaskForm = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    
    const [priority,setPriority] = React.useState('');
    const [task,addTask] = React.useState([]);
    const [backgroundColor, setBackgroundColor] = useState('#000080');
    
    const toggleBackgroundColor = () => {
        setBackgroundColor(backgroundColor === '#000080' ? 'black' : '000080');
      };

      const saveDate = () => {
        setDate(`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`);
      }

    return(
        <View style= {styles.formContainer}>
       <View>
        <Text style= {styles.formText}>Project title</Text>
        <TextInput
        
        style={styles.input}
        onChangeText={() => setTitle(title)}
        value={title}
        returnKeyType='done'
      />
       </View>
       <View>
       <Text style= {styles.formText}>Description</Text>
       <TextInput
        
        
        returnKeyType='done'
        style={styles.input}
        onChangeText={() =>setDescription}
        value={description}
        
      />
       </View>
       <View>
       <Text style= {styles.formText}>Current priority status: {priority}</Text>
       <View style= {styles.statusButtons}>
       <PriorityButton title = "ToDo" 
       />
       <PriorityButton title = "Progress"/>
       <PriorityButton title = "Done"/>
       </View>
       </View>
       <View style= {styles.statusButtons}>
       <TouchableOpacity style={[styles.button, {backgroundColor}]}
        >
        <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
           
        }


});

export default TaskForm;