import 'package:flutter/material.dart';
import 'package:mama_put/data_set.dart';
import 'package:mama_put/screens/home/home_widgets/recommended.dart';
import 'package:mama_put/widget/meals.dart';

class Meals {
  final String name;
  final String image;
  final double rating;
  final String details;
  final double price;
  final Map menu;

  Meals(
      this.name, this.details, this.image, this.menu, this.price, this.rating);

  Meals.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        image = json['image'],
        rating = json['rating'],
        details = json['details'],
        price = json['price'],
        menu = json['menu'];

  Map<String, dynamic> toJson() => {
        'name': name,
        'image': image,
        'rating': rating,
        'details': details,
        'price': price,
        'menu': menu,
      };
}

class MealsList {
  late List<Map<dynamic, dynamic>> mealsList;

  // dynamic meals = Meals.fromJson(mealsList);

  MealsList(this.mealsList);

  MealsList.fromJson(Map<String, dynamic> json) {
    mealsList = json['meal'];
  }
// .values.toList() as List<Map<String, Meals>>
  Map<String, dynamic> toJson() => {'meal': mealsList};
}

// DATA
final mealss = MealsList.fromJson(dataSET);

class RecommendedMeals {
  static List<Widget> meals = [];
  static List<int> indexes = [];

  static recommendedMeals() {
    for (int i = 0; i < dataSET['meal']!.length; i++) {
      if (dataSET['meal']![i]['rating'] >= 4.7) {
        indexes.add(i);
        meals.add(MealWidget(
          index: i,
        ));
      }
    }
  }
}
