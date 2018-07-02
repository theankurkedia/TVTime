import 'package:flutter/material.dart';
import "./searchScreen.dart";

class ListScreen extends StatefulWidget {
  @override
  _ListScreenState createState() => new _ListScreenState();
}

class _ListScreenState extends State<ListScreen> {
  Widget getAvatar(String avatar, String label) {
    return new Padding(
      padding: new EdgeInsets.all(5.0),
      child: new Chip(
        avatar: new CircleAvatar(
          backgroundColor: Colors.grey.shade800,
          child: new Text(avatar),
        ),
        label: new Text(label),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new Column(
        children: <Widget>[
          new Row(
            children: <Widget>[
              getAvatar("A", "Label A"),
              getAvatar("B", "Label B")
            ],
          ),
          new Expanded(
            child: ListView.builder(
              itemCount: 10,
              itemBuilder: (context, index) {
                return new Card(
                  child: new Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      const ListTile(
                        leading: CircleAvatar(
                          backgroundColor: Colors.amber,
                          child: Text('AH'),
                        ),
                        title: const Text('The Enchanted Nightingale'),
                        subtitle: const Text('Music by Julie Gable.'),
                      ),
                      new ButtonTheme.bar(
                        child: new ButtonBar(
                          children: <Widget>[
                            new FlatButton(
                              child: const Text('BUY TICKETS'),
                              onPressed: () {
                                Scaffold.of(context).showSnackBar(new SnackBar(
                                      content: Text('Yay! A SnackBar!'),
                                    ));
                              },
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          )
        ],
      ),
      floatingActionButton: new FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => SearchScreen()),
          );
        },
        tooltip: 'Increment',
        child: new Icon(Icons.search),
      ),
    );
  }
}
