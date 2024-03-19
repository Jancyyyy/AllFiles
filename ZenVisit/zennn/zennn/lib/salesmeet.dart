import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:zennn/timelinee.dart';

import 'main.dart';

/* void main() {
  runApp(Salesm());
} */

class Salesm extends StatefulWidget {
  @override
  State<Salesm> createState() => _SalesmState();
}

class _SalesmState extends State<Salesm> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sales Meeting',
      theme: ThemeData(),
      home: SalesM(),
    );
  }
}

class SalesM extends StatefulWidget {
  final TextEditingController dateController = TextEditingController();
  @override
  _SalesMState createState() => _SalesMState();
}

class _SalesMState extends State<SalesM> {
  late String selectedLocation;
  List<String> locations = [
    'Hyderabad',
    'Pune',
    'Bangalore',
  ];
  final TextEditingController dateController = TextEditingController();

  bool reviewDone = false;

  TimeOfDay? selectedStartTime;
  TimeOfDay? selectedEndTime;
  bool isStartTimeSelected = false;
  bool isEndTimeSelected = false;
  @override
  void initState() {
    super.initState();
    selectedLocation = locations[0];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Sales Meeting'),
      ),
      body: SingleChildScrollView(
          child: Column(children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Expanded(
              child: Text(
                'Meeting Room:',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              child: Container(
                decoration: const BoxDecoration(
                  boxShadow: [
                    BoxShadow(
                      color: Color.fromARGB(255, 228, 218, 218),
                    ),
                    BoxShadow(
                      color: Colors.white,
                      spreadRadius: 40.0,
                      blurRadius: 90.0,
                      offset: Offset(3.0, 0),
                    ),
                  ],
                ),
                child: TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Capability Demonstration',
                    labelStyle: const TextStyle(
                      fontSize: 15,
                      color: Colors.black,
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(
                        color: Colors.black.withOpacity(
                            0.2), 
                        width: 3.5,
                      ),
                      borderRadius: BorderRadius.circular(9.0),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: const BorderSide(
                        color: Colors
                            .black, 
                        width: 2.0,
                      ),
                      borderRadius: BorderRadius.circular(9.0),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
        SizedBox(height: 10), 
        Row(
          children: [
            Expanded(
              child: DropdownButtonFormField<String>(
                value: selectedLocation,
                onChanged: (newValue) {
                  setState(() {
                    selectedLocation = newValue!;
                  });
                },
                items: locations.map((location) {
                  return DropdownMenuItem<String>(
                    value: location,
                    child: Text(location),
                  );
                }).toList(),
                decoration: InputDecoration(
                  hintText: 'Select Location', 
                  icon: const Text(
                    'Meeting Location:',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 20,
                    ),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.grey.withOpacity(0.2),
                      width: 3.5,
                    ),
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                ),
              ),
            ),
          ],
        ),
        SizedBox(height: 10),
        Row(
          children: [
            const Text(
              'Owner\'s:',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            ElevatedButton(
              onPressed: () {
              },
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(
                      20.0), 
                  side: const BorderSide(
                    color: Colors.black,
                    width: 1.0,
                  ), 
                ),
                primary: Colors.white, 
                onPrimary: Colors.black, 
              ),
              child: const Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.add),
                  Text(
                    'Add  ',
                    style: TextStyle(fontSize: 20),
                  ),
                  SizedBox(width: 0), 
                ],
              ),
            ),
          ],
        ),
        Row(
          children: [
            const Expanded(
              child: Text(
                'Time Duration:',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              child: InkWell(
                onTap: () async {
                  final pickedTime = await showTimePicker(
                    context: context,
                    initialTime: selectedStartTime ?? TimeOfDay.now(),
                  );

                  if (pickedTime != null) {
                    setState(() {
                      selectedStartTime = pickedTime;
                    });
                  }
                },
                child: InputDecorator(
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                  ),
                  child: Text(
                    selectedStartTime?.format(context) ?? 'start time',
                    style: const TextStyle(
                      fontSize: 18, 
                    ),
                  ),
                ),
              ),
            ),
            Expanded(
              child: InkWell(
                onTap: () async {
                  final pickedTime = await showTimePicker(
                    context: context,
                    initialTime: selectedEndTime ?? TimeOfDay.now(),
                  );

                  if (pickedTime != null) {
                    final startTime = DateTime(
                      1,
                      1,
                      1,
                      selectedStartTime?.hour ?? 0,
                      selectedStartTime?.minute ?? 0,
                    );
                    final endTime = DateTime(
                      1,
                      1,
                      1,
                      pickedTime.hour,
                      pickedTime.minute,
                    );
                    if (startTime.isAfter(endTime)) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text(
                              'End time cannot be earlier than start time'),
                        ),
                      );
                    } else {
                      setState(() {
                        selectedEndTime = pickedTime;
                      });
                    }
                  }
                },
                child: InputDecorator(
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                  ),
                  child: Text(
                    selectedEndTime?.format(context) ?? 'end time',
                    style: const TextStyle(
                      fontSize: 18, 
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),

        SizedBox(height: 10),
        const Column(children: [
          Row(children: [
            Expanded(
              child: Text(
                'Key Message: ',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
          ]),
          Row(children: [
            Expanded(
                child: TextField(
              decoration: InputDecoration(
                border: OutlineInputBorder(),
              ),
              keyboardType: TextInputType.multiline,
              maxLines: null,
            )),
          ]),
        ]),
        SizedBox(height: 10),
        Row(
          children: [
            const Expanded(
              child: Text(
                'Room:',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              child: TextFormField(
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                ),
              ),
            ),
          ],
        ),
        SizedBox(height: 10),
        Row(
          children: [
            const Expanded(
              child: Text(
                'File URL:',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              flex:
                  3, 
              child: TextFormField(
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                ),
              ),
            ),
            Expanded(
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.white, 
                  border: Border.all(color: Colors.grey), 
                  borderRadius: BorderRadius.circular(15), 
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.3), 
                      spreadRadius: 3, 
                      blurRadius: 4, 
                      offset: Offset(0, 3),
                    ),
                  ],
                ),
                child: TextButton(
                  onPressed: () {},
                  style: TextButton.styleFrom(
                    primary: Colors.black,
                  ),
                  child: const SizedBox(
                    width: 60, 
                    child: Text(
                      'Copy',
                      style: TextStyle(color: Colors.black, fontSize: 20),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),

        SizedBox(height: 10),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Reveiwer(s):',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            ElevatedButton(
              onPressed: () {
              },
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0),
                  side: const BorderSide(
                    color: Colors.black,
                    width: 1.0,
                  ),
                ),
                primary: Colors.white,
                onPrimary: Colors.black,
              ),
              child: const Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.add),
                  Text(
                    'Add  ',
                    style: TextStyle(fontSize: 20),
                  ),
                  SizedBox(width: 0),
                ],
              ),
            ),
            Row(
              children: [
                Checkbox(
                  value: reviewDone,
                  onChanged: (value) {
                    setState(() {
                      reviewDone = value!;
                    });
                  },
                ),
                const Text('Review Done?'),
              ],
            ),
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Expanded(
              child: TextButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) => HomeScreen(),
                  ));
                },
                style: TextButton.styleFrom(
                  backgroundColor: Colors.blue,
                ),
                child: const Text(
                  'Back',
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            Expanded(
              child: TextButton(
                onPressed: () {
                },
                style: TextButton.styleFrom(
                  backgroundColor: Colors.blue,
                ),
                child: const Text(
                  'Save',
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
          ],
        ),
      ])),
    );
  }
}
