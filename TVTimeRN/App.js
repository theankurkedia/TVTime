import { createMaterialTopTabNavigator } from "react-navigation";
import ListScreen from "./src/ListScreen.js";

export default createMaterialTopTabNavigator({
  Screen1: ListScreen,
  Screen2: ListScreen
});
