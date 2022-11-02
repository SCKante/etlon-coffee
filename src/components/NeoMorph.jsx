import React from "react";
import {
  Box,
  BoxShadow,
  Canvas,
  Fill,
  rect,
  rrect,
} from "@shopify/react-native-skia";
import { THEMES } from "../constants";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const NeoMorph = () => {
  const { sizes } = THEMES;
  return (
    <Canvas
      style={{
        width,
        height: 90,
        marginBottom: sizes.m,
      }}
    >
      <Fill color={"#EEF0F5"} />
      <Box
        box={rrect(rect(width / 2 - 160, 20, 320, 60), 15, 15)}
        color="#eef0f5"
      >
        <BoxShadow dx={-6} dy={-6} blur={20} color={"#ffffff"} />
        <BoxShadow dx={13} dy={14} blur={10} color={"#a6b4c870"} />
      </Box>
    </Canvas>
  );
};

export default NeoMorph;
