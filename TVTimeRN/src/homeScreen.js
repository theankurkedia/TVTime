import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import TabOne from "./tabOne";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Tab,
  Tabs,
  Fab,
  Icon,
  Card,
  CardItem,
  ListItem
} from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#1A8DFF" }}>
          <Title style={{ color: "white", flex: 1, alignSelf: "flex-end" }}>
            The App
          </Title>
        </Header>
        {/* <View hasTabs /> */}
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "white" }}>
          <Tab
            heading="Tab1"
            tabStyle={{ backgroundColor: "#1A8DFF" }}
            textStyle={{ color: "white", fontWeight: "normal" }}
            activeTabStyle={{ backgroundColor: "#1A8DFF" }}
            activeTextStyle={{ color: "white", fontWeight: "normal" }}
          >
            <TabOne />
          </Tab>
          <Tab
            heading="Tab2"
            tabStyle={{ backgroundColor: "#1A8DFF" }}
            textStyle={{ color: "white", fontWeight: "normal" }}
            activeTabStyle={{ backgroundColor: "#1A8DFF" }}
            activeTextStyle={{ color: "white", fontWeight: "normal" }}
          >
            <TabOne />
          </Tab>
        </Tabs>
      </Container>
    );
    // <Container>
    //   <Header>
    //     <Left />
    //     <Body>
    //       <Title>Header</Title>
    //     </Body>
    //     <Right />
    //   </Header>
    //   <FlatList
    //     data={[{ key: "A" }, { key: "B" }]}
    //     style={styles.list}
    //     renderItem={({ item }) => (
    //       <ListItem avatar>
    //         <Left style={{ backgroundColor: "red" }}>
    //           <Text>{item.key}</Text>
    //         </Left>
    //         <Body>
    //           <Text>The Enchanted Nightingale</Text>
    //           <Text>Music by Julie Gable.</Text>
    //         </Body>
    //       </ListItem>
    //     )}
    //   />
    //   <Fab>
    //     <Icon name="search" />
    //   </Fab>
    // </Container>
  }
}

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flex: 1
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
