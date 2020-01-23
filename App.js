import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import LogInNavigator from "./navigation/LogInNavigator";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/Lato-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/Lato-Bold.ttf")
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

  return <LogInNavigator />;
}

const styles = StyleSheet.create({});
