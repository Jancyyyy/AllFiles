// import 'package:flutter/material.dart';
// import 'package:intl/intl.dart';

// void main() {
//   runApp(AnotherPage());
// }

// class AnotherPage extends StatefulWidget {
//   @override
//   State<AnotherPage> createState() => _AnotherPageState();
// }p

// class _AnotherPageState extends State<AnotherPage> {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Sales Meeting',
//       theme: ThemeData(),
//       home: HomePage(),
//     );
//   }
// }

// class HomePage extends StatefulWidget {
//   final TextEditingController dateController = TextEditingController();
//   @override
//   _HomePageState createState() => _HomePageState();
// }

// class _HomePageState extends State<HomePage> {
//   late String selectedLocation;
//   List<String> locations = [
//     'Hyderabad',
//     'Pune',
//     'Bangalore',
//   ];
//   final TextEditingController dateController = TextEditingController();

//   bool reviewDone = false;
//   TimeOfDay selectedStartTime = TimeOfDay.now();
//   TimeOfDay selectedEndTime = TimeOfDay.now();
//   bool isStartTimeSelected = false;
//   bool isEndTimeSelected = false;
//   @override
//   void initState() {
//     super.initState();
//     selectedLocation = locations[0]; // Set the default selected location
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//         appBar: AppBar(
//           title: Text('Sales Meeting'),
//         ),
//          body: SingleChildScrollView(
//         child: Column(
//           children: [
//           Row(
//             mainAxisAlignment: MainAxisAlignment.spaceBetween,
//             children: [
//               const Expanded(
//                 child: Text(
//                   'Meeting Room:',
//                   style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
//                 ),
//               ),
//               Expanded(
//                 child: Container(
//                   decoration: const BoxDecoration(
//                     boxShadow: [
//                       BoxShadow(
//                         color: Color.fromARGB(255, 228, 218, 218),
//                       ),
//                       BoxShadow(
//                         color: Colors.white,
//                         spreadRadius: 40.0,
//                         blurRadius: 90.0,
//                         offset: Offset(3.0, 0),
//                       ),
//                     ],
//                   ),
//                   child: TextFormField(
//                     decoration: InputDecoration(
//                       labelText: 'Capability Demonstration',
//                       labelStyle: const TextStyle(
//                         fontSize: 15,
//                         color: Colors.black,
//                       ),
//                       enabledBorder: OutlineInputBorder(
//                         borderSide: BorderSide(
//                           color: Colors.black.withOpacity(
//                               0.2), // Customize the shadow color here
//                           width: 3.5,
//                           // Customize the shadow width here
//                         ),
//                         borderRadius: BorderRadius.circular(9.0),
//                         // Adjust the border radius as needed
//                       ),
//                       focusedBorder: OutlineInputBorder(
//                         borderSide: const BorderSide(
//                           color: Colors
//                               .black, // Customize the border color for focused state
//                           width: 2.0,
//                           // Customize the border width for focused state
//                         ),
//                         borderRadius: BorderRadius.circular(9.0),
//                         // Adjust the border radius as needed
//                       ),
//                     ),
//                   ),
//                 ),
//               ),
//             ],
//           ),
//           SizedBox(height: 10), // Add spacing between fields
//           Row(
//             children: [
//               Expanded(
//                 child: DropdownButtonFormField<String>(
//                   value: selectedLocation,
//                   onChanged: (newValue) {
//                     setState(() {
//                       selectedLocation = newValue!;
//                     });
//                   },
//                   items: locations.map((location) {
//                     return DropdownMenuItem<String>(
//                       value: location,
//                       child: Text(location),
//                     );
//                   }).toList(),
//                   decoration: InputDecoration(
//                     hintText: 'Select Location', // Set the hint text here
//                     icon: const Text(
//                       'Meeting Location:',
//                       style: TextStyle(
//                         fontWeight: FontWeight.bold,
//                         fontSize: 20,
//                       ),
//                     ),
//                     enabledBorder: OutlineInputBorder(
//                       borderSide: BorderSide(
//                         color: Colors.grey.withOpacity(0.2),
//                         width: 3.5,
//                       ),
//                       borderRadius: BorderRadius.circular(8.0),
//                     ),
//                   ),
//                 ),
//               ),
//             ],
//           ),
//           SizedBox(height: 10),
//           Row(
//             children: [
//               const Text(
//                 'Owner\'s:',
//                 style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
//               ),
//               ElevatedButton(
//                 onPressed: () {
//                   // Add your onPressed logic here
//                 },
//                 style: ElevatedButton.styleFrom(
//                   shape: RoundedRectangleBorder(
//                     borderRadius: BorderRadius.circular(
//                         20.0), // Adjust the value for roundedness
//                     side: const BorderSide(
//                       color: Colors.black,
//                       width: 1.0,
//                     ), // Set the border color and width
//                   ),
//                   primary: Colors.white, // Button background color
//                   onPrimary: Colors.black, // Button text color
//                 ),
//                 child: const Row(
//                   mainAxisSize: MainAxisSize.min,
//                   children: [
//                     Icon(Icons.add),
//                     Text(
//                       'Add  ',
//                       style: TextStyle(fontSize: 20),
//                     ),
//                     //Icon(Icons.add), // Tick mark icon
//                     SizedBox(width: 0), // Space between icon and label
//                   ],
//                 ),
//               ),
//             ],
//           ),
//           Row(
//             children: [
//               const Expanded(
//                 child: Text(
//                   'Due Date: ',
//                   style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
//                 ),
//               ),
//               Expanded(
//                 child: TextFormField(
//                   onTap: () => showDatePicker(
//                           context: context,
//                           initialDate: DateTime.now(),
//                           firstDate: DateTime(2023, 1, 1),
//                           lastDate: DateTime(2024, 1, 1))
//                       .then((value) => dateController.text =
//                           DateFormat('dd/MM/yyyy')
//                               .format(value ?? DateTime.now())
//                               .toString()),
//                   controller: dateController,
//                   decoration: const InputDecoration(
//                       counterStyle: TextStyle(fontSize: 30),
//                       hintText: 'DD/MM/YYYY',
//                       suffixIcon: Icon(Icons.date_range),
//                       contentPadding:
//                           EdgeInsets.symmetric(horizontal: 20, vertical: 0),
//                       border: OutlineInputBorder(
//                           borderSide: BorderSide(
//                               style: BorderStyle.solid,
//                               width: 2,
//                               color: Colors.black))),
//                 ),
//               ),
//             ],
//           ),
//           SizedBox(height: 10),
//           Row(
//             children: [
//               const Expanded(
//                 child: Text(
//                   'Time Duration:',
//                   style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
//                 ),
//               ),
//               Expanded(
//                 child: InkWell(
//                   onTap: () async {
//                     final pickedTime = await showTimePicker(
//                       context: context,
//                       initialTime: selectedStartTime ?? TimeOfDay.now(),
//                     );

//                     if (pickedTime != null) {
//                       setState(() {
//                         selectedStartTime = pickedTime;
//                       });
//                     }
//                   },
//                   child: InputDecorator(
//                     decoration: const InputDecoration(
//                       border: OutlineInputBorder(),
//                     ),
//                     child: Text(
//                       selectedStartTime?.format(context) ?? 'start time',
//                       style: const TextStyle(
//                         fontSize: 18, // Adjust the font size as needed
//                       ),
//                     ),
//                   ),
//                 ),
//               ),
//               Expanded(
//                 child: InkWell(
//                   onTap: () async {
//                     final pickedTime = await showTimePicker(
//                       context: context,
//                       initialTime: selectedEndTime ?? TimeOfDay.now(),
//                     );

//                     if (pickedTime != null) {
//                       setState(() {
//                         selectedEndTime = pickedTime;
//                       });
//                     }
//                   },
//                   child: InputDecorator(
//                     decoration:const InputDecoration(
//                       border: OutlineInputBorder(),
//                     ),
//                     child: Text(
//                       selectedEndTime?.format(context) ?? 'end time',
//                       style:const TextStyle(
//                         fontSize: 18, // Adjust the font size as needed
//                       ),
//                     ),
//                   ),
//                 ),
//               ),
//             ],
//           ),

//           SizedBox(height: 10),
//           const Column(children: [
//             Row(children: [
//               Expanded(
//                 child: Text(
//                   'Key Message: ',
//                   style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
//                 ),
//               ),
//             ]),
//             Row(children: [
//               Expanded(
//                   child: TextField(
//                 decoration: InputDecoration(
//                   border: OutlineInputBorder(),
//                 ),
//                 keyboardType: TextInputType.multiline,
//                 maxLines: null,
//               )),
//             ]),
//           ]),
//           SizedBox(height: 10),
//           Row(
//             children: [
//               const Expanded(
//                 child: Text(
//                   'Room:',
//                   style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
//                 ),
//               ),
//               Expanded(
//                 child: TextFormField(
//                   decoration: const InputDecoration(
//                     border: OutlineInputBorder(),
//                   ),
//                 ),
//               ),
//             ],
//           ),
//           SizedBox(height: 10),
//           Row(
//             children: [
//               const Expanded(
//                 child: Text(
//                   'File URL:',
//                   style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
//                 ),
//               ),
//               Expanded(
//                 flex:
//                     3, // Adjust the flex value to control the width of the TextFormField
//                 child: TextFormField(
//                   decoration: const InputDecoration(
//                     border: OutlineInputBorder(),
//                   ),
//                 ),
//               ),
//               Expanded(
//                 child: Container(
//                   decoration: BoxDecoration(
//                     color: Colors.white, // Button background color
//                     border: Border.all(color: Colors.grey), // Border color
//                     borderRadius: BorderRadius.circular(15), // Border radius
//                     boxShadow: [
//                       BoxShadow(
//                         color: Colors.grey.withOpacity(0.3), // Shadow color
//                         spreadRadius: 3, // Spread radius
//                         blurRadius: 4, // Blur radius
//                         offset: Offset(0, 3), // Shadow offset
//                       ),
//                     ],
//                   ),
//                   child: TextButton(
//                     onPressed: () {},
//                     style: TextButton.styleFrom(
//                       primary: Colors.black, // Button text color
//                     ),
//                     child: const SizedBox(
//                       width: 60, // Adjust the width of the button
//                       //height: 30,
//                       child: Text(
//                         'Copy',
//                         style: TextStyle(color: Colors.black,fontSize: 20),
//                       ),
//                     ),
//                   ),
//                 ),
//               ),
//             ],
//           ),

//           SizedBox(height: 10),
//           Row(
//             mainAxisAlignment: MainAxisAlignment.spaceBetween,
//             children: [
//               const Text(
//                 'Reveiwer(s):',
//                 style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
//               ),
//               ElevatedButton(
//                 onPressed: () {
//                   // Add your onPressed logic here
//                 },
//                 style: ElevatedButton.styleFrom(
//                   shape: RoundedRectangleBorder(
//                     borderRadius: BorderRadius.circular(20.0),
//                     side: const BorderSide(
//                       color: Colors.black,
//                       width: 1.0,
//                     ),
//                   ),
//                   primary: Colors.white,
//                   onPrimary: Colors.black,
//                 ),
//                 child: const Row(
//                   mainAxisSize: MainAxisSize.min,
//                   children: [
//                     Icon(Icons.add),
//                     Text(
//                       'Add  ',
//                       style: TextStyle(fontSize: 20),
//                     ),
//                     SizedBox(width: 0),
//                   ],
//                 ),
//               ),
//               Row(
//                 children: [
//                   Checkbox(
//                     value: reviewDone,
//                     onChanged: (value) {
//                       setState(() {
//                         reviewDone = value!;
//                       });
//                     },
//                   ),
//                   const Text('Review Done?'),
//                 ],
//               ),
//             ],
//           ),
//           Row(
//             mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//             children: [
//               Expanded(
//                 child: TextButton(
//                   onPressed: () {
//                     // Handle "Back" button tap
//                   },
//                   style: TextButton.styleFrom(
//                     backgroundColor: Colors.blue,
//                   ),
//                   child: const Text(
//                     'Back',
//                     style: TextStyle(
//                       fontSize: 20,
//                       color: Colors.white,
//                     ),
//                   ),
//                 ),
//               ),
//               Expanded(
//                 child: TextButton(
//                   onPressed: () {
//                     // Handle "Save" button tap
//                   },
//                   style: TextButton.styleFrom(
//                     backgroundColor: Colors.blue,
//                   ),
//                   child: const Text(
//                     'Save',
//                     style: TextStyle(
//                       fontSize: 20,
//                       color: Colors.white,
//                     ),
//                   ),
//                 ),
//               ),
//             ],
//           ),
//         ])),
//     );
//   }
// }
