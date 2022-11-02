import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { THEMES } from "../constants";

const Button = ({ bg, shadow = null, style, label, fg, onPress }) => {
  const { fonts } = THEMES;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...style,
        backgroundColor: bg,
        ...shadow,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 10,
      }}
      {...{ onPress }}
    >
      <Text style={{ ...fonts.h3, color: fg }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
