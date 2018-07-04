import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Fab,
  Icon,
  Card,
  CardItem,
  ListItem
} from "native-base";
export default class ListScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <FlatList
          data={[{ key: "A" }, { key: "B" }]}
          style={styles.list}
          renderItem={({ item }) => (
            <ListItem avatar>
              <Left style={{ backgroundColor: "red" }}>
                <Text>{item.key}</Text>
              </Left>
              <Body>
                <Text>The Enchanted Nightingale</Text>
                <Text>Music by Julie Gable.</Text>
              </Body>
            </ListItem>
          )}
        />
        <Fab>
          <Icon name="search" />
        </Fab>
      </Container>
    );
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
