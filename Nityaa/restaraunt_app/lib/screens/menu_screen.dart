import 'package:flutter/material.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/constants/text_constants.dart';
import 'package:mama_put/data_set.dart';
import 'package:mama_put/navigators.dart';
import 'package:mama_put/screens/home/home_widgets/menu_card.dart';
import 'package:mama_put/widget/app_bar.dart';

class MenuScreen extends StatelessWidget {
  const MenuScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar.appBar('Menu'),
      body: Padding(
        padding: SizeConstants.spacing(
          7.0,
          10.0,
        ),
        child: GridView.builder(
            itemCount: menuList.length,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 7 / 7.3,
                crossAxisSpacing: 2,
                mainAxisSpacing: 12),
            itemBuilder: (_, index) {
              return InkWell(
                onTap: () => Navigator.pushNamed(context, Navigators.mealScreen,
                    arguments: {'index': index}),
                child: MenuCard(
                  index: index,
                ),
              );
            }),
      ),
    );
  }
}
