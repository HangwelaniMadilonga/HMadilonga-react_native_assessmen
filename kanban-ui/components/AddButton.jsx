import {Text, StyleSheet,TouchableOpacity,Alert, Modal,View} from 'react-native';
import React, { useState } from 'react';
import { useModalContext } from '../contexts/ModalContext';
import TaskForm from './TaskForm';

const AddButton = () => {
    const [modalVisible, setModalVisible] = useModalContext();

    return(
        <View>
             <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TaskForm />
      </Modal>
    <TouchableOpacity style= {styles.addButton}
    onPress={() => setModalVisible(true)}
    >
        <Text style= {styles.buttonText}>Add</Text>
    </TouchableOpacity>
    </View>
    )};

    const styles = StyleSheet.create({
        addButtonContainer: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 20, 
        },
        addButton: {
          backgroundColor: '#3434C1',
        //   marginTop: 550,
        //   marginLeft: 300,
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
          height: 40,
          borderRadius: 20, 
          position: 'absolute',
          top: 820,
        //   right: 20,
          zIndex: 1,
        },
        buttonText: {
          fontSize: 16,
          color: 'white',
          fontWeight: 'bold',
        },
      });


 export default AddButton;