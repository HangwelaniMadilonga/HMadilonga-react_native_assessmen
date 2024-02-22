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
import firebaseConfig from "./firebaseConfig";

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

const App = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("User state changed:", user);
  }, [user]);

  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <TaskProvider>
          <ModalProvider>
            {/* Always show the LoginScreen initially and transition based on user state */}
            {!user ? (
              <LoginScreen />
            ) : (
              <>
                <AddButton />
                <Content />
              </>
            )}
          </ModalProvider>
        </TaskProvider>
      </SafeAreaView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    position: "relative",
  },
});

export default App;
