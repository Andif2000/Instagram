import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonCustom = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        styles.button,
        {
          backgroundColor: props.backgroundColor,
          width: props.width,
          paddingVertical: props.height,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: props.color,
            fontSize: props.fontSize,
            fontWeight: props.bold,
          },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
  },
});
