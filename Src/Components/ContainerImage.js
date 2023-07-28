import React from "react";
import { View, Image } from "react-native";

const ContainerImage = (props) => {
  let radius = 0;
  if (props.radius) radius = props.size / 2;
  return (
    <View
      style={[
        {
          width: props.width ? props.width : props.size,
          height: props.height ? props.height : props.size,
          padding: props.children ? 5 : 0,
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
    >
      <Image
        source={props.source}
        style={[
          {
            width: props.children ? "60%" : "100%",
            height: props.children ? "60%" : "100%",
            resizeMode: "contain",
            borderRadius: radius,
          },
          props.style,
        ]}
      />
      {props.children}
    </View>
  );
};

export default ContainerImage;
