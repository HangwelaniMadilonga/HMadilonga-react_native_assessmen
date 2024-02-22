import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../contexts/AuthoContext';

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
      <Text style={styles.title}>Kanban UI Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up as Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGuestSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign In as Guest</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
    backgroundColor: '#f5f5f5', // Light grey background
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  input: {
    minHeight: 60,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 2,
    fontWeight: 'bold',
  
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#007bff', // Bootstrap primary blue
    borderRadius: 5, // Rounded corners for buttons
  },
  buttonText: {
    color: 'black', // White text color
    fontWeight: 'bold',
    padding: 12,
  },
});

export default LoginScreen;
