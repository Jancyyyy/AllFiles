import 'package:flutter/material.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/constants/text_constants.dart';
import 'package:mama_put/data_set.dart';

class RecommendedWidget extends StatelessWidget {
  final int? index;
  const RecommendedWidget({Key? key, this.index}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned(
            bottom: 0,
            child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(15.0),
                color: ColorConstants.whiteColor,
                boxShadow: const [
                  BoxShadow(
                    color: ColorConstants.primaryColor,
                    offset: Offset(0.0, 2.0), //(x,y)
                    blurRadius: 7.0,
                  ),
                ],
              ),
              // margin: SizeConstants.spacing(7.5, 3.0),
              padding: SizeConstants.spacing(10.0, 10.0),
              height: 170,
              width: 190,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.end,
                mainAxisSize: MainAxisSize.min,
                children: [
                  SizedBox(
                    width: 100,
                    height: 30,
                    child: Chip(
                      padding: SizeConstants.spacing(5.0, 5.0),
                      backgroundColor: ColorConstants.secondaryColor,
                      elevation: 2,
                      label: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Icon(Icons.star,
                              color: ColorConstants.tertiaryColor, size: 20),
                          Text(
                            '${dataSET['meal']![index!]['rating']}/5.0',
                            style: TextConstants.mediumFont(
                                ColorConstants.backgroundColor),
                          ),
                        ],
                      ),
                    ),
                  ),
                  SizeConstants.gapHeight(3),
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
            )),
        Positioned(
            top: 10,
            left: 40,
            child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(63.0),
                boxShadow: const [
                  BoxShadow(
                    color: ColorConstants.primaryColor,
                    offset: Offset(0.0, 2.0), //(x,y)
                    blurRadius: 7.0,
                  ),
                ],
              ),
              height: 110,
              width: 110,
              child: ClipOval(
                  child: Image.asset(
                dataSET['meal']![index!]['image'],
                fit: BoxFit.cover,
              )),
            )),
      ],
    );
  }
}
