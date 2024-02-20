import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonStack from '../components/ButtonStack';
import KanbanColums from '../components/KanbanColumn';

const BoardScreen = ({ title, desc, labels, onEdit, onDelete }) => {
    return (
      <View style = {styles.screenContainer}>
      <Text style = {styles.mainTitle}> Kanban Board</Text>
      <ButtonStack/>
      <View style= {styles.columnContainer}>
      <KanbanColums title = "ToDo"/>
      <KanbanColums title = "In Progress"/>
      <KanbanColums title = "Done"/>
      </View>
      </View>
  
      
    );
  };

  const styles = StyleSheet.create({
    mainTitle: {
      padding: 50,
      paddingLeft: 60,
      fontSize: 40,
      fontFamily: 'Roboto',
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