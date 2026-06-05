import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View, StyleProp, ViewStyle, TextStyle } from "react-native";

type IconName = keyof typeof FontAwesome.glyphMap;

type Props = {
  
  label: string;
  icon: IconName;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
};

export default function Button ({label, icon, onPress, containerStyle, buttonStyle, labelStyle, iconStyle} :Props) {
  return (
    <View
      style={[
        styles.buttonContainer,
        { borderWidth: 4, borderColor: "#c4dce6", borderRadius: 18 },
        containerStyle
      ]}
    >
      <Pressable
        style={[styles.button, buttonStyle]}
        onPress={onPress}
      >
        <FontAwesome
          name={icon}
          color="#25292e"
          style={[styles.buttonIcon, iconStyle]}
        />
        <Text style={[styles.buttonLabel, labelStyle]} selectable={false}>
          {label}
        </Text>
      </Pressable>
    </View>
  );  
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white"
  },
  buttonIcon: {
    paddingRight: 8,
    fontSize: 22,
  },
  buttonLabel: {
    color: "#25292e",
    fontSize: 24,
  },
});
