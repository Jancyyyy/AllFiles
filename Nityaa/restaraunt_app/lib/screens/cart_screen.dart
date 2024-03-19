import 'package:flutter/material.dart';
import 'package:mama_put/widget/app_bar.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/constants/text_constants.dart';


class CartScreen extends StatelessWidget {
  const CartScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar.appBar('Cart'),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(
              Icons.mood,
              size: 150,
            ),
            SizeConstants.gapHeight(10),
            Card(
              elevation: 10,
              color: ColorConstants.primaryColor,
              child: Container(
                padding: SizeConstants.spacing(10.0, 10.0),
                child: Text(
                  'That\'s all for now.\n Thanks for watching.',
                  textAlign: TextAlign.center,
                  style: TextConstants.extraLargeFont(
                    fontFamily: TextConstants.appTitleFamily,
                    color: ColorConstants.greyColor,
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
