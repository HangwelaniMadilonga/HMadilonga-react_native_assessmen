import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import BoardScreen from "./screens/BoardScreen";
import AddButton from "./components/AddButton";
import { ModalProvider, useModalContext } from "./contexts/ModalContext";
import { TaskProvider } from "./contexts/TaskContext";
import { AuthProvider, AuthContext } from "./contexts/AuthoContext";
import LoginScreen from "./screens/LoginScreen";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig"; // Adjust the import path as necessary

const Content = () => {
  const { modalVisible } = useModalContext();

  if (modalVisible) {
    return null;
  } else {
    return (
      <ScrollView>
        <BoardScreen />
      </ScrollView>
    );
  }
};

export default function App() {
  const { user } = useContext(AuthContext) || {}; // Use AuthContext to determine if a user is signed in

  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <TaskProvider>
          <ModalProvider>
            {/* Conditionally render AddButton and content based on user sign-in status */}
            {user ? (
              <>
                <AddButton />
                <Content />
              </>
            ) : (
              <LoginScreen />
            )}
          </ModalProvider>
        </TaskProvider>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    position: "relative",
  },
});
