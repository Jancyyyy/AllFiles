import 'package:flutter/material.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/constants/text_constants.dart';
import 'package:mama_put/data_set.dart';

class MealWidget extends StatelessWidget {
  final int? index;
  const MealWidget({Key? key, this.index}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      color: ColorConstants.backgroundColor,
      shadowColor: ColorConstants.primaryColor,
      elevation: 10,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
      child: Column(
        children: [
          SizedBox(
            height: 200,
            width: double.maxFinite,
            child: Image.asset(
              dataSET['meal']![index!]['image'],
              fit: BoxFit.cover,
            ),
          ),
          Container(
            padding: SizeConstants.spacing(10.0, 5.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    SizedBox(
                      width: 150,
                      child: Text(
                        dataSET['meal']![index!]['name'].toString(),
                        overflow: TextOverflow.ellipsis,
                        style: TextConstants.largeFont(
                            color: ColorConstants.secondaryColor),
                      ),
                    ),
                    SizeConstants.gapHeight(3),
                    SizedBox(
                      width: 80,
                      height: 25,
                      child: Chip(
                        padding: SizeConstants.spacing(3.0, 3.0),
                        backgroundColor: ColorConstants.primaryColor,
                        elevation: 2,
                        labelPadding: SizeConstants.spacing(7.0, -3.0),
                        label: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Icon(Icons.star,
                                color: ColorConstants.tertiaryColor, size: 15),
                            Text(
                              '${dataSET['meal']![index!]['rating']}/5.0',
                              style: TextConstants.smallFont(
                                  ColorConstants.backgroundColor),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
                SizeConstants.gapHeight(4),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    RichText(
                        text: TextSpan(
                            text: TextConstants.currency().currencySymbol,
                            style: const TextStyle(
                              color: ColorConstants.primaryColor,
                              fontSize: 22,
                              fontWeight: FontWeight.bold,
                            ),
                            children: [
                          TextSpan(
                              text: '${dataSET['meal']![index!]['price']}.00')
                        ])),
                    const Icon(
                      Icons.favorite,
                      color: ColorConstants.secondaryColor,
                    ),
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
