import React, { useState } from "react";
import { Button, NeoMorph, TextInput } from "../../components";

import images from "../../../assets";
import styles, { width } from "./styles";
import { THEMES } from "../../constants";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

const Login = ({ displayRegister, onSkip }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { sizes, colors } = THEMES;
  return (
    <SafeAreaView style={{ ...styles.container, paddingTop: sizes.l }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "android" ? "height" : "padding"}
        >
          <TextInput
            value={email}
            icon={images.email}
            label={"Email"}
            placeholder={"Enter your email"}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            value={password}
            icon={images.lock}
            secure
            label={"Password"}
            placeholder={"Enter your password"}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              marginRight: sizes.m,
              marginBottom: sizes.m,
            }}
          >
            <Text style={styles.text}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            bg={colors.primary}
            fg={colors.white}
            style={{ marginHorizontal: sizes.m }}
            label="Login"
          />
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginRight: sizes.m,
              marginVertical: sizes.m,
            }}
            onPress={displayRegister}
          >
            <Text style={styles.text}>
              Don't have an account?
              <Text style={{ color: colors.primary }}>Register</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSkip}>
            <NeoMorph />
            <Text
              style={{
                ...styles.text,
                position: "absolute",
                alignSelf: "center",
                top: 38,
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
          <Text>
            {email} - {password}
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
