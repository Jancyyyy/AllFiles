import 'dart:async';
import 'dart:io';
// import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

// import 'package:resto_app/constants/size_constants.dart';
// import 'package:resto_app/constants/text_constants.dart';
// import 'package:resto_app/data_set.dart';
// import 'package:resto_app/navigators.dart';
// import 'package:resto_app/screens/home/home.dart';
// import 'package:resto_app/screens/home/home_widgets/menu_card.dart';
// import 'package:resto_app/state_manager/cart.dart';
// import 'package:resto_app/state_manager/product_qty.dart';
import 'package:intl/intl.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/constants/text_constants.dart';
import 'package:mama_put/data_set.dart';
import 'package:mama_put/navigators.dart';
import 'package:mama_put/screens/home/home_widgets/menu_card.dart';
import 'package:mama_put/state_manager/cart.dart';
import 'package:mama_put/state_manager/product_qty.dart';

class MealDetailScreen extends StatefulWidget {
  const MealDetailScreen({Key? key}) : super(key: key);

  @override
  State<MealDetailScreen> createState() => _MealDetailScreenState();
}

class _MealDetailScreenState extends State<MealDetailScreen> {
  double _height = 20;
  double _width = 20;

  @override
  void initState() {
    super.initState();
    Timer(const Duration(milliseconds: 500), () {
      setState(() {
        _height = 310;
        _width = 270;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final index = ModalRoute.of(context)!.settings.arguments as Map;

    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
                height: 350,
                child: Stack(
                  children: [
                    Container(
                      alignment: Alignment.topRight,
                      child: AnimatedContainer(
                        decoration: BoxDecoration(
                            color:
                                ColorConstants.secondaryColor.withOpacity(0.7),
                            borderRadius: const BorderRadius.only(
                                bottomLeft: Radius.circular(250))),
                        duration: const Duration(seconds: 1),
                        curve: Curves.linear,
                        height: _height,
                        width: _width,
                      ),
                    ),
                    Positioned(
                      top: 65,
                      left: 40,
                      right: 40,
                      child: Container(
                        // duration: const Duration(seconds: 1),
                        height: 270,
                        width: 270,
                        decoration: BoxDecoration(
                          boxShadow: const [
                            BoxShadow(
                              color: ColorConstants.primaryColor,
                              offset: Offset(0.0, 3.0),
                              blurRadius: 6.0,
                            ),
                          ],
                          color: ColorConstants.secondaryColor,
                          border: Border.all(
                              color: ColorConstants.secondaryColor, width: 3),
                          borderRadius: BorderRadius.circular(200),
                        ),
                        child: ClipOval(
                          child: Image.asset(
                            dataSET['meal']![index['index']]['image'],
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    ),
                    Positioned(
                        top: 50,
                        child: Container(
                          width: 340,
                          margin: SizeConstants.spacing(10.0, 0.0),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: const [
                              Icon(
                                Icons.arrow_back,
                                color: ColorConstants.primaryColor,
                                size: 30,
                              ),
                              Icon(
                                Icons.more_vert,
                                color: ColorConstants.primaryColor,
                                size: 30,
                              )
                            ],
                          ),
                        ))
                  ],
                )),
            Container(
              margin: SizeConstants.spacing(10.0, 2.0),
              child: Chip(
                label: Text(
                  dataSET['meal']![index['index']]['menu']['name'],
                  style: TextConstants.smallFont(ColorConstants.primaryColor),
                ),
                backgroundColor: ColorConstants.tertiaryColor,
              ),
            ),
            SizeConstants.gapHeight(3),
            Container(
                margin: SizeConstants.spacing(10.0, 4.0),
                child: Text(
                  dataSET['meal']![index['index']]['name'],
                  style: TextConstants.extraLargeFont(
                      color: ColorConstants.primaryColor),
                )),
            SizeConstants.gapHeight(4),
            Container(
              margin: SizeConstants.spacing(10.0, 1.0),
              child: Row(
                children: [
                  RatingBar.builder(
                    initialRating: dataSET['meal']![index['index']]['rating'],
                    glow: true,
                    itemSize: 17,
                    minRating: 1,
                    direction: Axis.horizontal,
                    allowHalfRating: true,
                    itemCount: 5,
                    // itemPadding: EdgeInsets.symmetric(horizontal: 0.0),
                    itemBuilder: (context, _) => const Icon(
                      Icons.star,
                      color: Colors.amber,
                    ),
                    onRatingUpdate: (rating) => print(rating),
                  ),
                  SizeConstants.gapWidth(5.0),
                  Text(
                    '${dataSET['meal']![index['index']]['rating']}/5.0',
                    style: TextConstants.smallFont(ColorConstants.primaryColor),
                  ),
                ],
              ),
            ),
            SizeConstants.gapHeight(15),
            Container(
              margin: SizeConstants.spacing(10.0, 1.0),
              child: Text(
                'Description',
                style: TextConstants.mediumFont(ColorConstants.primaryColor),
              ),
            ),
            SizeConstants.gapHeight(5),
            Container(
              margin: SizeConstants.spacing(10.0, 1.0),
              child: Text(
                '${dataSET['meal']![index['index']]['detail']}',
                style: TextConstants.smallFont(ColorConstants.greyColor),
                textAlign: TextAlign.justify,
              ),
            ),
            SizeConstants.gapHeight(15),
            Container(
              margin: SizeConstants.spacing(10.0, 1.0),
              child: Consumer(builder: (context, ref, _) {
                final quatity = ref.watch(changeProductQuantity);
                final toggleQty = ref.read(changeProductQuantity);
                return Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(
                      width: 80,
                      height: 32,
                      decoration: BoxDecoration(
                          border: Border.all(
                              width: 1, color: ColorConstants.greyColor),
                          borderRadius: BorderRadius.circular(10)),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          InkWell(
                            onTap: () => toggleQty.decreaseQuantity(ref),
                            child: const Icon(
                              Icons.remove,
                              size: 20,
                            ),
                          ),
                          Text(
                            quatity.productQuantity.toString(),
                            style: TextConstants.mediumFont(
                                ColorConstants.primaryColor),
                          ),
                          InkWell(
                            onTap: () => toggleQty.increaseQuantity(ref),
                            child: const Icon(
                              Icons.add,
                              size: 20,
                            ),
                          ),
                        ],
                      ),
                    ),
                    RichText(
                        text: TextSpan(
                            text: TextConstants.currency().currencySymbol,
                            style: const TextStyle(
                              color: ColorConstants.secondaryColor,
                              fontSize: 22,
                              fontWeight: FontWeight.bold,
                            ),
                            children: [
                          TextSpan(
                              text:
                                  '${dataSET['meal']![index['index']]['price'] * quatity.productQuantity}.00')
                        ])),
                  ],
                );
              }),
            ),
            SizeConstants.gapHeight(20),
            Container(
              margin: SizeConstants.spacing(10.0, 1.0),
              child: Text(
                'Check Complements',
                style: TextConstants.mediumFont(ColorConstants.primaryColor),
              ),
            ),
            SizeConstants.gapHeight(10),
            SizedBox(
              height: 180,
              child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  shrinkWrap: true,
                  itemCount: menuList.length,
                  itemBuilder: (_, index) => InkWell(
                        onTap: () => Navigator.pushNamed(
                            context, Navigators.mealScreen,
                            arguments: {'index': index}),
                        child: MenuCard(
                          index: index,
                        ),
                      )),
            ),
            SizeConstants.gapHeight(20),
            Container(
              margin: SizeConstants.spacing(10.0, 1.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  SizedBox(
                    width: 280,
                    height: 52,
                    child: Consumer(builder: (context, ref, _) {
                      return ElevatedButton(
                        onPressed: () {
                          ref.read(cartItemProvider).increaseItemQuantity(ref);
                          ref.watch(changeProductQuantity).setProductQuantity();
                          Navigator.pushNamed(context, Navigators.homeScreen);
                        },
                        child: Text(
                          'Add to cart',
                          style: TextConstants.smallFont(
                              ColorConstants.whiteColor),
                        ),
                        style: ButtonStyle(
                            backgroundColor: MaterialStateProperty.all(
                                ColorConstants.primaryColor),
                            shape: MaterialStateProperty.all(
                                RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20),
                            ))),
                      );
                    }),
                  ),
                  const Icon(
                    Icons.call,
                    size: 27,
                  )
                ],
              ),
            ),
            SizeConstants.gapHeight(20),
          ],
        ),
      ),
    );
  }
}
