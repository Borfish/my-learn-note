**1、html渲染结束的事件**

DOM树渲染完成时触发DOMContentLoaded事件，此时可能外部资源还在加载。

所有的资源全部加载完成会触发window 的 load事件。

---

**2、JS的基本数据类型**

原始类型（即基本数据类型）：undefined、null、number、boolean、string、Symbol；

引用数据类型（对象类型）Object、array、function、data（日期）、RegExp（正则表达式）；

基本数据类型特点：

1、基本数据类型是按值访问的，就是说我们可以操作保存在变量中的实际的值；

2.基本数据类型的值是不可变的，任何方法都无法改变一个基本数据类型的值，比如一个字符串：

```json
  let name = 'zhangsan'
  name.substr()
  console.log(name) // 输出：zhangsan
  let age = 'firstblood'
  age.toUpperCase() //这里返回字符串
  console.log(age) // 输出：firstblood

  let name = "lskdj";
  name = "hello";//这里没改变，只是把name指向了hello
```

3、没法添加属性和方法，添加的那一瞬间会转为object。

4、基本数据类型的赋值是简单的赋值（如果从一个变量向另一个变量赋值基本类型的值，会在变量对象上创建一个新值，然后把该值赋值到位新变量分配的位置上）

数值类型：Number()，parseInt()，parseFloat()，isNaN()。注意：isNaN会对非数值或无法转为数值类型的值返回true。

---

**3、如何判断是否是NaN**

```json
//	1、先判断是不是数字,然后再使用 window.isNaN()
function  judgeNaN (value) {
         return (typeof value) === 'number' && window.isNaN(value);
}

judgeNaN(1)          //false
judgeNaN(NaN)          //true
judgeNaN("我是字符串")          //false
judgeNaN([])          //false
judgeNaN({})          //false

//  2、Number.isNaN(value) ( 1. 首先判断 value 类型是不是 number; 2. 然后判断 value 是不是 NaN)
Number.isNaN(NaN);                      // true
Number.isNaN(Number.NaN);          // true
Number.isNaN(0/0);                          // true

// 下面这些使用 window.isNaN() 将会返回 true ,Number.isNaN() 返回 false,
// 因为 window.isNaN 会先把参数转化为数字类型,再判断是不是 NaN; 而 Number.isNaN 会先判断参数是不是数字类型,不是就返回 
// false, 是数字类型再进入判断是不是 NaN.
Number.isNaN('NaN');                        // false
Number.isNaN(undefined);                  // false
Number.isNaN({});                                // false
Number.isNaN('blabla');                       // false

// 下面这些 window.isNaN() 和 Number.isNaN() 都返回 false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ')
```

---

**4、==与===**

```json
==表示等同，===表示恒等。==只比较内容，而===既比较内容也比较数据类型。
//  ==
100 == "100"            // true
1 == true               // true
null == null            // true
undefined == undefined  // true
null == undefined       // true
0 == undefined          // false undefined不能转为数字
true == "20"            // false
"1" == "01"             // false，此处等号两边值得类型相同，不要再转换类型了！！
NaN == NaN              // false，NaN和所有值包括自己都不相等。

let a = new Number(10);
let b = new Number(11);
console.log(a==b);      // false ==与===都是false，因为引用判断是判断地址

// ===
100 === "100"            // false
1 === true               // false
NaN === NaN              // false
null === undefined       // false
'abc' === "abc"          // true
false === false          // true
null === null            // true
undefined === undefined  // true
```

​	



