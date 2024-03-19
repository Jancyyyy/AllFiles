import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/text_constants.dart';
import 'package:mama_put/model.dart';
import 'package:mama_put/navigators.dart';
import 'package:mama_put/screens/cart_screen.dart';
import 'package:mama_put/screens/detail_screen.dart';
import 'package:mama_put/screens/home/home.dart';
import 'package:mama_put/screens/meal_screen.dart';
import 'package:mama_put/screens/menu_screen.dart';
import 'package:mama_put/screens/recommended_scree.dart';

void main() {
  runApp(const ProviderScope(child: MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
      statusBarColor: ColorConstants.backgroundColor,
    ));
    RecommendedMeals.recommendedMeals();

    return MaterialApp(
      title: 'Mama Put',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          appBarTheme: const AppBarTheme(
              iconTheme: IconThemeData(color: ColorConstants.primaryColor),
              backgroundColor: ColorConstants.backgroundColor,
              elevation: 0.5),
          scaffoldBackgroundColor: ColorConstants.backgroundColor,
          primaryColor: ColorConstants.primaryColor,
          fontFamily: TextConstants.fontFamily),
      home: const HomeScreen(),
      routes: {
        Navigators.menuScreen: (context) => const MenuScreen(),
        Navigators.recommendedScreen: (context) => const RecommendedScreen(),
        Navigators.mealScreen: (context) => const MealScreen(),
        Navigators.detailScreen: (context) => const MealDetailScreen(),
        Navigators.cartScreen: (context) => const CartScreen(),
      },
    );
  }
}
