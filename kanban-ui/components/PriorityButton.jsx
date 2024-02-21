import React from 'react';
import { Text,TouchableOpacity, StyleSheet, Pressable, View } from 'react-native';


export default PriorityButton = (props) => {
return(
<TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{props.title}</Text>
</TouchableOpacity>
)
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        
        padding: 10,
        width: 90,
        height: 40,
        backgroundColor: '#3b82f6',
      },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    
  },})