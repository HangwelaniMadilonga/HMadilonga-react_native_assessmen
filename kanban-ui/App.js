import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import BoardScreen from "./screens/BoardScreen";
import AddButton from "./components/AddButton";
import { ModalProvider, useModalContext } from "./contexts/ModalContext";
import { TaskProvider } from "./contexts/TaskContext";

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
    <TaskProvider>
      <ModalProvider>
        <View style={styles.container}>
          <AddButton />
          <Content />
        </View>
      </ModalProvider>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    position: "relative",
  },
});
