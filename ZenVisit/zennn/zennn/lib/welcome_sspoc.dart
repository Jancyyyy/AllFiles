import 'package:flutter/material.dart';
import 'dart:math';

import 'package:zennn/zenvisit.dart';

class HomeS extends StatefulWidget {
  @override
  State<HomeS> createState() => _HomeSState();
}

class _HomeSState extends State<HomeS> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'homescreen',
      theme: ThemeData(),
      home: SpocScreen(),
    );
  }
}

class SpocScreen extends StatefulWidget {
  const SpocScreen({Key? key}) : super(key: key);

  @override
  State<SpocScreen> createState() => _SpocScreenState();
}

class _SpocScreenState extends State<SpocScreen> {
  final TextEditingController searchcontroller = TextEditingController();

  final List<Map<String, dynamic>> visits = [
    {
      'clientName': 'Client A',
      'description': 'Meeting with Client A',
      'visitDate': '2023-08-01',
      'location': 'New York',
      'visitObjective': 'Discuss new project',
      'visitOwner': 'John Doe',
      'status': 'Pending'
    },
    {
      'clientName': 'Client B',
      'description': 'Meeting with Client A',
      'visitDate': '2023-08-01',
      'location': 'New York',
      'visitObjective': 'Discuss new project',
      'visitOwner': 'John Doe',
      'status': 'Pending'
    },
    {
      'clientName': 'Client C',
      'description': 'Meeting with Client A',
      'visitDate': '2023-08-01',
      'location': 'New York',
      'visitObjective': 'Discuss new project',
      'visitOwner': 'John Doe',
      'status': 'Pending'
    },
    {
      'clientName': 'Client D',
      'description': 'Meeting with Client A',
      'visitDate': '2023-08-01',
      'location': 'New York',
      'visitObjective': 'Discuss new project',
      'visitOwner': 'John Doe',
      'status': 'Pending'
    },
  ];

  int currentIndex = 0;

  void goToPrevious() {
    if (currentIndex > 0) {
      setState(() {
        currentIndex -= 2;
        if (currentIndex < 0) {
          currentIndex = 0;
        }
      });
    }
  }

  void goToNext() {
    if (currentIndex < visits.length - 2) {
      setState(() {
        currentIndex += 2;
      });
    }
  }

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
                'Drawer Header',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                ),
              ),
            ),
            ListTile(
              title: Text('One'),
              onTap: () {},
            ),
            ListTile(
              title: Text('Two'),
              onTap: () {},
            ),
          ],
        ),
      ),
      body: Container(
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
                  onPressed: () {},
                  child: Text('+ Create From Existing Temp'),
                ),
              ],
            ),
            SizedBox(height: 15),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  height: 1,
                  width: 100,
                  child:const Divider(
                    color: Colors.black,
                    thickness: 1,
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 8),
                  child: Text(
                    'Tasks Waiting on You',
                    style: TextStyle(fontSize: 16),
                  ),
                ),
                Container(
                  height: 1,
                  width: 100,
                  child:const Divider(
                    color: Colors.black,
                    thickness: 1,
                  ),
                ),
              ],
            ),
            SizedBox(height: 15),
            Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
              GestureDetector(
                child: Container(
                  padding: const EdgeInsets.all(12),
                  width: 100,
                  height: 100,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    gradient: LinearGradient(
                      colors: [
                        Colors.amberAccent.withOpacity(0.6),
                        Colors.black.withOpacity(0.6),
                      ],
                    ),
                  ),
                  child:const Text(
                    'Pending Itenary Submissions',
                  ),
                ),
              ),
              GestureDetector(
                child: Container(
                  padding: const EdgeInsets.all(12),
                  width: 100,
                  height: 100,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    gradient: LinearGradient(
                      colors: [
                        Colors.orange.shade300.withOpacity(0.6),
                        Colors.orange.shade300.withOpacity(0.6),
                      ],
                    ),
                  ),
                  child:const Text(
                    '5 Pending Taks From 2 Visits',
                  ),
                ),
              ),
              GestureDetector(
                child: Container(
                  padding: const EdgeInsets.all(12),
                  width: 100,
                  height: 100,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    gradient: LinearGradient(
                      colors: [
                        Colors.redAccent.withOpacity(0.6),
                        Colors.redAccent.withOpacity(0.6),
                      ],
                    ),
                  ),
                  child:const Text(
                    'Tasks Past Due From 2 Visits',
                  ),
                ),
              ),
            ]),
            SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  height: 1,
                  width: 370,
                  child:const Divider(
                    color: Colors.black,
                    thickness: 1,
                  ),
                ),
              ],
            ),
            const SizedBox(
              height: 10,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                const SizedBox(
                  width: 10,
                ),
                const Expanded(
                    child:Text(
                  'My Visit(s)',
                  style: TextStyle(fontSize: 20),
                )),
                Expanded(
                  child: TextField(
                      controller: searchcontroller,
                      decoration: const InputDecoration(
                        prefixIcon: Icon(Icons.search),
                        hintText: 'search',
                        border: OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.black)),
                      )),
                ),
                SizedBox(width: 5),
                Expanded(
                  child: buildDisabledDropdown('Dropdown 1', [
                    'Filter by ',
                  ]),
                ),
                SizedBox(width: 5),
                Expanded(
                    child: buildDisabledDropdown('Dropdown 2', [
                  'Sort by',
                ])),
              ],
            ),
            const SizedBox(
              height: 15,
            ),
            Container(
              child: Table(
                border: TableBorder.symmetric(
                  outside: const BorderSide(
                    width: 1,
                  ),
                ),
                defaultVerticalAlignment: TableCellVerticalAlignment.middle,
                children: [
                  TableRow(
                    decoration: BoxDecoration(
                      color: Colors.blue.shade200,
                    ),
                    children: [
                      TableCell(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          child: Text('Client Name'),
                        ),
                      ),
                      TableCell(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          child: Text('Description'),
                        ),
                      ),
                      TableCell(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          child: Text('Visit Date'),
                        ),
                      ),
                      TableCell(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          child: Text('Location'),
                        ),
                      ),
                      TableCell(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          child: Text('Visit Objective'),
                        ),
                      ),
                      TableCell(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          child: Text('Visit Owner'),
                        ),
                      ),
                      TableCell(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          child: Text('Status'),
                        ),
                      ),
                    ],
                  ),
                  for (int i = currentIndex;
                      i < min(currentIndex + 2, visits.length);
                      i++)
                    TableRow(
                      children: [
                        TableCell(child: Text(visits[i]['clientName'])),
                        TableCell(child: Text(visits[i]['description'])),
                        TableCell(child: Text(visits[i]['visitDate'])),
                        TableCell(child: Text(visits[i]['location'])),
                        TableCell(child: Text(visits[i]['visitObjective'])),
                        TableCell(child: Text(visits[i]['visitOwner'])),
                        TableCell(child: Text(visits[i]['status'])),
                      ],
                    )
                ],
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                    'Showing ${currentIndex + 1} to ${min(currentIndex + 2, visits.length)} of ${visits.length} entries'),
                IconButton(
                  icon: Icon(Icons.arrow_back),
                  onPressed: goToPrevious,
                  disabledColor: Colors.grey,
                ),
                SizedBox(width: 20),
                Text('${currentIndex}'),
                SizedBox(width: 20),
                IconButton(
                  icon: Icon(Icons.arrow_forward),
                  onPressed: goToNext,
                  disabledColor: Colors.grey,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

Widget buildDisabledDropdown(String label, List<String> options) {
  return DropdownButton<String>(
    value: options.first,
    items: options
        .map((option) => DropdownMenuItem<String>(
              value: option,
              child: Text(option),
            ))
        .toList(),
    onChanged: null,
    isExpanded: true,
    disabledHint: Text('Disabled'),
    hint: Text(label),
  );
}
