import React from "react";
import { Button, NeoMorph, TextInput } from "../../components";

import images from "../../../assets";
import styles, { width } from "./styles";
import { THEMES } from "../../constants";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const Register = ({ displayLogin }) => {
  const { sizes, colors } = THEMES;
  return (
    <ScrollView style={{ ...styles.container, paddingTop: sizes.l }}>
      <TextInput
        icon={images.email}
        label={"Your Name"}
        placeholder={"Enter your name"}
      />
      <TextInput
        icon={images.email}
        label={"Email"}
        placeholder={"Enter your email"}
      />
      <TextInput
        icon={images.lock}
        secure
        label={"Password"}
        placeholder={"Enter your password"}
      />
      <TouchableOpacity
        style={{
          alignSelf: "center",
          marginRight: sizes.m,
          marginVertical: sizes.l,
        }}
      >
        <Text style={{ ...styles.text, textAlign: "center" }}>
          <Text style={{ color: colors.primary }}>
            By signing you agree to our
          </Text>
          Term of use<Text style={{ color: colors.primary }}>and</Text>privacy
          notice.
        </Text>
      </TouchableOpacity>
      <Button
        bg={colors.primary}
        fg={colors.white}
        style={{ marginHorizontal: sizes.m }}
        label="Register"
      />
      <TouchableOpacity
        style={{
          alignSelf: "center",
          marginRight: sizes.m,
          marginVertical: sizes.m,
        }}
        onPress={displayLogin}
      >
        <Text style={styles.text}>
          Have you an account?
          <Text style={{ color: colors.primary }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;
