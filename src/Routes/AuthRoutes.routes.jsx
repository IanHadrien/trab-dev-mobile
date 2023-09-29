import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Auth/Login";
import ForgotPassword from "../Screens/Auth/ForgotPassword";
import Register from "../Screens/Auth/Register";

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="screenA" component={Login} />
      <Screen name="screenB" component={ForgotPassword} />
      <Screen name="screenC" component={Register} />
    </Navigator>
  )
};