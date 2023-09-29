import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./DrawerNavigatior.routes";
import { StatusBar } from "expo-status-bar";
import { AuthRoutes } from "./AuthRoutes.routes";
import { useAuth } from "../Context/Auth";

export default function Routes() {
  const {
    signed,
    loading
  } = useAuth();

  if (loading) return <Text>Loading...</Text>
  return (
    <NavigationContainer>
      <StatusBar />
      {
        signed ? <DrawerRoutes /> : <AuthRoutes />
      }
    </NavigationContainer>
  )
};