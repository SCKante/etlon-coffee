import { StyleSheet } from "react-native";

const THEMES = {
  colors: {
    primary: "#DEAF67",
    secondary: "#1F3B60",
    black: "#2C2C2C",
    lightgrey: "#EBEBEB",
    white: "#FFFFFF",
    whiteIce: "#F8F8F8",
    grey: "#7d7b78",
  },
  sizes: {
    s: 8,
    m: 16,
    l: 32,
    xl: 48,
  },
  fonts: StyleSheet.create({
    largeText: { fontSize: 38, fontWeight: "900" },
    h1: {
      fontSize: 32,
      fontWeight: "900",
    },
    h2: {
      fontSize: 24,
      fontWeight: "900",
    },
    h3: {
      fontSize: 18.72,
      fontWeight: "500",
    },
    h4: {
      fontSize: 16,
      fontWeight: "900",
    },
    h5: {
      fontSize: 13.28,
      fontWeight: "900",
    },
    h6: {
      fontSize: 10.72,
      fontWeight: "900",
    },
    p: {
      fontSize: 12,
      fontWeight: "400",
    },
  }),
  shadow: StyleSheet.create({
    btnShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
  }),
};

export default THEMES;
