import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BoardScreen = ({ title, desc, labels, onEdit, onDelete }) => {
    return (
      <View >
      <Text style = {styles.mainTitle}> Kanban Board</Text>
      </View>
  
      
    );
  };

  const styles = StyleSheet.create({
    mainTitle: {
      padding: 50,
      fontSize: 40,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: 'rgba(34, 78, 128, 1)'
   }});

  export default BoardScreen;