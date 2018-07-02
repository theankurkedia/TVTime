import 'package:flutter/material.dart';
import "./listScreen.dart";

void main() => runApp(new MainPage());

class MainPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(
        length: 2,
        child: Scaffold(
          appBar: AppBar(
            title: Text('The App'),
            bottom: TabBar(
              tabs: [
                Tab(icon: Icon(Icons.list)),
                Tab(icon: Icon(Icons.format_list_bulleted)),
              ],
            ),
          ),
          body: TabBarView(
            children: [ListScreen(), ListScreen()],
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
