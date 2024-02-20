import { Container } from 'postcss';
import {View, Text, StyleSheet} from 'react-native';

const KanbanColums = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.cardHeader}>

        </View>
        {/* <View>

        </View> */}
      </View>
    );
  };

  const styles = StyleSheet.create({
   
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 0,
    
  },
  nomarlText: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  cardHeader: {
    marginTop: 0,
    backgroundColor: '#3b82f6',
    minWidth: 22,
    borderRadius: 4,
    maxHeight: 50
  },

});
  
  export default KanbanColums;