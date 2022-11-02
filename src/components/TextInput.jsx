import {
  View,
  Text,
  TextInput as Input,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import NeoMorph from "./NeoMorph";
import { THEMES } from "../constants";
import images from "../../assets";

const { width } = Dimensions.get("window");
const TextInput = ({
  placeholder,
  label,
  icon,
  secure,
  onChangeText,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(secure);
  const { colors, sizes } = THEMES;
  return (
    <View>
      <Text
        style={{
          marginLeft: sizes.m,
          fontWeight: "600",
          color: colors.black,
          fontSize: 16,
        }}
      >
        {label}
      </Text>
      <View>
        <NeoMorph />
        <View
          style={{
            position: "absolute",
            width: width - sizes.m * 2,
            paddingHorizontal: sizes.m,
            height: 65,
            borderRadius: 15,
            top: sizes.m,
            left: sizes.m,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={icon}
            style={{ width: 16, height: 16, resizeMode: "contain" }}
          />
          <Input
            secureTextEntry={showPassword}
            style={{ flex: 1, height: "100%", paddingHorizontal: sizes.m }}
            {...{ placeholder }}
            placeholderTextColor={colors.grey}
            keyboardType={secure ? "default" : "email-address"}
            // {...{ onChangeText, value }}
          />
          {secure && (
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                source={showPassword ? images.show : images.hide}
                style={{ width: 20, height: 20, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default TextInput;
