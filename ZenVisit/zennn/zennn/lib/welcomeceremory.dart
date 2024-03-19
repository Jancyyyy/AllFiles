import 'package:flutter/material.dart';

import 'package:intl/intl.dart';

import 'main.dart';

class WelcomeCeremony extends StatefulWidget {
  const WelcomeCeremony({super.key});

  @override
  State<WelcomeCeremony> createState() => _WelcomeCeremonyState();
}

class _WelcomeCeremonyState extends State<WelcomeCeremony> {
  String _selectedValue1 = '';

  String _selectedValue2 = '';

  String selectedValue = 'Select Location';
  TimeOfDay? selectedStartTime;
  TimeOfDay? selectedEndTime;
  bool isStartTimeSelected = false;
  bool isEndTimeSelected = false;
  bool isChecked = false;

  DateTime? _selectedDate;

  Future<void> _selectDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: _selectedDate ?? DateTime.now(),
      firstDate: DateTime(2000),
      lastDate: DateTime(2101),
    );

    if (picked != null && picked != _selectedDate) {
      setState(() {
        _selectedDate = picked;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Welcome Ceremony"), centerTitle: true),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              decoration: BoxDecoration(boxShadow: [
                BoxShadow(
                    color: Colors.transparent,
                    blurRadius: 6.0,
                    offset: Offset(0, 4.0))
              ]),
              width: double.infinity,
              height: 90,
              padding: EdgeInsets.symmetric(horizontal: 10),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                      child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Location:',
                        style: TextStyle(
                            fontSize: 18, fontWeight: FontWeight.w600),
                      ),
                      Container(
                        alignment: Alignment.topLeft,
                        padding: EdgeInsets.symmetric(horizontal: 16.0),
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.grey.shade400),

                          borderRadius:
                              BorderRadius.circular(5.0), // Border radius
                        ),
                        child: DropdownButton<String>(
                          value: selectedValue,
                          onChanged: (String? newValue) {
                            setState(() {
                              selectedValue = newValue!;
                            });
                          },
                          items: <String>[
                            'Select Location',
                            'Hyderabad',
                            'Pune',
                            'Banglore',
                          ].map<DropdownMenuItem<String>>((String value) {
                            return DropdownMenuItem<String>(
                              value: value,
                              child: Text(value ?? 'Select Location'),
                            );
                          }).toList(),
                        ),
                      ),
                    ],
                  ))
                ],
              ),
            ),
            Container(
              padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Mode of the Ceremony:",
                        style: TextStyle(
                            fontSize: 16, fontWeight: FontWeight.w600),
                      ),
                      Row(
                        children: [
                          Checkbox(
                            value: isChecked,
                            onChanged: (bool? newValue) {
                              setState(() {
                                isChecked = newValue ?? false;
                              });
                            },
                          ),
                          Text(
                            "Budget Approved?",
                            style: TextStyle(
                                color: Colors.black,
                                fontSize: 16,
                                fontWeight: FontWeight.w500),
                          )
                        ],
                      ),
                    ],
                  ),
                  RadioListTile<String>(
                    title: Text(
                      'Western Formal (Bouquet)',
                      style: TextStyle(fontWeight: FontWeight.w500),
                    ),
                    value: 'Western Formal (Bouquet)',
                    groupValue: _selectedValue1,
                    onChanged: (value) {
                      setState(() {
                        _selectedValue1 = value!;
                      });
                    },
                  ),
                  RadioListTile<String>(
                    title: Text(
                      'Indian Traditional (Rangoli, Lamp, Garland - Estd. Budget INR 20K)',
                      style: TextStyle(fontWeight: FontWeight.w500),
                    ),
                    value:
                        'Indian Traditional (Rangoli, Lamp, Garland - Estd. Budget INR 20K)',
                    groupValue: _selectedValue1,
                    onChanged: (value) {
                      setState(() {
                        _selectedValue1 = value!;
                      });
                    },
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Type of Gift:",
                        style: TextStyle(
                            fontSize: 16, fontWeight: FontWeight.w500),
                      ),
                      Row(
                        children: [
                          Checkbox(
                            value: isChecked,
                            onChanged: (bool? newValue) {
                              setState(() {
                                isChecked = newValue ?? false;
                              });
                            },
                          ),
                          Text(
                            "Budget Approved?",
                            style: TextStyle(
                                color: Colors.black,
                                fontSize: 16,
                                fontWeight: FontWeight.w500),
                          )
                        ],
                      ),
                    ],
                  ),
                  RadioListTile<String>(
                    title: Text(
                      'Standard',
                      style: TextStyle(fontWeight: FontWeight.w500),
                    ),
                    value: 'Standard',
                    groupValue: _selectedValue2,
                    onChanged: (value) {
                      setState(() {
                        _selectedValue2 = value!;
                      });
                    },
                  ),
                  RadioListTile<String>(
                    title: Text(
                      'Special - Estd. Budget INR 10K',
                      style: TextStyle(fontWeight: FontWeight.w500),
                    ),
                    value: 'Special - Estd. Budget INR 10K',
                    groupValue: _selectedValue2,
                    onChanged: (value) {
                      setState(() {
                        _selectedValue2 = value!;
                      });
                    },
                  ),
                  SizedBox(
                    height: 15,
                  ),
                  Row(
                    children: [
                      Text(
                        "Key Owners:",
                        style: TextStyle(
                            fontSize: 17, fontWeight: FontWeight.w600),
                      ),
                      SizedBox(
                        width: 20,
                      ),
                      TextButton.icon(
                        onPressed: () {},
                        icon: Icon(
                          Icons.add,
                          color: Colors.black,
                        ),
                        label: Text(
                          "Add",
                          style: TextStyle(color: Colors.black),
                        ),
                        style: ButtonStyle(
                          shape:
                              MaterialStateProperty.all<RoundedRectangleBorder>(
                            RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20.0),
                              side: BorderSide(color: Colors.black),
                            ),
                          ),
                        ),
                      )
                    ],
                  ),
                  SizedBox(
                    height: 40,
                  ),
                  Row(
                    children: [
                      const Expanded(
                        child: Text(
                          'Time Duration:',
                          style: TextStyle(
                              fontSize: 20, fontWeight: FontWeight.bold),
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
                              selectedStartTime?.format(context) ??
                                  'start time',
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
                  SizedBox(
                    height: 10,
                  ),
                  Container(
                    width: double.infinity,
                    height: 60,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "Due Date:",
                          style: TextStyle(
                              fontSize: 17, fontWeight: FontWeight.w600),
                        ),
                        Container(
                          height: 40,
                          child: Row(
                            children: [
                              Container(
                                width: 155,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10),
                                ),
                                child: TextField(
                                  readOnly: true,
                                  onTap: () => _selectDate(context),
                                  controller: TextEditingController(
                                    text: _selectedDate != null
                                        ? DateFormat("dd-MM-yyyy")
                                            .format(_selectedDate!)
                                        : "",
                                  ),
                                  decoration: InputDecoration(
                                    contentPadding: EdgeInsets.symmetric(
                                        vertical: 15, horizontal: 20),
                                    border: OutlineInputBorder(
                                      borderSide: BorderSide(
                                          color: Colors.grey.shade50),
                                    ),
                                    filled: true,
                                    fillColor: Colors.white,
                                  ),
                                ),
                              ),
                              IconButton(
                                onPressed: () => _selectDate(context),
                                icon: Icon(Icons.calendar_today),
                              ),
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 15,
                  ),
                  Text(
                    "Key Message:",
                    style: TextStyle(fontSize: 17, fontWeight: FontWeight.w600),
                  ),
                  SizedBox(
                    height: 12,
                  ),
                  Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: TextField(
                      maxLines: null,
                      decoration: InputDecoration(
                        contentPadding:
                            EdgeInsets.symmetric(vertical: 15, horizontal: 20),
                        border: OutlineInputBorder(
                          // borderRadius: BorderRadius.circular(10),

                          borderSide: BorderSide(color: Colors.grey.shade50),
                        ),
                        filled: true,
                        fillColor: Colors.white,
                      ),
                    ),
                  ),
                  // SizedBox(
                  //   height: 30,
                  // ),
                  // Container(
                  //     width: double.infinity,
                  //     height: 50,
                  //     child: ElevatedButton(
                  //         onPressed: () {},
                  //         child: Text(
                  //           "Create Entry",
                  //           style: TextStyle(
                  //               fontSize: 17, fontWeight: FontWeight.w600),
                  //         )))
                ],
              ),
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
                    onPressed: () {},
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
          ],
        ),
      ),
    );
  }
}
