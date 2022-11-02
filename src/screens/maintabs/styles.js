import { StyleSheet } from "react-native";
import { THEMES } from "../../constants";

const { colors, sizes, fonts } = THEMES;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: sizes.l,
  },
  circle: {
    width: 400,
    height: 400,
    borderRadius: 400,
    position: "absolute",
    top: -80,
    right: -70,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
  },
  h1: {
    ...fonts.largeText,
    color: colors.white,
    textAlign: "left",
    marginBottom: sizes.xl * 2,
  },
  getStartedImg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
});
export default styles;
