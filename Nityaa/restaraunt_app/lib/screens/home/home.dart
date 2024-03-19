import 'dart:developer';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/image_constants.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/constants/text_constants.dart';
import 'package:badges/badges.dart';
import 'package:mama_put/data_set.dart';
import 'package:mama_put/model.dart';
import 'package:mama_put/navigators.dart';
import 'package:mama_put/screens/home/home_widgets/banner.dart';
import 'package:mama_put/screens/home/home_widgets/menu_card.dart';
import 'package:mama_put/screens/home/home_widgets/recommended.dart';
import 'package:mama_put/state_manager/cart.dart';
import 'package:badges/badges.dart' as badges;

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: RichText(
            text: const TextSpan(children: [
          TextSpan(
              text: 'Mama',
              style: TextStyle(
                  color: ColorConstants.primaryColor,
                  fontWeight: FontWeight.bold,
                  fontFamily: TextConstants.appTitleFamily,
                  fontSize: 20)),
          TextSpan(
              text: 'Put',
              style: TextStyle(
                  color: ColorConstants.secondaryColor,
                  fontWeight: FontWeight.bold,
                  fontFamily: TextConstants.appTitleFamily,
                  fontSize: 17)),
        ])),
        actions: [
          InkWell(
            onTap: () => Navigator.pushNamed(context, Navigators.cartScreen),
            child: badges.Badge(
              position: BadgePosition.topEnd(top: 6, end: -3),
              // alignment: Alignment.center,
              // badgeColor: ColorConstants.primaryColor,
              badgeContent: Consumer(builder: (context, ref, _) {
                final cartItemQuantity =
                    ref.read(cartItemProvider).cartItemQuantity;
                return Text(
                  cartItemQuantity.toString(),
                  style: TextConstants.badgeTextFont(
                      ColorConstants.backgroundColor),
                );
              }),
              child: const Icon(
                Icons.notifications,
                color: ColorConstants.secondaryColor,
                size: 25,
              ),
            ),
          ),
          SizeConstants.gapWidth(12)
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
            padding: SizeConstants.spacing(0.0, 10.0),
            child: Center(
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CarouselSlider.builder(
                        itemCount: 3,
                        itemBuilder: (_, index, __) {
                          return BannerWidget(index);
                        },
                        options: CarouselOptions(
                          aspectRatio: 7 / 8,
                          autoPlayInterval: const Duration(seconds: 3),
                          autoPlay: true,
                        )),
                    SizeConstants.gapHeight(25),
                    Container(
                      margin: SizeConstants.spacing(15.0, 0.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Menu',
                            style: TextConstants.largeFont(),
                          ),
                          InkWell(
                            onTap: () => Navigator.pushNamed(
                                context, Navigators.menuScreen),
                            child: Card(
                              color: ColorConstants.tertiaryColor,
                              elevation: 2,
                              child: Container(
                                alignment: Alignment.center,
                                width: 70,
                                height: 23,
                                child: Text(
                                  'See all',
                                  style: TextConstants.smallFont(
                                      ColorConstants.primaryColor,
                                      fontStyle: FontStyle.italic),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizeConstants.gapHeight(2),
                    Container(
                      margin: SizeConstants.spacing(10.0, 5.0),
                      height: 180,
                      // color: ColorConstants.primaryColor,
                      child: ListView.builder(
                          scrollDirection: Axis.horizontal,
                          shrinkWrap: true,
                          itemCount: 4,
                          itemBuilder: (_, index) {
                            return InkWell(
                              onTap: () => Navigator.pushNamed(
                                  context, Navigators.mealScreen,
                                  arguments: {'index': index}),
                              child: MenuCard(
                                index: index,
                              ),
                            );
                          }),
                    ),
                    SizeConstants.gapHeight(20),
                    Container(
                      margin: SizeConstants.spacing(15.0, 0.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Recommended',
                            style: TextConstants.largeFont(),
                          ),
                          InkWell(
                            onTap: () => Navigator.pushNamed(
                                context, Navigators.recommendedScreen),
                            child: Card(
                              color: ColorConstants.tertiaryColor,
                              elevation: 2,
                              child: Container(
                                alignment: Alignment.center,
                                width: 70,
                                height: 23,
                                child: Text(
                                  'See all',
                                  style: TextConstants.smallFont(
                                      ColorConstants.primaryColor,
                                      fontStyle: FontStyle.italic),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizeConstants.gapHeight(2),
                    Container(
                      margin: SizeConstants.spacing(5.0, 5.0),
                      height: 245,
                      child: ListView.builder(
                          scrollDirection: Axis.horizontal,
                          shrinkWrap: true,
                          itemCount: 20,
                          itemBuilder: (_, index) {
                            // Map<String, dynamic> meal =
                            //     mealss.mealsList[index] as Map<String, dynamic>;
                            // Meals meals = Meals.fromJson(meal);
                            if (dataSET['meal']![index]['rating'] >= 4.7) {
                              return InkWell(
                                onTap: () => Navigator.pushNamed(
                                    context, Navigators.detailScreen,
                                    arguments: {'index': index}),
                                child: Container(
                                    alignment: Alignment.center,
                                    width: 200,
                                    margin: SizeConstants.spacing(7.0, 5.0),
                                    child: Banner(
                                      message: '20% Off',
                                      location: BannerLocation.topStart,
                                      child: RecommendedWidget(
                                        index: index,
                                      ),
                                    )),
                              );
                            } else {
                              return Container();
                            }
                          }),
                    ),
                  ]),
            )),
      ),
    );
  }
}
