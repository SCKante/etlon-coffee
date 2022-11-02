import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { THEMES } from "../constants";
import {
  Shadow,
  Fill,
  RoundedRect,
  Canvas,
  BoxShadow,
  rrect,
  rect,
  Box,
} from "@shopify/react-native-skia";
import images from "../../assets";
import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  tabStyle: {
    width,
    flexDirection: "row",
    height: 90,
    justifyContent: "space-around",
    alignItems: "center",
  },
  morph: {
    width,
    height: 80,
    position: "absolute",
    bottom: 0,
    zIndex: -1,
    left: 0,
  },
  tab: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    borderRadius: 10,
    position: "absolute",
    // backgroundColor: "rgba(0,0,0,0.3)",
  },
  tabMorph: {
    width: 60,
    height: 60,
  },
});

const BottomTabs = ({ state, descriptors, navigation }) => {
  const { colors } = THEMES;
  return (
    <View
      style={{
        ...styles.tabStyle,
        // backgroundColor: colors.primary,
      }}
    >
      <Canvas style={styles.morph}>
        <Fill color={colors.whiteIce} />
        <Box
          box={rrect(rect(0, 0, width, 120), 32, 32)}
          color={colors.whiteIce}
        >
          <BoxShadow dx={-14} dy={-14} blur={20} color={"#cecece"} />
        </Box>
      </Canvas>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let imgSrc;
        switch (route.name) {
          case "Home":
            imgSrc = images.home;
            break;
          case "Favorites":
            imgSrc = images.like;
            break;
          case "Map":
            imgSrc = images.map;
            break;

          default:
            imgSrc = images.cart;
            break;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <View key={index}>
            <Canvas style={styles.tabMorph}>
              <Fill color={colors.whiteIce} />
              <Box
                box={rrect(rect(5, 5, 50, 50), 10, 10)}
                color={isFocused ? colors.secondary : colors.whiteIce}
              >
                <BoxShadow dx={12} dy={12} blur={16} color={colors.lightgrey} />
                <BoxShadow dx={-15} dy={-15} blur={22} color={"#ffffff"} />
              </Box>
            </Canvas>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                ...styles.tab,
              }}
            >
              <Image
                source={imgSrc}
                style={{
                  width: 18,
                  height: 18,
                  resizeMode: "contain",
                  tintColor: isFocused ? colors.white : colors.grey,
                }}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default BottomTabs;
