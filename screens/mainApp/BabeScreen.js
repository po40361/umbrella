import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BabeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>BabeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default BabeScreen;
