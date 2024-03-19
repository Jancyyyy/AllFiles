import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:intl/intl.dart';
import 'package:mama_put/constants/color_constants.dart';

class TextConstants {
  // TEXT STYLES

  // EXTRA LARGE FONTS
  static TextStyle extraLargeFont({String? fontFamily, Color? color}) =>
      TextStyle(
          color: color, fontFamily: fontFamily, fontSize: 25, fontWeight: bold);

  // LARGE FONTS
  static TextStyle largeFont({Color? color}) =>
      TextStyle(color: color, fontSize: 22, fontWeight: bold);

  // MEDIUM FONTS
  static TextStyle mediumFont(Color color) =>
      TextStyle(color: color, fontSize: 18, fontWeight: medium);

  // SMALL FONTS
  static TextStyle smallFont(Color color,
          {String? fontFamily, FontStyle? fontStyle}) =>
      TextStyle(
        color: color,
        fontSize: 15,
        fontWeight: medium,
        fontFamily: fontFamily,
        fontStyle: fontStyle,
      );

  // BADGE TEXT FONTS
  static TextStyle badgeTextFont(Color color) =>
      TextStyle(color: color, fontSize: 10, fontWeight: bold);

  // FONT WEIGHT
  static const FontWeight bold = FontWeight.bold;
  static const FontWeight medium = FontWeight.w800;

  // FONT FAMILY
  static const appTitleFamily = 'Pacifico';
  static const fontFamily = 'Oxygen';

  //CURRENCY
  static currency() {
    var format =
        NumberFormat.simpleCurrency(locale: Platform.localeName, name: 'NGN');
    return format;
  }
}
