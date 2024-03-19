import 'package:flutter/cupertino.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class CartManager extends ChangeNotifier {
  int _cartItemQuantity = 0;

  int get cartItemQuantity => _cartItemQuantity;

  _increaseItemQuantity() {
    _cartItemQuantity++;
    notifyListeners();
  }

  _decreaseItemQuantity() {
    _cartItemQuantity == 0 ? _cartItemQuantity : _cartItemQuantity--;
    notifyListeners();
  }

  increaseItemQuantity(WidgetRef ref) =>
      ref.read(cartItemProvider)._increaseItemQuantity();

  decreaseItemQuantity(WidgetRef ref) =>
      ref.watch(cartItemProvider)._decreaseItemQuantity();
}

final cartItemProvider = ChangeNotifierProvider((ref) => CartManager());
