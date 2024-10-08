# 基本介绍

Sass 是一个 Css 预处理器

> Css预处理器是一种专门的编程语言，编写web样式，然后再通过编译成正常的Css文件



**SCSS** (Sassy CSS)，一款css预处理语言，SCSS 是 Sass 3 引入新的语法，其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。



Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承、内置函数等等特性。



Sass 文件后缀为 **.scss**。

# 安装

1. 安装

```bash
npm install -g sass
```

2. 在项目上使用(webstrom 直接创建scss文件，点击监听即可)
   ![image-20240923154633268](http://tuchuang.yedouc.top/img/202409231546538.png)

# 嵌套规则

## 选择器嵌套

Sass 嵌套 CSS 选择器类似于 HTML 的嵌套规则。

```css
nav {
  background-color: red;

  ul {
    list-style: none;
    display: flex;

    li {
      padding: 20px;
      border-right: 1px solid black;

      a {
        color: white;

        :hover {
          color: blue;
        }
      }
    }
  }
}
```

会被解析为

```css
nav {
  background-color: red;
}
nav ul {
  list-style: none;
  display: flex;
}
nav ul li {
  padding: 20px;
  border-right: 1px solid black;
}
nav ul li a {
  color: white;
}
nav ul li a :hover {
  color: blue;
}

/*# sourceMappingURL=index.css.map */

```

## 父选择器&

`&`符号用于引用当前选择器，适用于伪类、伪元素、修饰符等场景。

```css
.nav {
  background-color: blue;

  & ul {
    list-style-type: circle;
    display: flex;

    & .item {
      padding: 30px;
      border: 1px solid black;

      & a {
        color: white;

        &:hover {
          color: blue;
        }

      }
    }
  }
  // .nav-bg
  &-bg {
    height: 200px;
    width: 200px;
    background-color: red;
  }
}

```

会被解释为

```css
.nav {
  background-color: blue;
}
.nav ul {
  list-style-type: circle;
  display: flex;
}
.nav ul .item {
  padding: 30px;
  border: 1px solid black;
}
.nav ul .item a {
  color: white;
}
.nav ul .item a:hover {
  color: blue;
}
.nav-bg {
  height: 200px;
  width: 200px;
  background-color: red;
}
```

## 属性嵌套

属性嵌套的语法是在具有相同前缀的CSS属性中使用嵌套的方式，将相同的前缀写一次，而后续的子属性嵌套在其内部

```css
// 属性嵌套
.box {
  height: 200px;
  width: 200px;
  border: {
    color: red;
    width: 1px;
    style: solid;
  }
}
```



转换为

```css
.box {
  height: 200px;
  width: 200px;
  border-color: red;
  border-width: 1px;
  border-style: solid;
}
```



## 占位选择器

**占位选择器**和**继承**是两种非常强大的功能，能够帮助你优化和组织CSS代码(相当于是写好样式，想用的话直接继承)

1. 占位选择器是以百分号 (`%`) 开头的选择器
2. `@extend`继承另一个选择器的样式

```css
%box-style {
  height: 500px;
  width: 500px;
  border: 1px solid black;
  background-color: pink;
  font: {
    size: 16px;
    font-family: Arial, sans-serif;
    weight: bold;
  }
}

.parent {
  @extend %box-style;

  .child {
    @extend %box-style;
    height: 100px;
    width: 100px;
    background-color: purple;
  }
}


```



转换为

```css
.parent .child, .parent {
  height: 500px;
  width: 500px;
  border: 1px solid black;
  background-color: pink;
  font-size: 16px;
  font-font-family: Arial, sans-serif;
  font-weight: bold;
}

.parent .child {
  height: 100px;
  width: 100px;
  background-color: purple;
}
```

# 注释

SCSS支持两种类型的注释：**单行注释**和**多行注释**，

1. 以 `//` 开头的注释为单行注释。 不会出现在编译后的CSS文件中
2. 以 `/* */` 包围的注释为多行注释。  这些注释会出现在编译后的CSS文件中



```scss
/* 多行注释*/
.box {
  height: 100px;
  width: 100px;
}
// 单行注释
.box2{

}
```

转换成

```css
@charset "UTF-8";
/* 多行注释*/
.box {
  height: 100px;
  width: 100px;
}

```







# 变量

通过 `$` 符号来定义的。你可以为任何CSS属性定义变量，比如颜色、字体大小、间距等。

## 基本使用

```scss
$color-primary: #333;
$color-secondary: #666;
$color-tertiary: #999;
.box {
  color: $color-primary;
}
```

## 变量的作用域

SCSS中的变量有**全局作用域**和**局部作用域**。变量默认是全局的，可以在整个SCSS文件中使用

如果变量在某个选择器或代码块内定义，它将具有局部作用域，只在该代码块内有效。

```scss
// 变量作用域
// 全局变量
$global-size: 15px;
.root {
  // 全局变量
  $global-color: red !global;
  // 局部变量
  $inner-color: blue;
  font-size: $global-size;
}

.box2 {
  color: $global-color;
  line-height: $global-size;
}

```

变换为

```css
.box {
  color: #333;
}

.root {
  font-size: 15px;
}

.box2 {
  color: red;
  line-height: 15px;
}

/*# sourceMappingURL=3-%E5%8F%98%E9%87%8F.css.map */

```

## 变量类型

SCSS 支持多种数据类型，帮助开发者编写更加灵活、可复用的样式代码：

1. **数字**：支持带单位的数值和运算。
2. **字符串**：用于存储类名、字体等。
3. **颜色**：支持多种颜色格式和颜色操作函数。
4. **布尔值**：适合条件判断。
5. **列表**：用于存储一组值，类似数组。
6. **映射**：用于存储键值对，类似字典。
7. **null**：表示变量没有值，可用于逻辑控制。

```scss
// region 变量类型
$font-size: 15;
$font-color: "red";
$bg-color: #333;
$border-mode: false;
$font-stack: 'Helvetica', 'Arial', sans-serif;
$color-map: (
        primary: #3498db,
        secondary: #2ecc71,
        danger: #e74c3c
);
$border-color: null;

.box3 {
  @if ($border-mode) {
    border-color: $font-color;
  } @else {
    border-color: $bg-color;
  }
  font-size: $font-size;
  color: $font-color;
  font-family: $font-stack;
  background-color: $bg-color;
  border: 1px solid $border-color;

  :hover {
    background-color: map-get($color-map, primary);
  }
}

```

转换为

```css
.box3 {
  border-color: #333;
  font-size: 15;
  color: "red";
  font-family: "Helvetica", "Arial", sans-serif;
  background-color: #333;
  border: 1px solid;
}
.box3 :hover {
  background-color: #3498db;
}
```

## 变量默认值

**变量默认值**通过 `!default` 标志来实现。这允许你在变量未定义时给它一个默认值。如果变量已经定义，`!default` 标志会跳过赋值操作，保留已有的变量值。

```scss
$my-color: #333 !default;
.box4 {
  color: $my-color;
}
```

# 导入功能

**导入功能**通过 `@import` 规则实现，允许你将多个 SCSS 文件组合在一起。这使得项目的样式文件可以更加模块化和易于维护。



```scss
// 自动忽略前缀
@import "public";
// 可以导入css文件
@import "4-导入.css";
// 导入的代码不要被编译成css文件
@import "demo";

.box {
  background-color: $bg-color;
}

.box2 {
  color: $font-color;
}

.box3 {
  // 内部导入
  @import "public";
  font-size: $bg-color;
}

```



# 混入

SCSS 混入 (Mixin) 是一个强大的功能，允许你定义一组可以在多个地方重复使用的样式片段。

1. 定义混入 (Mixin) 使用 `@mixin` 关键字。
2. 调用混入 (Mixin) 使用 `@include` 关键字。



```scss
// 混入的基本使用
@mixin block {
  display: block;
  height: 100px;
  width: 100px;
  background: red;
}

.root {
  // 两个都可以
  @include block();
  @include block
}


// 混入类名的使用
@mixin my-mixin {
  .word-text {
    font-size: 15px;
    font-weight: 600;
    color: #2ecc71;
  }
}

.root {
  @include my-mixin()
}


// 混入参数的使用
@mixin my-flex($item) {
  display: flex;
  justify-content: $item;
  align-content: $item;
}

.root {
  @include my-flex(center)
}

// 混入参数的值 和参数默认值
@mixin my-position($top: 0,$right: 0,$bottom: 0,$left: 0) {
  padding-left: $left;
  padding-right: $right;
  padding-top: $top;
  padding-bottom: $bottom;
}

.root {
  // 普通
  //@include my-flex(10px, 20px 30px, 40px);
  // 指定参数
  //@include my-position($left: 10px, $right: 0px, $bottom: 20px, $top: 0px)

  @include my-position($left: 10px)
}


// 动态参数的使用
@mixin my-gradient($direction,  $gradient-color, $start-position...) {
  // 获取第一个参数
  background-color: nth($gradient-color, 1);
  background-image: linear-gradient($direction, $gradient-color);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: nth($start-position, 1) nth($start-position, 2);
}


.root {
  @include my-gradient(to right, #000, 0% 0%, 100% 0%)
}

```

# 继承

继承允许一个选择器从另一个选择器中继承样式。这使得代码更加简洁，同时避免了重复书写相同的样式规则。继承是通过 `@extend` 关键字实现的。

```scss
.alert {
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
}

.alert-success {
  // 继承的基本使用 缺点,在编译的时候,会生成重复的代码 alert(我们不需要编译处理)
  // 使用% 作为父类,则不会被编译
  @extend .alert;
  background-color: green;
}

.alert-info {
  @extend .alert;
  background-color: blue;
}

.alert-warning {
  @extend .alert;
  background-color: orange;
}

.alert-error {
  @extend .alert;
  background-color: red;
}

%my-alert {
  height: 200px;
  width: 100px;
  font-size: 20px;
}

.alert-success-my {
  @extend %my-alert;
  background-color: green;
}

.alert-info-my {
  @extend %my-alert;
  background-color: blue;
}


```

# 运算

## 比较运算符

| 运算符 | 描述                             | 示例                  |
| ------ | -------------------------------- | --------------------- |
| `==`   | 判断两个值是否相等。             | `@if $a == $b {... }` |
| `!=`   | 判断两个值是否不相等。           | `@if $a!= $b {... }`  |
| `>`    | 判断左侧值是否大于右侧值。       | `@if $a > $b {... }`  |
| `<`    | 判断左侧值是否小于右侧值。       | `@if $a < $b {... }`  |
| `>=`   | 判断左侧值是否大于或等于右侧值。 | `@if $a >= $b {... }` |
| `<=`   | 判断左侧值是否小于或等于右侧值。 | `@if $a <= $b {... }` |

## 逻辑运算符

| 符号 | 说明   |
| ---- | ------ |
| and  | 逻辑与 |
| or   | 逻辑或 |
| not  | 逻辑非 |

## 数字运算符

|      |                            |                                                              |
| ---- | -------------------------- | ------------------------------------------------------------ |
| `+`  | 将两个数字相加。           | `$width: 100px + 50px;`（结果为 150px）。                    |
| `-`  | 用一个数字减去另一个数字。 | `$height: 200px - 30px;`（结果为 170px）。                   |
| `*`  | 两个数字相乘。             | `$totalArea: $width * $height;`（计算宽度和高度的乘积得到总面积）。 |
| `/`  | 一个数字除以另一个数字。   | `$halfWidth: $width / 2;`（得到宽度的一半）。                |
| `%`  | 返回除法运算的余数。       | `$remainder: 10 % 3;`（结果为 1）。                          |

# 插值字符

插值运算符（`#{}`）用于在选择器、属性名、URL 等地方插入变量或表达式的值。

```scss
// 在选择器中使用
$my-selector: '.my-class';

#{$my-selector} {
  background-color: red;
}


// 在属性值中使用
$my-color: red;
.root {
  color: #{$my-color}
}

// 在url()函数中使用
$my-image: 'image.png';
.root {
  background-image: url(#{$my-image});
}

// 在注释中使用
$author: 'John';
/* This is a comment by #{$author} */

```

# 流程控制

`@if`用于根据条件判断来决定是否生成特定的 CSS 规则。

```scss
$color: blue;

div {
  @if $color == blue {
    background-color: lightblue;
  } @else if $color == red {
    background-color: pink;
  } @else {
    background-color: gray;
  }
}
```

`@for`可以用于循环生成 CSS 规则。

1.  `@for $var from <start> through <end>`：包括`end`值。
2. `@for $var from <start> to <end>`：不包括`end`值。

```scss
 @for $i from 1 through 3 {
    .item-#{$i} {
       width: 100px * $i;
     }
   }
   
   
@for $i from 1 to 3 {
.box-#{$i} {
   height: 50px * $i;
 }
}
```



`@each`用于遍历列表并为每个元素生成 CSS 规则。

```scss
$colors: blue, green, red;

@each $color in $colors {
 .color-#{$color} {
    background-color: $color;
  }
}
```







`@while`循环也可用于根据条件重复生成 CSS 规则

```scss
$i: 1;
@while $i <= 3 {
 .item-#{$i} {
    width: 100px * $i;
  }
  $i: $i + 1;
}
```







# 函数

函数可以通过`@function`指令来定义

```scss
@function <function-name>(<parameter1>, <parameter2>,...) {
  // 函数体
  @return <return-value>;
}
```



```scss
@function my-function($value) {
  @return $value * 2;
}

.my-class {
  width: my-function(10px);
}

@function  my-linear-gradient($color1, $color2, $direction: to left) {

}

.root{
  // 指定位置
  background-image: my-linear-gradient($direction: to bottom, $color1: #000, $color2: #fff);
}

```





可以使用类似于三元条件运算符的方式来定义函数，以实现根据条件返回不同值的功能

```scss
@function if($condition, $if-true, $if-false) {
  @if $condition {
    @return $if-true;
  } @else {
    @return $if-false;
  }
}

.root {
  // 条件判断
  background-color: if($condition: true, $if-true: #000, $if-false: #fff);
}

```

# 在Vue中使用

```
npm install -D sass-loader sass
```

开始编写

```vue
<script setup lang="ts">
</script>

<template>
  <div id="my-app">
    <div class="header">头部</div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>

</template>

<style scoped lang="scss">
@import "style";

$header-background-color: #333;

#my-app {
  & .header {
    background: $header-background-color;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
  }

  & .content {
    background: $content-color;
    height: 100px;
    width: 100px;
  }
}

</style>

```



