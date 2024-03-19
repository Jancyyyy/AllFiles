import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'main.dart';

/* void main() {

  runApp(Food());

}
 */

class Food extends StatefulWidget {
  @override
  State<Food> createState() => _FoodState();
}

class _FoodState extends State<Food> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Food',
      theme: ThemeData(),
      home: Foodp(),
    );
  }
}

class Foodp extends StatefulWidget {
  final TextEditingController dateController = TextEditingController();

  @override
  _FoodpState createState() => _FoodpState();
}

class _FoodpState extends State<Foodp> {
  late String selectedLocation;
  late String selectedFood;
  bool checkbox = false;
  bool budgeta = false;
  List<String> locations = [
    'Select Location',
    'Hyderabad',
    'Pune',
    'Bangalore',
  ];
  List<String> foodtype = [
    'Lunch',
    'Breakfast',
  ];
  List<String> foodItems = [
    'Lunch',
    'Breakfast',
    'Snacks',
  ];
  List<String> values = ['Low', 'Medium', 'High'];
  String selectedValue = 'Low';

  final TextEditingController dateController = TextEditingController();

  TimeOfDay? selectedStartTime;
  TimeOfDay? selectedEndTime;

  int vegPlateCount = 0;
  int Nonvegplatecount = 0;
  void incrementCount() {
    setState(() {
      vegPlateCount++;
    });
  }

  void decrementCount() {
    setState(() {
      if (vegPlateCount > 0) {
        vegPlateCount--;
      }
    });
  }

  void nonincrementCount() {
    setState(() {
      Nonvegplatecount++;
    });
  }

  void nondecrementCount() {
    setState(() {
      if (Nonvegplatecount > 0) {
        Nonvegplatecount--;
      }
    });
  }

  @override
  void initState() {
    super.initState();

    selectedLocation = locations[0];
    selectedFood = foodItems[0]; 
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Food'),
      ),
      body: SingleChildScrollView(
        child: Column(children: [
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
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Checkbox(
                value: checkbox,
                onChanged: (value) {
                  setState(() {
                    checkbox = value!;
                  });
                },
              ),
              Expanded(
                child: Text(
                  'Fine Dining Required?',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                  ),
                ),
              ),
              SizedBox(width: 10),
              Row(
                children: [
                  Checkbox(
                    value: budgeta,
                    onChanged: (value) {
                      setState(() {
                        budgeta = value!;
                      });
                    },
                  ),
                  const Text(
                    'Budget Approved?',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 18,
                    ),
                  ),
                ],
              ),
            ],
          ),
          SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Food Type:',
                style: TextStyle(fontSize: 18),
              ),
              SizedBox(width: 10),
              DropdownButton<String>(
                value: selectedFood,
                onChanged: (newValue) {
                  setState(() {
                    selectedFood = newValue!;
                  });
                },
                items: foodItems.map<DropdownMenuItem<String>>((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
              ),
            ],
          ),
          SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              const Text(
                'Number of Veg Plates: ',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
              SizedBox(width: 20),
              ElevatedButton(
                onPressed: () {
                  decrementCount();
                },
                child: Text(
                  '-',
                  style: TextStyle(fontSize: 18),
                ),
              ),
              SizedBox(width: 20),
              Text(
                vegPlateCount.toString(),
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(width: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      incrementCount();
                    },
                    child:const Text(
                      '+',
                      style: TextStyle(fontSize: 18),
                    ),
                  ),
                ],
              ),
            ],
          ),
          SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              const Text(
                'Number of Non-Veg Plates: ',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 19,
                ),
              ),
              SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {
                  nondecrementCount();
                },
                child:const Text(
                  '-',
                  style: TextStyle(fontSize: 15),
                ),
              ),
              SizedBox(width: 10),
              Text(
                Nonvegplatecount.toString(),
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(width: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      nonincrementCount();
                    },
                    child:const Text(
                      '+',
                      style: TextStyle(fontSize: 18),
                    ),
                  ),
                ],
              ),
            ],
          ),
          SizedBox(height: 10),

          const Column(children: [
            Row(children: [
              Expanded(
                child: Text(
                  'Allergies (If any): ',
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
          SizedBox(height: 10),
          Row(
            children: [
              const Text(
                'Spice Level:',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              SizedBox(width: 30),
              const Text(
                'Low',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              Expanded(
                child: Slider(
                  value: values.indexOf(selectedValue).toDouble(),
                  min: 0,
                  max: values.length.toDouble() - 1,
                  divisions: values.length - 1,
                  onChanged: (newValue) {
                    setState(() {
                      selectedValue = values[newValue.toInt()];
                    });
                  },
                ),
              ),
              const Text(
                'High',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
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

          const Column(
            children: [
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
                    // Handle "Save" button tap
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
        ]),
      ),
    );
  }
}
