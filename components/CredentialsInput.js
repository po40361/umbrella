import { View, TextInput, StyleSheet, ShadowPropTypesIOS } from "react-native";
import React from "react";

const CredentialsInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder={props.placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    borderBottomColor: "#B5B5B5",
    borderBottomWidth: 2,
    paddingBottom: 0,
    marginBottom: 5,
    marginTop: 5
  },
  input: {
    width: "95%",
    height: 23,
    fontSize: 15,
    textAlign: "left"
  }
});

export default CredentialsInput;
