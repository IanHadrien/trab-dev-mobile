import { createDrawerNavigator } from "@react-navigation/drawer";

import { MyProject, NewProject, Project } from "../Screens/App/Index";
 
const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My-Project" component={MyProject} />
      <Drawer.Screen name="New-Project" component={NewProject} />
      <Drawer.Screen name="Project" component={Project} />
      {/* <Drawer.Screen /> */}
    </Drawer.Navigator>
  );
}