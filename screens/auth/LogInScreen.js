import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import CredentialsInput from "../../components/CredentialsInput";
import GenericButton from "../../components/GenericButton";

class LogInScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  loginHandler = () => {
    this.props.navigation.navigate("MainAppStack");
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.elements}>
          <View style={styles.loginTitle}>
            <Text style={styles.loginText}>Log In</Text>
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

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <View style={styles.forgotPassword}>
                <Text style={{ color: "#8b8b8b" }}>Forgot password?</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.loginButton}>
              <View>
                <GenericButton
                  title={"Log In"}
                  onPress={() => {
                    this.loginHandler();
                  }}
                ></GenericButton>
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate({ routeName: "SignUp" });
                }}
              >
                <View style={styles.noAccount}>
                  <Text style={{ color: "#8b8b8b" }}>
                    No account? Sign up here.
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
    alignItems: "center"
    // justifyContent: "center"
  },
  loginTitle: { alignContent: "flex-start", padding: 50, height: "21%" },
  loginText: {
    fontSize: 25,
    color: Colors.primary,
    paddingBottom: 10
  },
  credentials: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  credentialText: { color: Colors.primary, fontSize: 13 },
  credentialSection: {
    paddingBottom: 10,
    width: "70%"
  },
  forgotPassword: {
    justifyContent: "center",
    alignItems: "center"
  },
  bottomButtons: { height: "50%", padding: 40 },
  loginButton: { height: "50%", padding: 40 },
  noAccount: { justifyContent: "center", alignItems: "center", padding: 7 }
});

export default LogInScreen;
