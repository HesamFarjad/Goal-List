import { useState } from "react";
import { FlatList, Button, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addHandler(inputedText) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: inputedText, id: Math.random().toString() },
    ]);
    console.log(goals);
  }
  function deleteHandler(id) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.newGoalBtn}>
          <Button
            title="Add New Goal"
            color="white"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          fAddHand={addHandler}
          visible={modalVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  deleteHandler={deleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#C0EDA6",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  goalsContainer: {
    flex: 7,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 22,
    marginLeft: 2,
  },
  newGoalBtn: {
    backgroundColor: "#2C7865",
    borderRadius: 20,
  },
});
