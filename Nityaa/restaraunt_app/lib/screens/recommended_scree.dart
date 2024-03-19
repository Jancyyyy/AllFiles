import 'package:flutter/material.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/data_set.dart';
import 'package:mama_put/model.dart';
import 'package:mama_put/navigators.dart';
import 'package:mama_put/screens/home/home_widgets/recommended.dart';
import 'package:mama_put/widget/app_bar.dart';

class RecommendedScreen extends StatelessWidget {
  const RecommendedScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar.appBar('Recommended'),
      body: Padding(
        padding: SizeConstants.spacing(10.0, 15.0),
        child: ListView.builder(
            shrinkWrap: true,
            itemCount: RecommendedMeals.meals.length,
            itemBuilder: (_, counter) {
              return InkWell(
                onTap: () => Navigator.pushNamed(
                    context, Navigators.detailScreen,
                    arguments: {
                      'index': RecommendedMeals.indexes[counter],
                    }),
                child: Container(
                  alignment: Alignment.center,
                  width: 150,
                  margin: SizeConstants.spacing(5.0, 10.0),
                  child: Banner(
                      message: '20% Off',
                      location: BannerLocation.topStart,
                      child: RecommendedMeals.meals[counter]),
                ),
              );
            }),
      ),
    );
  }
}
