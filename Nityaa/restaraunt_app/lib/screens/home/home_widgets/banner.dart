import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mama_put/constants/color_constants.dart';
import 'package:mama_put/constants/image_constants.dart';
import 'package:mama_put/constants/size_constants.dart';
import 'package:mama_put/constants/text_constants.dart';

class BannerWidget extends StatelessWidget {
  final int index;
  BannerWidget(
    this.index, {
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: SizeConstants.spacing(6.0, 0.0),
      child: Banner(
        message: '20% Off',
        location: BannerLocation.bottomStart,
        child: Card(
          elevation: 10,
          color: _colors[index],
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          child: Column(
            children: [
              SizeConstants.gapHeight(20),
              Row(
                children: [
                  SizeConstants.gapWidth(15),
                  Text(
                    'Welcome Adedoyin, ',
                    style: TextConstants.extraLargeFont(
                      fontFamily: TextConstants.appTitleFamily,
                    ),
                  ),
                  const Icon(FontAwesomeIcons.handPeace)
                ],
              ),
              Container(
                width: 270,
                margin: SizeConstants.spacing(10.0, 10.0),
                child: Text(
                  _message[index]!,
                  textAlign: TextAlign.center,
                  style: TextConstants.smallFont(ColorConstants.primaryColor),
                ),
              ),
              Image.asset(
                _images[index]!,
                fit: BoxFit.cover,
                height: 250,
                width: 250,
              ),
              SizeConstants.gapHeight(10),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List.generate(
                    3,
                    (index) => Container(
                          margin: SizeConstants.spacing(5.0, 0.0),
                          child: ClipOval(
                              child: Container(
                            width: 10,
                            height: 10,
                            color: ColorConstants.primaryColor,
                          )),
                        )),
              )
            ],
          ),
        ),
      ),
    );
  }

  static const _colors = {
    0: ColorConstants.tertiaryColor,
    1: ColorConstants.secondaryColor,
    2: ColorConstants.backgroundColor
  };

  static const _images = {
    0: ImageConstants.mealImages + 'banner1.png',
    1: ImageConstants.mealImages + 'banner2.png',
    2: ImageConstants.mealImages + 'banner3.png',
  };

  static const _message = {
    0: 'At Mamaput, we got your breakfast, launch and dinner readily available for you.',
    1: 'Fill your belly with nutritious and well cooked meal from quality and well experienced chef.',
    2: 'Quick delivery to anywhere in Lagos.',
  };
}
