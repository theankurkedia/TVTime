import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Right,
  Title,
  Tab,
  Tabs,
  Text,
  Fab,
  Icon,
  Card,
  CardItem,
  List,
  Toast,
  ListItem,
  Thumbnail
} from "native-base";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <FlatList
          data={[
            { key: "a" },
            { key: "b" },
            { key: "c" },
            { key: "d" },
            { key: "e" },
            { key: "f" }
          ]}
          renderItem={({ item }) => (
            <Card style={{ height: 120, paddingRight: 10 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        "https://www.fullstacklabs.co/img/developersReact/react_big-2f819443.png"
                    }}
                  />
                  <Body>
                    <Text>The Enchanted Nightingale</Text>
                    <Text note>Music by Julie Gable.</Text>
                  </Body>
                </Left>
              </CardItem>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignSelf: "flex-end"
                }}
              >
                <Button
                  transparent
                  danger
                  onPress={() => {
                    Toast.show({ text: "Yay!Toast" });
                    // buttonText: 'Okay'
                  }}
                >
                  <Text style={{ color: "blue" }}>Buy Tickets</Text>
                </Button>
              </View>
            </Card>
          )}
        />
        <Fab
          direction="up"
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
        >
          <Icon name="search" />
        </Fab>
      </Container>
    );
  }
}
