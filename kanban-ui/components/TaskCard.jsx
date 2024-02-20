import {View, Text, TextInput, StyleSheet} from 'react-native';

const TaskCard = () => {
    return(
    <View 
    style={styles.cardInfo}>
    </View>
    )
};

const styles = StyleSheet.create({
   
    cardInfo: {

        backgroundColor: 'white',
        width: 280,
        minHeight: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 12,
        marginLeft: 12,
        marginBottom: 12,
        
    
      }});

      export default TaskCard;