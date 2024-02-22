import {View, Text, TextInput, StyleSheet,TouchableOpacity} from 'react-native';
import DeleteButton from './DeleteButton';
const TaskCard = (title) => {
    return(
    <View>
    <View 
    style={styles.cardInfo}>
        <DeleteButton/>
    </View>
    <View>
     <Text> {title} </Text> 
    </View>
    </View>
    )
};

const styles = StyleSheet.create({
   
    cardInfo: {

        backgroundColor: 'white',
        width: 280,
        minHeight: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 4,
        marginTop: 12,
        marginLeft: 12,
        marginBottom: 12,
        
    
      },
      removeButton: {
        backgroundColor: 'white',
        borderRadius: 6000,
        
        alignSelf: 'flex-end',
        marginRight: 7,
        marginBottom: 70,
        
      },
      buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 2,
      }
    });

      export default TaskCard;