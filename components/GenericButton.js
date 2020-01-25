import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const GenericButton = props => {
  return (
    <View style={{ ...styles.container, ...props.containerStyle }}>
      <TouchableOpacity
        style={{ ...styles.touchable, ...props.touchableStyle }}
        onPress={props.onPress}
      >
        <View>
          <Text style={{ ...styles.title, ...props.titleStyle }}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    justifyContent: "center",
    padding: 10
  },
  touchable: {},
  title: { textAlign: "center", color: "white" }
});

export default GenericButton;
