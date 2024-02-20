import { Container } from 'postcss';
import {View, Text, StyleSheet} from 'react-native';

const KanbanColums = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.cardHeader}>
            <Text style={styles.normalText}>ToDo</Text>
        </View>
        <View>

        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
   
  mainContainer: {
    
    flexDirection: 'column',
    gap: 0,
    margin: '10',
    
    
    
    
  },
  normalText: {
    fontSize: 14,
    padding:6,
    fontWeight: 'bold',
    color: 'white',
  },
  cardHeader: {
    marginTop: 80,
    
    backgroundColor: '#3b82f6',
    width: 180,
    minHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20',
    

  },

});
  
  export default KanbanColums;