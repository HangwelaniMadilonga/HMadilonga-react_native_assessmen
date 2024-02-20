import React from 'react';
import { Text,TouchableOpacity, StyleSheet, Pressable, View } from 'react-native';

PriorityButton = (props) => {
  
  return (
    <View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Low</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>High</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        
        padding: 10,
        width: 85,
        height: 40,
        backgroundColor: '#3b82f6',
      },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});

  export default PriorityButton;