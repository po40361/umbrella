import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import AppNavigator from "./navigation/AppNavigator";

const fetchFonts = () => {
  Font.loadAsync({
    lato: require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({});
