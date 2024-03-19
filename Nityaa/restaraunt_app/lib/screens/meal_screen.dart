import 'package:flutter/material.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/data_set.dart';
import 'package:mama_put/navigators.dart';
import 'package:mama_put/widget/app_bar.dart';
import 'package:mama_put/widget/meals.dart';

class MealScreen extends StatelessWidget {
  const MealScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final index = ModalRoute.of(context)!.settings.arguments as Map;
    final pageTitle = menuList[index['index']]['name']!;
    return Scaffold(
      appBar: CustomAppBar.appBar(pageTitle),
      body: Padding(
        padding: SizeConstants.spacing(10.0, 10.0),
        child: ListView.builder(
            itemCount: dataSET['meal']!.length,
            itemBuilder: (_, counter) {
              if (dataSET['meal']![counter]['menu']['name'] == pageTitle) {
                return Container(
                  margin: SizeConstants.spacing(0.0, 5.0),
                  child: InkWell(
                    onTap: () => Navigator.pushNamed(
                        context, Navigators.detailScreen,
                        arguments: {
                          'index': counter,
                        }),
                    child: Banner(
                      message: '20% Off',
                      location: BannerLocation.topStart,
                      child: MealWidget(
                        index: counter,
                      ),
                    ),
                  ),
                );
              } else {
                return Container();
              }
            }),
      ),
    );
  }
}
