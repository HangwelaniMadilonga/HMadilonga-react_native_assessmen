import React from 'react';
import { Text,TouchableOpacity, StyleSheet, Pressable, View } from 'react-native';

PriorityButton = (props) => {
  
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.nomarlText}>
            Show Prioirity:
        </Text>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Low</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>High</Text>
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
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 22,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nomarlText: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 0,
    fontWeight: 'bold',
  },

});

  export default PriorityButton;