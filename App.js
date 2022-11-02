import React from "react";
import { Image, Platform, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart, Favorites, GetStarted, Home, Map } from "./src";
import { THEMES } from "./src/constants";
import images from "./assets";
import { BottomTabs } from "./src/components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = THEMES;
  if (Platform.OS == "android") {
    NavigationBar.setBackgroundColorAsync(colors.whiteIce);
  }
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabs {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 84,
          borderTopWidth: 0,
          overflow: "hidden",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={GetStarted} />
      <Stack.Screen name="Root" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
