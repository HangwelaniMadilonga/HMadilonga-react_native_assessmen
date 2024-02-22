import {View, Text, TextInput, StyleSheet,TouchableOpacity} from 'react-native';
import DeleteButton from './DeleteButton';
const TaskCard = () => {
  return (
      <View style={styles.cardContainer}>
          <View style={styles.cardInfo}>
              <Text style={styles.titleText}>Hello</Text>
          </View>
          <DeleteButton style={styles.removeButton} />
      </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 280,
      minHeight: 100,
      borderRadius: 4,
      marginTop: 12,
      marginLeft: 12,
      marginBottom: 12,
  },
  cardInfo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  removeButton: {
      // Style for your delete button
      position: 'absolute',
      right: 10,
      top: 10,
  },
  titleText: {
      fontWeight: 'bold',
      fontSize: 20,
  },
});

export default TaskCard;