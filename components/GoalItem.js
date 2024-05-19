import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.deleteHandler.bind(this, props.id)}
      >
        <Text style={{ color: "white", paddingHorizontal: 20 }}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    alignItems: "center",
    margin: 8,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#41B06E",
  },
  pressedItem: { opacity: 0.5 },
});
