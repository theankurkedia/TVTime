import { createMaterialTopTabNavigator } from "react-navigation";
import HomeScreen from "./src/homeScreen";
import React from "react";
import { Root } from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <HomeScreen />
      </Root>
    );
  }
}
