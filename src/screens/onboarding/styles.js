import { Dimensions, StyleSheet } from "react-native";
import { THEMES } from "../../constants";

const { sizes, colors } = THEMES;
export const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  morphContainer: {
    width: width - sizes.m * 2,
    height: 100,
    marginVertical: sizes.m,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.whiteIce,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: sizes.m,
    fontWeight: "600",
    color: colors.black,
    fontSize: 16,
  },
});

export default styles;
