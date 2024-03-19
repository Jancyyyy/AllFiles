import 'package:flutter/material.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/constants/text_constants.dart';
import 'package:mama_put/data_set.dart';

class MenuCard extends StatelessWidget {
  final int? index;
  const MenuCard({Key? key, this.index}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: SizeConstants.spacing(7.5, 3.0),
      width: 135,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15.0),
        color: ColorConstants.whiteColor,
        boxShadow: const [
          BoxShadow(
            color: ColorConstants.primaryColor,
            offset: Offset(0.0, 2.0), //(x,y)
            blurRadius: 6.0,
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(10.0),
        child: Column(
          children: [
            SizedBox(
              height: 125,
              child: Image.asset(
                menuList[index!]['image']!,
                fit: BoxFit.cover,
              ),
            ),
            SizeConstants.gapHeight(12),
            Text(
              menuList[index!]['name']!,
              style: TextConstants.mediumFont(ColorConstants.secondaryColor),
            )
          ],
        ),
      ),
    );
  }
}
