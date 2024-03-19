import 'package:flutter/material.dart';
import 'package:zennn/food.dart';
import 'package:zennn/odc.dart';
import 'package:zennn/salesmeet.dart';
import 'package:zennn/travel.dart';
import 'package:zennn/transfers.dart';
import 'package:zennn/welcomeceremory.dart';

class TimelinePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TimelineNode(title: '15-08-2023'),
            PlusButton(),
            TimelineNode(title: 'End'),
          ],
        ),
      ),
    );
  }
}

class TimelineNode extends StatelessWidget {
  final String title;

  const TimelineNode({required this.title});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
      child: Text(
        title,
        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
      ),
    );
  }
}

class PlusButton extends StatelessWidget {
  void _openDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        String? selectedValue;

        return StatefulBuilder(
          builder: (BuildContext context, StateSetter setState) {
            return Dialog(
              child: Container(
                padding: EdgeInsets.all(16),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    DropdownButton<String>(
                      value: selectedValue,
                      items: <String>[
                        'Welcome Meeting',
                        'ODC Visit',
                        'Sales Meeting',
                        'Food',
                        'Transfers',
                        'Domestic travel',
                      ].map((String value) {
                        return DropdownMenuItem<String>(
                          value: value,
                          child: Text(value),
                        );
                      }).toList(),
                      onChanged: (String? value) {
                        setState(() {
                          selectedValue = value; 
                        });
                      },
                    ),
                    SizedBox(height: 16),
                    SizedBox(height: 16),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        ElevatedButton(
                          onPressed: () {
                            Navigator.pop(context);
                          },
                          child: Text('Back'),
                        ),
                        ElevatedButton(
                          onPressed: () {
                            if (selectedValue != null) {
                              if(selectedValue=='ODC Visit'){
                                Navigator.of(context).push(MaterialPageRoute(builder:(context) => OdcV(),));
                              }
                              if(selectedValue=='Domestic travel'){
                                Navigator.of(context).push(MaterialPageRoute(builder:(context) => Trans(),));
                              }
                              if(selectedValue=='Transfers'){
                                Navigator.of(context).push(MaterialPageRoute(builder:(context) => Travelv(),));
                              }
                              if(selectedValue=='Welcome Meeting'){
                                Navigator.of(context).push(MaterialPageRoute(builder:(context) => WelcomeCeremony(),));
                              }
                               if(selectedValue=='Sales Meeting'){
                                Navigator.of(context).push(MaterialPageRoute(builder:(context) => SalesM (),));
                              }
                              if(selectedValue=='Food'){
                                Navigator.of(context).push(MaterialPageRoute(builder:(context) => Foodp (),));
                              }
                            }
                          },
                          child: Text('OK'),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _openDialog(context),
      child: Container(
        padding: EdgeInsets.all(16),
        child: Icon(Icons.add, size: 36),
      ),
    );
  }
}
 

