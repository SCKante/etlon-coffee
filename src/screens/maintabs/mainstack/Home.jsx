import { View, Text, Platform } from "react-native";
import React from "react";
import styles from "../styles";
import { THEMES } from "../../../constants";

const Home = () => {
  const { colors } = THEMES;

  return (
    <View style={{ ...styles.container, backgroundColor: "#f8f8f8" }}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
