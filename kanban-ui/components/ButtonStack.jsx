import React from 'react';
import { Text,TouchableOpacity, StyleSheet, Pressable, View } from 'react-native';
import PriorityButton from './PriorityButton';



ButtonStack = () => {
  
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.nomarlText}>
            Show :
        </Text>
    <View style={styles.buttonContainer}>
    
    <PriorityButton title = "Assigned"/>
    <PriorityButton title = "All"/>
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
    marginLeft: 60,
    // justifyContent: 'space-between',
  },
  nomarlText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 7,
    fontWeight: 'bold',
  },

});

  export default ButtonStack;