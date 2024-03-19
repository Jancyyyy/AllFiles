import 'package:flutter/material.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/text_constants.dart';

class CustomAppBar {
  static appBar(String title) => AppBar(
        centerTitle: true,
        title: Text(
          title,
          style:
              TextConstants.extraLargeFont(color: ColorConstants.primaryColor),
        ),
      );
}
