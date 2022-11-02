import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "../maintabs/styles";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import BottomSheet from "react-native-gesture-bottom-sheet";

import Button from "../../components/Button";
import { THEMES } from "../../constants";
import images from "../../../assets";
import Login from "./Login";
import Register from "./Register";
import { StatusBar } from "expo-status-bar";
const { height } = Dimensions.get("window");

const GetStarted = ({ navigation }) => {
  const [isLogged, setIsLogged] = useState(true);

  const { colors, sizes } = THEMES;
  const bottomSheet = useRef();

  if (Platform.OS == "android") {
    NavigationBar.setBackgroundColorAsync(colors.secondary);
  }

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.secondary }}
    >
      <StatusBar backgroundColor={"transparent"} style="light" />
      <View style={styles.circle} />
      <View style={styles.contentContainer}>
        <Image source={images.getStartedImg} style={styles.getStartedImg} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.h1}>
          You can {"\n"}always order {"\n"}coffee without {"\n"}living home
        </Text>
        <Button
          bg={colors.white}
          fg={colors.black}
          label={"Get Started"}
          onPress={() => bottomSheet.current.show()}
        />
      </View>
      <BottomSheet
        sheetBackgroundColor={"#EEF0F5"}
        backgroundColor={"transparent"}
        radius={sizes.l}
        hasDraggableIcon
        ref={bottomSheet}
        height={height}
      >
        {isLogged ? (
          <Login
            displayRegister={() => {
              setIsLogged(false);
            }}
            onSkip={() => navigation.push("Root")}
          />
        ) : (
          <Register
            displayLogin={() => {
              setIsLogged(true);
            }}
          />
        )}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default GetStarted;
