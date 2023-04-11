import { StyleSheet, Text, Platform } from "react-native";

export default function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // ! Platform specific styling
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // this is left like this because this file is only for iOS
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
