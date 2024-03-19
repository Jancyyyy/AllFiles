import 'package:flutter/material.dart';
import 'package:zennn/timelinee.dart';
import 'package:zennn/zenvisit.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ZEN VISIT',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: NewVisits(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Builder(
          builder: (BuildContext context) {
            return IconButton(
              icon: const Icon(Icons.menu),
              onPressed: () {
                Scaffold.of(context).openDrawer();
              },
            );
          },
        ),
        title: const Text("ZenVisit"),
        actions: [
          IconButton(
            icon: Icon(Icons.notifications),
            onPressed: () {},
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text(
                'MENU',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                ),
              ),
            ),
            ListTile(
              title: Text('Home'),
              onTap: () {
                // Handle item 1 tap
              },
            ),
            ListTile(
              title: Text('My Visit'),
              onTap: () {
                // Handle item 2 tap
              },
            ),
            // Add more items as needed
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.all(2),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'Welcome Sales SPOC',
                style: TextStyle(fontSize: 20),
              ),
              SizedBox(height: 15),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => NewVisits(),
                      ));
                    },
                    child: Text('+ Create New Visit'),
                  ),
                  SizedBox(width: 4),
                  ElevatedButton(
                    onPressed: () {
                      // Handle second button press
                    },
                    child: Text('+ Create From Existing Temp'),
                  ),
                ],
              ),
              SizedBox(height: 15),
              const Text(
                'New Visit',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 16),
              const Text(
                'Create Itinerary - Macy\'s:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 16),
              CalendarWidget(),
              SizedBox(height: 16),
              SingleChildScrollView(
                child: SizedBox(
                  height: 200,
                  child: TimelinePage(),
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => HomeScreen(),
                      ));
                    },
                    style: ElevatedButton.styleFrom(primary: Colors.red),
                    child: const Text(
                      'Cancel',
                      style: TextStyle(fontSize: 18),
                    ),
                  ),
                  SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () {
                      //Navigator.of(context).push(MaterialPageRoute(builder:(context) => HomeScreen(),));
                    },
                    style: ElevatedButton.styleFrom(
                        primary: Colors.orangeAccent[200]),
                    child: const Text(
                      'Save as Draft',
                      style: TextStyle(fontSize: 18),
                    ),
                  ),
                  SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () {
                      //
                    },
                    style: ElevatedButton.styleFrom(primary: Colors.blue),
                    child: const Text(
                      'Finalize >>',
                      style: TextStyle(fontSize: 18),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class CalendarWidget extends StatefulWidget {
  @override
  _CalendarWidgetState createState() => _CalendarWidgetState();
}

class _CalendarWidgetState extends State<CalendarWidget> {
  DateTime? selectedDate;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Text(
          'Select a date:',
          style: TextStyle(fontSize: 16),
        ),
        SizedBox(height: 8),
        ElevatedButton(
          onPressed: () {
            _showDatePicker(context);
          },
          child: Text('Pick a Date'),
        ),
        SizedBox(height: 16),
        if (selectedDate != null)
          Text(
            'Selected Date: ${selectedDate.toString()}',
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
      ],
    );
  }

  Future<void> _showDatePicker(BuildContext context) async {
    final DateTime? pickedDate = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime.now(),
      lastDate: DateTime.now().add(Duration(days: 365)),
    );

    if (pickedDate != null) {
      setState(() {
        selectedDate = pickedDate;
      });
    }
  }
}
