import 'package:flutter/material.dart';

class SizeConstants {
  // WIDTH SPACING
  static SizedBox gapWidth(double width) => SizedBox(
        width: width,
      );

  // HEIGHT SPACING
  static SizedBox gapHeight(double height) => SizedBox(
        height: height,
      );

  // MARGIN & PADDING
  static spacing(double horizontal, vertical) =>
      EdgeInsets.symmetric(horizontal: horizontal, vertical: vertical);
}
