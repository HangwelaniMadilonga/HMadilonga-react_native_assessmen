import {Text, StyleSheet,TouchableOpacity} from 'react-native';

const AddButton = () => {
    return(

    <TouchableOpacity style= {styles.addButton}>
        <Text style= {styles.buttonText}>Add</Text>
    </TouchableOpacity>
    )};

    const styles = StyleSheet.create({
   
        addButton: {
            backgroundColor: '#3434C1',
            alignSelf: 'flex-end',            
            alignItems: 'center',
            marginRight: 30,
            marginTop: 200,
            height: 32,
            
           
            minWidth: 80,
            minHeight: 40,
            
          },
          buttonText: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
          padding: 10, 
          
          }})


 export default AddButton;