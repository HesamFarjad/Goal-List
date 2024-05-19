import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput(props) {
  const [inputedText, setInputedText] = useState("");

  function inputHandler(entTxt) {
    setInputedText(entTxt);
  }

  function addGoalHandler() {
    {
      inputedText !== "" && props.fAddHand(inputedText);
    }
    setInputedText("");
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/Goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal ..."
          onChangeText={inputHandler}
          value={inputedText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnAdd}>
            <Button color="white" title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.btnCancel}>
            <Button color="white" title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "35%",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#9DDE8B",
  },
  textInput: {
    borderColor: "#2C7865",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 7,
    width: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 22,
  },
  btnAdd: {
    width: "30%",
    marginHorizontal: 7,
    backgroundColor: "#2C7865",
    borderRadius: 20,
  },
  btnCancel: {
    width: "30%",
    marginHorizontal: 7,
    backgroundColor: "#D75B6F",
    borderRadius: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginVertical: 7,
  },
});
