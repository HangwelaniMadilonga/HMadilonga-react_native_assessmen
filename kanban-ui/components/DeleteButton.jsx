import {Text, StyleSheet,TouchableOpacity} from 'react-native';

const DeleteButton = () => {
    return(

    <TouchableOpacity style= {styles.removeButton}>
        <Text style= {styles.buttonText}>X</Text>
    </TouchableOpacity>
    )};

    const styles = StyleSheet.create({
   
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
          },})


 export default DeleteButton;