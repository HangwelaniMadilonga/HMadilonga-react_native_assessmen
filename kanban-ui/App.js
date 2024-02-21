import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import BoardScreen from "./screens/BoardScreen";
import AddButton from "./components/AddButton";

export default function App() {
  return (
    <View style={styles.container}>
      <AddButton />
      <ScrollView>
        <BoardScreen />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    position: "relative",
  },
});
