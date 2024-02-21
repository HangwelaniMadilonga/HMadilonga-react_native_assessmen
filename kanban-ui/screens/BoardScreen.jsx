import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonStack from '../components/ButtonStack';
import React, { useState } from 'react';
// import TaskForm from './TaskForm';
import KanbanColums from '../components/KanbanColumn';
import AddButton from '../components/AddButton';


const BoardScreen = ({ title, desc, labels, onEdit, onDelete }) => {
    return (
      <View style = {styles.screenContainer}>
      <Text style = {styles.mainTitle}> Kanban Board</Text>
      <ButtonStack/>
      <View style= {styles.columnContainer}>
      {/* <TaskForm/> */}
      
      </View>
      <AddButton />
      </View>
  
      
    );
  };

  const styles = StyleSheet.create({
    mainTitle: {
      padding: 50,
      paddingLeft: 60,
      fontSize: 40,
      
      fontWeight: 'bold',
      color: '#3b82f6'
   },
   screenContainer: {
    marginLeft: 4,
    
 },
    columnContainer: {
        
        flexDirection: 'row',

    }
});

  export default BoardScreen;