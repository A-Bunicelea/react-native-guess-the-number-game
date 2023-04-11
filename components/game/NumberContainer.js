import { StyleSheet, View, Text, Dimensions } from "react-native";
import Colors from "../../constants/colors";

// Dimensions API is a JS object - can get the device width and height

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

// Android: screen - including the status bar, window - excluding the status bar
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
