import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'main.dart';

/* void main() {
  runApp(MyApp());
} */

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'OCD Visit',
      theme: ThemeData(),
      home: OdcV(),
    );
  }
}

class OdcV extends StatefulWidget {
  final TextEditingController dateController = TextEditingController();
  @override
  _OdcVState createState() => _OdcVState();
}

class _OdcVState extends State<OdcV> {
  late String selectedLocation;
  List<String> locations = [
    'Select Location',
    'Hyderabad',
    'Pune',
    'Bangalore',
  ];
  final TextEditingController dateController = TextEditingController();
  bool danglersChecked = false;
  bool tvChecked = false;
  bool postersChecked = false;
  bool showItems = true;
  TimeOfDay? selectedStartTime;
  TimeOfDay? selectedEndTime;
  @override
  void initState() {
    super.initState();
    selectedLocation = locations[0];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('ODC Visit'),
      ),
      body: SingleChildScrollView(
          child: Column(
        children: [
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
                      'Location:',
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
          Row(
            children: [
              const Text(
                'Owner\(s\):',
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
          SizedBox(height: 10),
          Row(
            children: [
              const Expanded(
                child: Text(
                  'Due Date: ',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
              ),
              Expanded(
                child: TextFormField(
                  onTap: () => showDatePicker(
                          context: context,
                          initialDate: DateTime.now(),
                          firstDate: DateTime(2023, 1, 1),
                          lastDate: DateTime(2024, 1, 1))
                      .then((value) => dateController.text =
                          DateFormat('dd/MM/yyyy')
                              .format(value ?? DateTime.now())
                              .toString()),
                  controller: dateController,
                  decoration: const InputDecoration(
                      counterStyle: TextStyle(fontSize: 30),
                      hintText: 'DD/MM/YYYY',
                      suffixIcon: Icon(Icons.date_range),
                      contentPadding:
                          EdgeInsets.symmetric(horizontal: 20, vertical: 0),
                      border: OutlineInputBorder(
                          borderSide: BorderSide(
                              style: BorderStyle.solid,
                              width: 2,
                              color: Colors.black))),
                ),
              ),
            ],
          ),
          SizedBox(height: 10),
          const Row(
            children: [
              Expanded(
                child: Text(
                  'Check on the items you would like to have:',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
              ),
            ],
          ),
          SizedBox(height: 10),
          Row(
            children: [
              InkWell(
                onTap: () {
                  setState(() {
                    danglersChecked = !danglersChecked;
                  });
                },
                child: Container(
                  width: 18,
                  height: 18,
                  decoration: BoxDecoration(
                    shape: BoxShape.rectangle,
                    border: Border.all(color: Colors.black),
                    color: danglersChecked
                        ? const Color.fromARGB(255, 246, 248, 246)
                        : Colors.transparent,
                  ),
                  child: danglersChecked
                      ? Icon(Icons.check,
                          size: 18.0, color: Color.fromARGB(255, 36, 156, 60))
                      : null,
                ),
              ),
              SizedBox(height: 10),
              const Text(
                ' Danglers',
                style: TextStyle(
                  fontSize: 20,
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          SizedBox(height: 10),
          Row(
            children: [
              InkWell(
                onTap: () {
                  setState(() {
                    tvChecked = !tvChecked;
                  });
                },
                child: Container(
                  width: 18,
                  height: 18,
                  decoration: BoxDecoration(
                    shape: BoxShape.rectangle,
                    border: Border.all(color: Colors.black),
                    color: tvChecked
                        ? const Color.fromARGB(255, 246, 248, 246)
                        : Colors.transparent,
                  ),
                  child: tvChecked
                      ? Icon(Icons.check,
                          size: 18.0, color: Color.fromARGB(255, 36, 156, 60))
                      : null,
                ),
              ),
              const SizedBox(width: 8.0),
              const Text(
                'TV',
                style: TextStyle(
                  fontSize: 20,
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          SizedBox(height: 10),
          Row(
            children: [
              InkWell(
                onTap: () {
                  setState(() {
                    postersChecked = !postersChecked;
                  });
                },
                child: Container(
                  width: 18,
                  height: 18,
                  decoration: BoxDecoration(
                    shape: BoxShape.rectangle,
                    border: Border.all(color: Colors.black),
                    color: postersChecked
                        ? const Color.fromARGB(255, 246, 248, 246)
                        : Colors.transparent,
                  ),
                  child: postersChecked
                      ? Icon(Icons.check,
                          size: 18.0, color: Color.fromARGB(255, 36, 156, 60))
                      : null,
                ),
              ),
              const SizedBox(width: 8.0),
              const Text(
                'Posters',
                style: TextStyle(
                  fontSize: 20,
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),

          SizedBox(height: 10),
          const Column(children: [
            Row(children: [
              Expanded(
                child: Text(
                  'Key Message\(s\): ',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
              ),
            ]),
            SizedBox(height: 8),
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
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Expanded(
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => HomeScreen(),
                    ));
                  },
                  style: ElevatedButton.styleFrom(
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
                child: ElevatedButton(
                  onPressed: () {
                    setState(() {
                      showItems = false; 
                    });
                  },
                  style: ElevatedButton.styleFrom(
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
        ],
      )),
    );
  }
}
