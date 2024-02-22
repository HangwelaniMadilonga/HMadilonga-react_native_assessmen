import React, { useState } from 'react';
import { Modal, View, Button, Text,StyleSheet,Platform } from 'react-native';

// Use of TaskForm to maintain the same style.
import TaskForm from './TaskForm';

const TaskCardModal = ({ task, isVisible, onClose, onSave }) => {
  const [taskData, setTaskData] = useState(task);

  const handleSave = (updatedTask) => {
    onSave(updatedTask);
    onClose(); // Close modal after save
  };

  return (
    <Modal
      visible={isVisible}
      
      onRequestClose={onClose}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
         
          <TaskForm task={taskData} onSave={handleSave} />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    
    
    
      
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  }
});

export default TaskCardModal;
