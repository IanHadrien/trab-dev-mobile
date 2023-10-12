import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Auth/Login";
import ForgotPassword from "../Screens/Auth/ForgotPassword";
import Register from "../Screens/Auth/Register";
import Home from "../Screens/Auth/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="screenA" component={Home} />
      <Screen name="screenB" component={Login} />
      <Screen name="screenC" component={Register} />
      <Screen name="screenD" component={ForgotPassword} />
    </Navigator>
  )
};