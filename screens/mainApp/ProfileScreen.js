import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GenericButton from "../../components/GenericButton";

class ProfileScreen extends React.Component {
  logOutHandler = () => {
    this.props.navigation.navigate("AuthStack");
  };
  render() {
    return (
      <View style={styles.screen}>
        <Text>ProfileScreen</Text>
        <View style={styles.logOutButton}>
          <GenericButton
            title={"Log Out"}
            onPress={() => {
              this.logOutHandler();
            }}
          ></GenericButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logOutButton: {
    padding: 10
  }
});

export default ProfileScreen;
