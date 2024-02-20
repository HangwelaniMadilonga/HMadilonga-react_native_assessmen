import React from 'react';
import { Text,TouchableOpacity, StyleSheet, Pressable, View } from 'react-native';
import PriorityButton from './PriorityButton';



ButtonStack = () => {
  
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.nomarlText}>
            Show Prioirity:
        </Text>
    <View style={styles.buttonContainer}>
    <PriorityButton title = "Low"/>
    <PriorityButton title = "Medium"/>
    <PriorityButton title = "High"/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
  },
  mainContainer: {
    
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  nomarlText: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 7,
    fontWeight: 'bold',
  },

});

  export default ButtonStack;