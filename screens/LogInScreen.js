import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LogInScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Log In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LogInScreen;
