import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext'; 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInAsGuest, signUpAdmin } = useContext(AuthContext); 

 
  const handleSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    try {
      await signUpAdmin(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGuestSignIn = async () => {
    try {
      await signInAsGuest();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up as Admin" onPress={handleSignUp} />
      <Button title="Sign In as Guest" onPress={handleGuestSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
});

export default LoginScreen;
