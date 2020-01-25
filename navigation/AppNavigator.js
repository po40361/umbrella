import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";

import StartupScreen from "../screens/auth/StartupScreen";
import LogInScreen from "../screens/auth/LogInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import HomeScreen from "../screens/mainApp/HomeScreen";
import ReportsScreen from "../screens/mainApp/ReportsScreen";
import BabeScreen from "../screens/mainApp/BabeScreen";
import ProfileScreen from "../screens/mainApp/ProfileScreen";

import { createBottomTabNavigator } from "react-navigation-tabs";

const LogInNavigator = createStackNavigator({
  Startup: StartupScreen,
  LogIn: LogInScreen,
  SignUp: SignUpScreen
});

const HomeScreenTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Reports: ReportsScreen,
  Babe: BabeScreen,
  Profile: ProfileScreen
});

HomeScreenTabNavigator.navigationOptions = {
  headerShown: false
};

const MainAppNavigator = createStackNavigator({
  HomeScreenTab: HomeScreenTabNavigator
});

const AppNavigator = createSwitchNavigator(
  {
    AuthStack: LogInNavigator,
    MainAppStack: MainAppNavigator
  },
  {
    initialRouteName: "AuthStack"
  }
);

export default createAppContainer(AppNavigator);
