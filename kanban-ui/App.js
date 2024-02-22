import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import BoardScreen from "./screens/BoardScreen";
import AddButton from "./components/AddButton";
import { ModalProvider, useModalContext } from "./contexts/ModalContext";
import { TaskProvider } from "./contexts/TaskContext";
import { AuthProvider } from "./contexts/AuthContext";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig"; // Adjust the import path as necessary

const Content = () => {
  //Global state from ModalContextt
  const [modalVisible, setModalVisible] = useModalContext();

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
  return (
    <AuthProvider>
      <SafeAreaView>
        <TaskProvider>
          <ModalProvider>
            <View style={styles.container}>
              <AddButton />
              <Content />
            </View>
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
