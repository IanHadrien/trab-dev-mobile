import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./DrawerNavigatior.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
};