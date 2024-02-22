
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(true); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    
    await signUpAdmin(email, password);
  };

  const handleGuestLogin = async () => {
    const auth = getAuth();
    try {
      await signInAnonymously(auth);
      onLogin(false); 
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Login as Guest" onPress={handleGuestLogin} />
      <Button title="Sign Up as Admin" onPress={handleSignUp} />
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
