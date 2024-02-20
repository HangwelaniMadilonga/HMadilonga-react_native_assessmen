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
                        
            alignItems: 'center',
            marginLeft: 300,
            marginTop: 730,
            height: 32,
            zIndex: 1,
            position: 'absolute',
           
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