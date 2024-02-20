import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PriorityButtons from '../components/PriorityButtons';
const BoardScreen = ({ title, desc, labels, onEdit, onDelete }) => {
    return (
      <View >
      <Text style = {styles.mainTitle}> Kanban Board</Text>
      <PriorityButtons/>
      </View>
  
      
    );
  };

  const styles = StyleSheet.create({
    mainTitle: {
      padding: 50,
      fontSize: 40,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: '#3b82f6'
   }});

  export default BoardScreen;