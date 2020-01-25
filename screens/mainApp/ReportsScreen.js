import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReportsScreen = props => {
  ReportsScreen.navigationOptions = {
    headerShown: false
  };

  return (
    <View style={styles.screen}>
      <Text>ReportsScreen</Text>
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

export default ReportsScreen;
