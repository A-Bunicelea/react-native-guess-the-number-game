import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function Card(props) {
  return <View style={styles.card}>{props.children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 14,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    // elevation - only for Android
    elevation: 4,
    // shadow__ - only for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
