import 'package:flutter/material.dart';

class SearchScreen extends StatefulWidget {
  @override
  _SearchScreenState createState() => new _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  final TextEditingController _controller = new TextEditingController();
  var searchQuery = "";
  void handleTextInputSubmit(var input) {
    if (input != '') {
      setState(() {
        searchQuery = input;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: const Text('Basic AppBar'),
        ),
        body: new Column(
          children: <Widget>[
            new Center(
              child: new TextField(
                controller: _controller,
                onSubmitted: handleTextInputSubmit,
                decoration: new InputDecoration(
                    hintText: 'Search here', icon: new Icon(Icons.search)),
              ),
            ),
            new Text(searchQuery)
          ],
        ));
  }
}
