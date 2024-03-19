import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:zennn/main.dart';

class NewVisits extends StatefulWidget {
  const NewVisits({Key? key}) : super(key: key);

  @override
  State<NewVisits> createState() => _NewVisitState();
}

class _NewVisitState extends State<NewVisits> {
  DateTime? _selectedDate;
  String? _selectedObjective;
  List<Map<String, String>> _infoList = [];
  String? _selectedLocation;
  String? _selectedSpoc = null;

  List<String> _visitObjectives = [
    'Annual Visit ',
    'RFP Evaluation',
    'Deal Finalisation',
    'CXO Summit Meeting'
  ];

  Future<void> _selectDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(2023),
      lastDate: DateTime(2025),
    );

    if (picked != null && picked != _selectedDate) {
      setState(() {
        _selectedDate = picked;
      });
    }
  }

  final TextEditingController dayscontroller = TextEditingController();
  int days = 0;

  Future<void> _showAddInfoModal(BuildContext context) async {
    Map<String, String> newInfo = {};
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        final _formKey = GlobalKey<FormState>();

        return AlertDialog(
          title: Text('Enter Customer Information'),
          content: Form(
            key: _formKey,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextFormField(
                  decoration: InputDecoration(labelText: 'Name'),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Name is required';
                    }
                    return null;
                  },
                  onChanged: (value) {
                    newInfo['Name'] = value;
                  },
                ),
                TextFormField(
                  decoration: InputDecoration(labelText: 'Designation'),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Designation is required';
                    }
                    return null;
                  },
                  onChanged: (value) {
                    newInfo['Designation'] = value;
                  },
                ),
                TextFormField(
                  decoration: InputDecoration(labelText: 'Role'),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Role is required';
                    }
                    return null;
                  },
                  onChanged: (value) {
                    newInfo['Role'] = value;
                  },
                ),
                TextFormField(
                  decoration: InputDecoration(labelText: 'LinkedIn URL'),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'LinkedIn URL is required';
                    }
                    return null;
                  },
                  onChanged: (value) {
                    newInfo['LinkedIn'] = value;
                  },
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Cancel'),
            ),
            ElevatedButton(
              onPressed: () {
                if (_formKey.currentState!.validate()) {
                  setState(() {
                    _infoList.add(newInfo);
                  });
                  Navigator.of(context).pop();
                }
              },
              child: Text('Save'),
            ),
          ],
        );
      },
    );
  }

  Future<void> _showLocationDialog(BuildContext context) async {
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return LocationDialog(
          onLocationAdded: (_locations) {},
          setSelectedLocation: (newLocation) {
            setState(() {
              _selectedLocation = newLocation;
            });
          },
        );
      },
    );
  }

  Future<void> _showSpocDialog(BuildContext context) async {
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return SpocDialog(
          onSpocAdded: (_spoc) {},
          setSelectedSpoc: (newSpoc) {
            setState(() {
              _selectedSpoc = newSpoc;
            });
          },
        );
      },
    );
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
            DrawerHeader(
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
              title: Text('Item 1'),
              onTap: () {},
            ),
            ListTile(
              title: Text('Item 2'),
              onTap: () {},
            ),
          ],
        ),
      ),
      body: ListView(
        children: [
          Container(
            padding: EdgeInsets.all(2),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
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
                  children: [
                    Text(
                      'Visit Date',
                      style: TextStyle(fontSize: 18),
                    ),
                    const SizedBox(
                      width: 125,
                    ),
                    Expanded(
                      child: TextFormField(
                        readOnly: true,
                        onTap: () => _selectDate(context),
                        decoration: InputDecoration(
                          suffixIcon: Icon(Icons.calendar_today),
                          border: OutlineInputBorder(),
                        ),
                        controller: TextEditingController(
                          text: _selectedDate != null
                              ? DateFormat('yyyy-MM-dd').format(_selectedDate!)
                              : '',
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 15),
                Row(
                  children: [
                    Text(
                      'Client Name:',
                      style: TextStyle(fontSize: 18),
                    ),
                    const SizedBox(
                      width: 100,
                    ),
                    Expanded(
                        child: TextField(
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                      ),
                    ))
                  ],
                ),
                SizedBox(height: 15),
                Row(
                  children: [
                    Text(
                      'Visit Objective',
                      style: TextStyle(fontSize: 18),
                    ),
                    const SizedBox(
                      width: 90,
                    ),
                    Expanded(
                      child: DropdownButtonFormField<String>(
                        value: _selectedObjective,
                        onChanged: (newValue) {
                          setState(() {
                            _selectedObjective = newValue;
                          });
                        },
                        items: _visitObjectives.map((objective) {
                          return DropdownMenuItem<String>(
                            value: objective,
                            child: Text(objective),
                          );
                        }).toList(),
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  children: [
                    const Text(
                      'Duration(Days):',
                      style: TextStyle(fontSize: 18),
                    ),
                    const SizedBox(
                      width: 130,
                    ),
                    IconButton(
                      onPressed: () {
                        if (days > 0) {
                          setState(() {
                            days = days - 1;
                          });
                        }
                      },
                      icon: Icon(Icons.remove),
                      color: Colors.blue,
                    ),
                    Expanded(
                        child: TextField(
                      keyboardType: TextInputType.number,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.all(Radius.zero),
                        ),
                      ),
                      onChanged: (value) {
                        int currValue = int.parse(value);
                        if (currValue > 0) {
                          if (currValue < 5) {
                            setState(() {
                              days = currValue;
                            });
                          }
                        }
                      },
                    )),
                    IconButton(
                      onPressed: () {
                        if (days < 5) {
                          setState(() {
                            days = days + 1;
                          });
                        }
                      },
                      icon: const Icon(Icons.add),
                      color: Colors.blue,
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                Row(
                  children: [
                    Text(
                      'Loaction(s) of Visit:',
                      style: TextStyle(fontSize: 18),
                    ),
                    const SizedBox(
                      width: 160,
                    ),
                    Expanded(
                      child: ElevatedButton(
                          onPressed: () => _showLocationDialog(context),
                          child: Text('+Add')),
                    ),
                  ],
                ),
                _VisitCard(),
                SizedBox(height: 20),
                Row(
                  children: [
                    Text(
                      'Location SPOCs:',
                      style: TextStyle(fontSize: 18),
                    ),
                    const SizedBox(
                      width: 185,
                    ),
                    Expanded(
                      child: ElevatedButton(
                        onPressed: () => _showSpocDialog(context),
                        child: Text('+Add'),
                      ),
                    ),
                  ],
                ),
                _SpocCard(_selectedSpoc),
                SizedBox(height: 20),
                Row(
                  children: [
                    Text(
                      'Customer Information:',
                      style: TextStyle(fontSize: 18),
                    ),
                    const SizedBox(
                      width: 130,
                    ),
                    ElevatedButton(
                      onPressed: () => _showAddInfoModal(context),
                      child: Text('Add Info'),
                    ),
                    SizedBox(height: 10),
                  ],
                ),
                ..._infoList.map((info) => _buildInfoCard(info)).toList(),
                const SizedBox(
                  height: 10,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) => NewVisits(),
                        ));
                      },
                      style: ElevatedButton.styleFrom(primary: Colors.red),
                      child: Text(
                        'Cancel',
                        style: TextStyle(fontSize: 18),
                      ),
                    ),
                    SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) => HomeScreen(),
                        ));
                      },
                      style: ElevatedButton.styleFrom(
                          primary: Colors.orangeAccent[200]),
                      child: Text(
                        'Save as Draft',
                        style: TextStyle(fontSize: 18),
                      ),
                    ),
                    SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: () {},
                      style: ElevatedButton.styleFrom(primary: Colors.blue),
                      child: Text(
                        'Finalize >>',
                        style: TextStyle(fontSize: 18),
                      ),
                    ),
                  ],
                )
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildInfoCard(Map<String, String> info) {
    return Card(
      elevation: 4,
      shadowColor: Colors.grey,
      child: ListTile(
        title: Text('Name: ${info['Name'] ?? ''}'),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Designation: ${info['Designation'] ?? ''}'),
            Text('Role: ${info['Role'] ?? ''}'),
            Text('LinkedIn URL: ${info['LinkedIn'] ?? ''}'),
          ],
        ),
        trailing: IconButton(
          icon: Icon(Icons.delete),
          onPressed: () {
            setState(() {
              _infoList.remove(info);
            });
          },
        ),
      ),
    );
  }

  Widget _VisitCard() {
    if (_selectedLocation != null) {
      return Card(
        elevation: 4,
        shadowColor: Colors.grey,
        child: ListTile(
          title: Text(_selectedLocation!),
          trailing: IconButton(
            icon: Icon(Icons.delete),
            onPressed: () {
              setState(() {
                _selectedLocation = null;
              });
            },
          ),
        ),
      );
    } else {
      return SizedBox();
    }
  }

  Widget _SpocCard(String? spoc) {
    return spoc != null
        ? Card(
            elevation: 4,
            shadowColor: Colors.grey,
            child: ListTile(
              title: Text(spoc),
              trailing: IconButton(
                icon: Icon(Icons.delete),
                onPressed: () {
                  setState(() {
                    _selectedSpoc = null;
                  });
                },
              ),
            ),
          )
        : SizedBox();
  }
}

class GenericDialog extends StatefulWidget {
  final String title;
  final List<String> items;
  final Function(String) onItemSelected;
  final Function(String?) setSelectedItem;

  const GenericDialog({
    Key? key,
    required this.title,
    required this.items,
    required this.onItemSelected,
    required this.setSelectedItem,
  }) : super(key: key);

  @override
  _GenericDialogState createState() => _GenericDialogState();
}

class _GenericDialogState extends State<GenericDialog> {
  String? selectedDropdownValue;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(widget.title),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          SizedBox(height: 16),
          DropdownButton<String>(
            value: selectedDropdownValue,
            onChanged: (newValue) {
              setState(() {
                selectedDropdownValue = newValue;
              });
            },
            hint: Text('Select'),
            items: widget.items.map<DropdownMenuItem<String>>((String value) {
              return DropdownMenuItem<String>(
                value: value,
                child: Text(value),
              );
            }).toList(),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          child: Text('Back'),
        ),
        ElevatedButton(
          onPressed: () {
            if (selectedDropdownValue != null) {
              widget.setSelectedItem(selectedDropdownValue!);
            }
            Navigator.of(context).pop();
          },
          child: Text('Add'),
        ),
      ],
    );
  }
}

class LocationDialog extends StatefulWidget {
  final Function(String) onLocationAdded;
  final Function(String?) setSelectedLocation;

  const LocationDialog({
    Key? key,
    required this.onLocationAdded,
    required this.setSelectedLocation,
  }) : super(key: key);
  @override
  _LocationDialogState createState() => _LocationDialogState();
}

class _LocationDialogState extends State<LocationDialog> {
  @override
  Widget build(BuildContext context) {
    return GenericDialog(
      title: 'Select a Location',
      items: ['Pune', 'Hyderabad', 'Bangalore'],
      onItemSelected: widget.onLocationAdded,
      setSelectedItem: widget.setSelectedLocation,
    );
  }
}

class SpocDialog extends StatefulWidget {
  final Function(String) onSpocAdded;
  final Function(String?) setSelectedSpoc;

  const SpocDialog(
      {Key? key, required this.onSpocAdded, required this.setSelectedSpoc})
      : super(key: key);

  @override
  _SpocDialogState createState() => _SpocDialogState();
}

class _SpocDialogState extends State<SpocDialog> {
  @override
  Widget build(BuildContext context) {
    return GenericDialog(
      title: 'Enter Location SPOC',
      items: [
        'Raghunanda Palle',
        'Bhanushri Sharma',
        'Anuradha VH',
        'Dharan Daram  '
      ],
      onItemSelected: widget.onSpocAdded,
      setSelectedItem: widget.setSelectedSpoc,
    );
  }
}
