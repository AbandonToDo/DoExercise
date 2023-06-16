[Apollo Client](https://www.apollographql.com/docs/react/)

```
git rebase -i HEAD~3

git rebase --edit-todo

git rebase --continue
```

//定义商品Item类
// class Item {
//   double price;
//   String name;
//   Item(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Item {
//   double price;
//   String name;
//   Item(this.name, this.price);
// }

class Item extends Meta {
  Item(name, price): super(name, price);

  Item operator+(Item item) => Item(name + item.name, price + item.price);
}

//定义购物车类
class ShoppingCart extends Meta {
  // String name;
  DateTime date;
  String code;
  List<Item> bookings;

  // double get price {
  //   double sum = 0.0;
  //   for(var i in bookings) {
  //     sum += i.price;
  //   }
  //   return sum;
  // }

  double get price => bookings.reduce((value, element) => value + element).price;

  // ShoppingCart(this.name, this.code): date = DateTime.now();
  ShoppingCart(name, code): date = DateTime.now(), super(name, 0);

  // getInfo() {
  //   return '购物车信息:' +
  //         '\n-----------------------------' +
  //         '\n用户名: ' + name+
  //         '\n优惠码: ' + code +
  //         '\n总价: ' + price().toString() +
  //         '\n日期: ' + date.toString() +
  //         '\n-----------------------------';
  // }

  getInfo () => '''
    购物车信息:
    -----------------------------
      用户名: $name
      优惠码: $code
      总价: $price
      Date: $date
    -----------------------------
    ''';
  
}

class Meta {
  double price;
  String name;
  Meta(this.name, this.price);
}

void main() {
  ShoppingCart sc = ShoppingCart('张三', '123456');
  sc.bookings = [Item('苹果',10.0), Item('鸭梨',20.0)];
  print(sc.getInfo());
}
