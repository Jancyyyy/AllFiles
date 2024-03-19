import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'main.dart';

/* void main() => runApp(Trav());*/
class Trav extends StatefulWidget {
  @override
  State<Trav> createState() => _TravState();
}

class _TravState extends State<Trav> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sales Meeting',
      theme: ThemeData(),
      home: Travelv(),
    );
  }
}

class Travelv extends StatefulWidget {
  @override
  _TravelvState createState() => _TravelvState();
}

class _TravelvState extends State<Travelv> {
  late String selectedLocation;
  List<String> locations = [
    'Hyderabad',
    'Pune',
    'Bangalore',
  ];
  @override
  void initState() {
    super.initState();
    selectedLocation = locations[0]; 
  }

  @override
  Widget build(BuildContext context) {
    TimeOfDay? selectedStartTime;
    TimeOfDay? selectedEndTime;

    var dateController;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Transfers'),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(
              height: 20,
              width: 10,
            ),
            DropdownButtonFormField<String>(
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
              decoration: const InputDecoration(
                icon: Text('Location: ',
                    style:
                        TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                labelText: 'Location',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(
              width: 10,
            ),
            const SizedBox(
              height: 10,
            ),

            Row(
              children: [
                const SizedBox(
                  width: 10,
                  height: 20,
                ),
                const Expanded(
                  child: Text('Location From : ',
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                ),
                Expanded(
                  child: TextFormField(
                    decoration: const InputDecoration(
                        counterStyle: TextStyle(fontSize: 30),
                        hintText: 'A Block',
                        contentPadding:
                            EdgeInsets.symmetric(horizontal: 20, vertical: 0),
                        border: OutlineInputBorder(
                            borderSide: BorderSide(
                                style: BorderStyle.solid,
                                width: 2,
                                color: Colors.black))),
                  ),
                ),
                const SizedBox(
                  width: 10,
                ),
              ],
            ),
            const SizedBox(
              height: 20,
              width: 10,
            ),
            Row(
              children: [
                const SizedBox(
                  width: 10,
                ),
                const Expanded(
                  child: Text(
                    'Location to : ',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                Expanded(
                  child: TextFormField(
                    decoration: const InputDecoration(
                        counterStyle: TextStyle(fontSize: 30),
                        hintText: 'B Block',
                        contentPadding:
                            EdgeInsets.symmetric(horizontal: 20, vertical: 0),
                        border: OutlineInputBorder(
                            borderSide: BorderSide(
                                style: BorderStyle.solid,
                                width: 2,
                                color: Colors.black))),
                  ),
                ),
                const SizedBox(
                  width: 10,
                  height: 20,
                ),
              ],
            ),
            const SizedBox(
              width: 10,
              height: 20,
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
                            const SnackBar(
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
            const SizedBox(
              height: 20,
              width: 10,
            ),
            Row(
              children: [
                const Text(
                  'Owner\'s:',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                ElevatedButton(
                  onPressed: () {},
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
              ],
            ),

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
            Row(
              children: [
                const SizedBox(
                  width: 10,
                ),
                const Expanded(
                  child: Text(
                    'Mode of travel: ',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                Expanded(
                  child: TextFormField(
                    decoration: const InputDecoration(
                        counterStyle: TextStyle(fontSize: 30),
                        hintText: 'Bus',
                        contentPadding:
                            EdgeInsets.symmetric(horizontal: 20, vertical: 0),
                        border: OutlineInputBorder(
                            borderSide: BorderSide(
                                style: BorderStyle.solid,
                                width: 2,
                                color: Colors.black))),
                  ),
                ),
                const SizedBox(
                  width: 10,
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

            const SizedBox(
              height: 30,
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
            )
          ],
        ),
      ),
    );
  }
}
