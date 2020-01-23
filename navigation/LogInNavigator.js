import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";

import StartupScreen from "../screens/StartupScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const LogInNavigator = createStackNavigator({
  Startup: StartupScreen,
  LogIn: LogInScreen,
  SignUp: SignUpScreen
});

export default createAppContainer(LogInNavigator);
