import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import CredentialsInput from "../../components/CredentialsInput";
import GenericButton from "../../components/GenericButton";

class SignUpScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.elements}>
          <View style={styles.loginTitle}>
            <Text style={styles.loginText}>Sign Up</Text>
          </View>
          <View style={styles.credentials}>
            <View style={styles.credentialSection}>
              <Text style={styles.credentialText}>USERNAME OR EMAIL</Text>

              <CredentialsInput placeholder="" />
            </View>

            <View style={styles.credentialSection}>
              <Text style={styles.credentialText}>PASSWORD</Text>

              <CredentialsInput placeholder="" />
            </View>

            <View style={styles.credentialSection}>
              <Text style={styles.credentialText}>CONFIRM PASSWORD</Text>

              <CredentialsInput placeholder="" />
            </View>

            {/* <View style={styles.placeholder}>
            <Text style={{ color: "#8b8b8b" }}></Text>
          </View> */}

            <View style={styles.signUpButton}>
              <View style={{ alignSelf: "center", width: "100%" }}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <GenericButton
                    title={"Sign Up"}
                    containerStyle={{
                      backgroundColor: Colors.signUpBlue,
                      width: "60%"
                    }}
                  ></GenericButton>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate({ routeName: "LogIn" });
                }}
              >
                <View style={styles.gotAccount}>
                  <Text style={{ color: "#8b8b8b" }}>
                    Already have an account? Log in here.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  elements: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  loginTitle: { alignContent: "center", paddingTop: 50, height: "15%" },
  loginText: {
    fontSize: 25,
    color: Colors.signUpBlue,
    paddingBottom: 10
  },
  credentials: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  credentialText: { color: Colors.signUpBlue, fontSize: 13 },
  credentialSection: {
    paddingBottom: 10,
    width: "70%"
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    height: 1
  },
  bottomButtons: { height: "50%", padding: 40, justifyContent: "center" },
  signUpButton: {
    height: "50%",
    padding: 40,
    alignContent: "center",
    width: "100%"
  },
  gotAccount: { justifyContent: "center", alignItems: "center", padding: 7 }
});

export default SignUpScreen;
