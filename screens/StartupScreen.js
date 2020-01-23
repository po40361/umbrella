import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

let logo = "../assets/images/logo.png";

const StartupScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.placeholder}></View>
      <Image style={styles.logo} source={require(logo)} />
      <View style={styles.placeholder}></View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({
              routeName: "LogIn"
            });
          }}
        >
          <View style={styles.loginButton}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({ routeName: "SignUp" });
          }}
        >
          <View style={styles.signUpButton}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

StartupScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeholder: {
    height: 150,
    width: 150
  },
  logo: {
    // flex: 1,
    // justifyContent: "center",
    height: 150,
    width: 150
  },
  buttons: {
    flexDirection: "column",
    alignItems: "stretch",
    alignSelf: "stretch",
    justifyContent: "flex-end"
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6BB3F6",
    height: 90
  },
  signUpButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F895C5",
    height: 90
  },
  buttonText: {
    color: "white",
    fontSize: 40
  }
});

export default StartupScreen;
