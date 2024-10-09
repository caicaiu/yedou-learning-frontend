# 简介

HTML 超文本标记语言是一种用于创建网页的标准标记语言。 使用**标记标签**来描述**网页的结构和内容**，定义了浏览器如何显示文本、图像、链接和其他媒体元素。HTML 并不是一种编程语言，而是一种标记语言，它通过特定的标签来告诉浏览器如何渲染页面。

# Hello world

1. 第一步：鼠标右键=>新建  = >文本文档=>输入以下内容，并保存。

   ```html
   <marquee>Hello World！</marquee>
   ```

2. 第二步：修改后缀为.html,然后双击打开即可。

3. 借助浏览器看网页的源代码

   > 具体操作：在网页空白处：鼠标右键=>查看网页源代码 

# HTML标签

标签又称元素，是HTML的基本组成单位。   标签分为：双标签与单标签 (绝大多数都是双标签)
标签名不区分大小写，但推荐小写，因为小写更规范。

```html
<div>这是双标签</div>
<input type="text" value="这是单标签"/>
```

# 标签属性

HTML 标签属性用于**为 HTML 标签提供额外的信息**。

属性由 **键值对** 的形式出现，键是属性名，值通常放在引号内， 有些特殊的属性，没有属性名，只有属性值。

```html
<!--无属性-->
<input disabled/>
<!--有属性-->
<input type="text">
```

# HTML基本结构

一个标准的 HTML 文档具有特定的基本结构，它定义了网页的内容和布局。以下是 HTML5 文档的基本结构，包括常用的元素和它们的功能。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>页面标题</title>
  </head>
  <body>
    <p>这是一个段落，描述网页内容。</p>
  </body>
</html>
```

1. **`<!DOCTYPE html>`**:   声明文档类型，告诉浏览器使用 HTML5 标准渲染页面。
2. **`<html>`**:  HTML 文档的根元素，所有其他内容都包裹在其中。
3. **`<head>`**:   包含网页的元数据（不会直接显示在页面上），如编码、页面标题、描述等信息。
4. **`<title>`**:   定义网页标题，显示在浏览器标签栏或窗口标题上，也是搜索引擎检索结果中的标题。
5. **`<body>`**:   包含网页的主要可见内容，用户在浏览器中看到的所有内容。



# HTML注释

**注释** 是用于给开发者或其他阅读代码的人添加说明性文字或备注的部分，它们不会显示在网页上，也不会被浏览器解析。

1. **单行注释**：   单行的注释
2. **多行注释**：  适合长内容说明或大块代码的注释。

```html
<!--单行是你-->
<html>

</html>
<!--
多行注释

-->
```



# HTML字符编码

字符编码在 HTML 文档中起着至关重要的作用。选择合适的字符编码并正确设置，可以确保网页能够正确显示所有字符，提升用户体验。

在现代开发中，UTF-8 是最推荐的字符编码方式。

字符编码参考(计算机基础)

```html
<meta charset="UTF-8">
```

# HTMl排版标签

| 标签名 | 标签含义                                       | 单/双标签 |
| ------ | ---------------------------------------------- | --------- |
| h1~ h6 | 标题                                           | 双        |
| p      | 段落                                           | 双        |
| div    | 没有任何含义，用于整体布局（生活中的包装袋）。 | 双        |

> 1. h1最好写一个，h2~h6能适当多写。
> 2. h1~h6不能互相嵌套，例如：h1标签中最好不要写h2标签了。
> 3. p标签很特殊！它里面不能有：h1~h6、p、div标签（暂时先这样记，后面会说规律）。



```html
<body>
<h1>this is a heading</h1>
<h2>this is a subheading</h2>
<h3>this is a sub-subheading</h3>
<h4>this is a sub-sub-subheading</h4>
<h5>this is a sub-sub-sub-subheading</h5>
<p>this is a paragraph</p>
<div>this is a div</div>
</body>
```

# HTML块级元素和行内元素

1. 块级元素：独占一行（排版标签都是块级元素）
2. 行内元素：不独占一行（目前只学了：input,稍后会学习更多）。

使用规则

1. 块级元素中能写行内元素和块级元素
2. 行内元素中能写行内元素，但不能写块级元素。

```html
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<input type="text" placeholder="Enter text here">
<input type="text" placeholder="Enter text here">
<input type="text" placeholder="Enter text here">
```



# HTML文本标签

用于包裹：词汇、短语等。 通常写在排版标签里面。

1. **`<strong>`**: 表示重要的文本，通常以加粗的形式显示。
2. **`<em>`**: 表示强调的文本，通常以倾斜的形式显示。
3. **`<span>`**: 用于在文本中定义一个小块，可以应用样式。
4. **`<small>`**: 显示小号文本，通常用于版权信息等。
5. **`<del>`**: 表示已删除的文本，通常以删除线形式显示。
6. **`<ins>`**: 表示插入的文本，通常以下划线形式显示。
7. <code>: 用于显示代码片段，通常以等宽字体显示。
8. **`<ruby>`**: 包含要注音的文本。
9. **`<rt>`**: 定义注音文本。
10. `<mark>` 标签用于突出显示文本

其他参考[文本标签](http://www.lvyestudy.com/html/text-tags)

```html
<body>
    <strong>This is a strong text</strong>
    <em>This is an emphasized text</em>
    <p>© 2024 Company Name <small>保留所有权利</small></p>
    <p>这是一个 <del>错误的</del> 正确的文本。</p>
    <p>这是一个 <ins>新插入</ins> 的文本。</p>
    <p>《三国演义》是一个经典的小说 <cite>（罗贯中著）</cite>。</p>
    <p>请使用 <code>console.log()</code> 输出调试信息。</p>
    
    <p>这是一个包含注音的例子：<ruby>汉字<rt>hàn zì</rt></ruby></p>
    <p>例如，<mark>SEO</mark> 是网页设计中的一个关键因素。</p>
</body>
```

# HTML图片标签

\<img>，它是一个行内元素，用于在文档中插入图片

常用属性

1. **`src`**：指定图像的路径或 URL。
2. **`alt`**：提供替代文本，用于图像无法加载时显示，并为辅助技术提供支持。
3. **`width`** 和 **`height`**：设置图像的宽度和高度（以像素或百分比表示）。
4. **`title`**：提供图像的附加信息，在鼠标悬停时显示。

```html
<body>
<img src="https://example.com/image.jpg"
     alt="示例图片"
     title="这是一张示例图片"
     width="300"
     height="200"/>
</body>
```

常用的图片格式

1. **JPEG (JPG)**：
   - 优点：支持高压缩率，适合照片和复杂图像。
   - 缺点：有损压缩，可能导致图像质量下降。
2. **PNG**：
   - 优点：无损压缩，支持透明背景，适合图标和简单图形。
   - 缺点：文件大小通常较大。
3. **GIF**：
   - 优点：支持动画，适合简单动画和图形。
   - 缺点：仅支持256种颜色，适合简单图像。
4. **BMP**：
   - 优点：无损格式，图像质量高。
   - 缺点：文件大小较大，不适合网络使用。
5. **SVG**：
   - 优点：矢量图形，支持无限缩放，适合图标和插图。
   - 缺点：不适合复杂图像，兼容性问题。
6. **WEBP**：
   - 优点：较高的压缩率，支持无损和有损压缩，适合网络使用。
   - 缺点：兼容性较差，某些旧浏览器不支持。
7. **ICO**：
   1. 优点：用于图标文件，支持多种分辨率和透明度。
   2. 缺点：主要用于应用程序图标，其他用途较少。



# HTML相对路径和绝对路径

在网页开发中，路径用于指定文件的位置。文件路径主要有两种类型：**绝对路径**和**相对路径**。

1. 绝对路径    指从网站的根目录开始的完整路径，通常包含协议（如 `http://` 或 `https://`）、域名和文件位置。

   1. 本地绝对路径：E:/a/b/c/奥特曼.jpg。(很少使用)
   2. 网络绝对路径：http://www.atguigu.com/images/index_new/1ogo.png。

2. 相对路径    相对于当前文档的路径，更加简洁，适合内部链接

   1. 同级目录中的文件： image.jpg
   2. 子目录中的文件：   images/photo.jpg
   3. 上级目录中的文件：   ../docs/report.pdf

   

# HTML超链接

HTML 超链接用于在网页中创建链接，允许用户从一个页面导航到另一个页面或资源。超链接通过 `<a>` 标签实现

标签常用属性

1. **`href`**：指定链接的目标 URL 或资源地址。
2.  `target`定义链接的打开方式。
   1. `_self`：在同一窗口或标签页中打开（默认值）。
   2. `_blank`：在新窗口或标签页中打开。
3. `title`    提供关于链接的附加信息，通常在鼠标悬停时显示





使用的方式

1.  跳转页面

   ```html
   <body>
       <a href="https://www.example.com" target="_blank">访问外部网站</a>
       <a href="target-page.html" title="点击跳转到目标页面">点击这里跳转到目标页面</a>
   </body>
   ```

2. 跳转文件

   ```html
     <a href="images/logo.jpg" target="_self">查看上级目录的图片</a>
   ```

3. 唤起应用 通过使用特定的 URL 协议（例如 `mailto:`、`tel:`、`geo:` 等），可以让用户在点击链接时启动相应的应用程序。

   ```html
   // 使用 mailto: 协议，可以打开用户默认的电子邮件客户端，创建一封新邮件。
   <a href="mailto:example@example.com?subject=主题&body=内容">发送邮件</a>
   <a href="tel:+1234567890">拨打电话</a>
   <a href="sms:+1234567890?body=你好">发送短信</a>
   
   // 使用 geo: 协议，可以启动地图应用，定位到指定的地理坐标
   <a href="geo:37.7749,-122.4194">查看位置</a>
   
   // 可以使用 file: 协议直接打开本地文件，前提是浏览器允许这种操作。
   <a href="file:///C:/path/to/your/file.txt">打开本地文件</a>
   ```

4. 跳转锚点   用于创建页面内链接，允许用户快速跳转到同一页面的特定部分

   1. **定义锚点**：在目标元素（例如 `<section>`、`<h2>`）上添加 `id` 属性。
   2. **创建链接**：使用 `<a>` 标签的 `href` 属性指向相应的锚点，锚点前加上 `#` 符号。

   ```html
   <a href="#section1">跳转到第一部分</a>
   
   <div style="height: 2000px"></div>
   <!-- 定义锚点 -->
   <section id="section1">
       <h2>第一部分</h2>
       <p>这是第一部分的内容。</p>
   </section>
   ```

   

# HTML列表

在 HTML 中，列表用于展示一系列相关项目或条目。HTML 提供了多种类型的列表，每种类型有不同的用途

1. 无序列表 `<ul>`     不需要特定顺序的项目，通常使用圆点（黑点）作为项目符号
2. 有序列表 `<ol>`      需要特定顺序的项目，通常使用数字或字母作为项目符号
3. 定义列表 `<dl>`     展示术语及其定义。它包含一组术语和对应的解释或定义。
4. 预定义列表 `<datalist>`    提供一个预定义的选项列表
5. `<details>` 可展开和折叠的内容区域     通常与 `<summary>` 标签一起使用，以提供可见的标题

```html
<body>
    <ul>
        <li>项目 1</li>
        <li>项目 2</li>
        <li>项目 3</li>
    </ul>
    <ol>
        <li>第一项</li>
        <li>第二项</li>
        <li>第三项</li>
    </ol>
    <dl>
        <!--标题-->
        <dt>HTML</dt>
        <!--描述-->
        <dd>超文本标记语言，用于创建网页。</dd>
        <dt>CSS</dt>
        <dd>层叠样式表，用于样式化网页。</dd>
        <dt>JavaScript</dt>
        <dd>一种用于网页交互的编程语言。</dd>
    </dl>
    
    
    <input list="fruits" id="fruitInput" name="fruit" placeholder="输入水果名称...">
    
    <datalist id="fruits">
        <option value="苹果">
        <option value="香蕉">
        <option value="橙子">
        <option value="葡萄">
        <option value="草莓">
        <option value="蓝莓">
    </datalist>
    
     <details>
        <summary>什么是 HTML?</summary>
        <p>HTML（超文本标记语言）是构建网页的标准标记语言。它用于描述网页的结构和内容。</p>
    </details>
    
</body>
```

# HTML表格

在 HTML 中，表格是用于以行和列的方式组织数据的元素。表格可以显示数值、文本或图像，并广泛应用于展示结构化信息。

## 基本结构

1. `<table>`  定义一个表格。
2. **`<caption>`**：定义表格的标题
3. **`<thead>`**、**`<tbody>`**、**`<tfoot>`**：分别用于定义表格的头部、主体和脚部。
4. **`<th>`**：定义表头单元格，通常为加粗文本。
5. **`<td>`**：定义表体单元格，包含实际数据。

```html
<body>
    <table border="1">
    <caption>表格标题</caption>
    <!-- 表头-->
    <thead>
    <!-- 表头行 -->
    <tr>
        <!-- 表头单元格-->
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>电话</th>
        <th>邮箱</th>
    </tr>
    </thead>
    <!-- 表体-->
    <tbody>
    <!-- 表体行 -->
    <tr>
        <!-- 表体单元格-->
        <td>张三</td>
        <td>20</td>
        <td>男</td>
        <td>13812345678</td>
        <td>zhangsan@163.com</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>25</td>
        <td>女</td>
        <td>13812345678</td>
        <td>lisi@163.com</td>
    </tr>
    </tbody>
    <!-- 表脚-->
    <tfoot>
    <!-- 表脚行 -->
    <tr>
        <!-- 表脚单元格-->
        <td></td>
        <td></td>
        <td></td>
        <td>总计</td>
        <td>25</td>
    </tr>
    </tfoot>
</table>
</body>
```





## 常用属性

1. **`<table>`** 标签属性：

   1. `border`: 设置表格的边框宽度。
   2. `cellspacing`: 设置单元格之间的间距。
   3. `width`: 设置表格的宽度。
   4. `height`: 设置表格的高度。
   5. `align`: 设置表格的对齐方式（左、右、居中）。

   ```html
   <table border="1" width="500" height="300" cellspacing="0" align="center">
   ```

2. `<theader>`属性 只有高度，其他都一样

3. `<tr>`标签属性

   1. `align`: 设置单元格内容的对齐方式。
   2. `valign`: 设置单元格内容的垂直对齐方式。





## 跨行与跨列

要实现单元格的跨行和跨列，可以使用`<td>`或`<th>`标签的`rowspan`和`colspan`属性。

- **`rowspan`**: 该属性用于指定单元格跨越的行数。
- **`colspan`**: 该属性用于指定单元格跨越的列数。

```html
<table border="1" cellpadding="5" cellspacing="0" width="50%">
    <tr>
        <th rowspan="2">跨行单元格</th>
        <th colspan="2">跨列单元格</th>
    </tr>
    <tr>
        <td>单元格 1</td>
        <td>单元格 2</td>
    </tr>
    <tr>
        <td colspan="3" bgcolor="#e7e7e7">跨越三列的单元格</td>
    </tr>
</table>
```

# HTML其他常用标签

| 标签名 | 标签含义                                   | 单/双标签 |
| ------ | ------------------------------------------ | --------- |
| br     | 换行                                       | 单        |
| hr     | 分隔                                       | 单        |
| pre    | 按原文显示（一般用于在页面中嵌入大段代码） | 双        |

```html
<body>
    <h1>常用标签补充</h1>
    <a href="#">换行</a><br/>
    <a href="#">换行</a>
    
    <p>分割线</p>
    <hr/>
    酷家乐
    <pre>
            酷家乐lkfja
    
        faksj
        flasj
    </pre>
</body>
```

# HTML表单

在HTML中，表单用于收集用户输入。表单通常包含各种输入元素，如文本框、单选按钮、复选框、下拉菜单等。

基本格式

1. **`<form>`**: 表单的开始标签，`action`属性指定表单提交的目标URL，`method`属性指定提交方式（如`GET`或`POST`）。
2. **`<input>`**: 用于不同类型的输入
   1. `name`属性用于指定该输入字段的名称。这个名称在表单提交时作为键（key）发送到服务器，与用户输入的值（value）一起形成键值对。

```html
<body>
    <form action="https://www.baidu.com/s" target="_blank" method="get">
        <input type="text" name="wd" placeholder="请输入关键字" />
        <button>搜索</button>
    </form>
</body>
```



文本和密码

```html
<form action="submit.php">
    <input type="text" name="username" value="zhangsan" maxlength="5"/>
    <br/>
    <input type="password" name="password" value="123456" maxlength="8"/>
</form>
```





单选框和复选框

```html
<!--多个单选框共享同一个name属性-->
性别: <input type="radio" name="gender" value="male">男生
<input type="radio" name="gender" value="female">女生


爱好:
<input type="checkbox" name="hobby" value="reading"> 阅读
<input type="checkbox" name="hobby" value="swimming"> 游泳
<input type="checkbox" name="hobby" value="running"> 跑步
```





隐藏域   表单中使用的输入元素，用户无法看到或修改它的值。它通常用于在表单提交时传递额外的数据。

```html
<input type="hidden" name="userId" value="12345">
<input type="hidden" name="sessionToken" value="abcde12345">
```







提交与重置

提交按钮用于将表单数据发送到服务器。使用`<input>`元素或`<button>`元素可以创建提交按钮。

```html
<input type="submit" value="提交">
<button type="submit">提交</button>
```

重置按钮用于清空表单中的所有输入字段，将其恢复到初始状态

```html
<input type="reset" value="重置">
<button type="reset">重置</button>
```







普通按钮  可以通过`<button>`元素创建，并可以设置不同的`type`属性。

1. `type="button"`: 普通按钮，不会提交表单。
2. `type="submit"`: 提交按钮，会提交表单。
3. `type="reset"`: 重置按钮，清空表单输入。

```html
<button type="submit">提交</button>
<button type="reset">重置</button>
<button type="button">普通按钮</button>
```





文本框   用于让用户输入多行文本。它适合于需要较长输入的场景

```html
 <textarea name="message" rows="6" cols="40" placeholder="请输入您的留言..."></textarea><br><br>
```



下拉框   用于提供一组选项供用户选择。用户可以从中选择一个或多个选项。

```html
<select id="fruit" name="fruit">
    <option value="apple">苹果</option>
    <option value="banana">香蕉</option>
    <option value="orange">橙子</option>
    <option value="grape">葡萄</option>
</select>
```

 

禁用表单控件   通过设置`disabled`属性来禁用表单控件，使其不可用

```html
 <input type="submit" value="提交" disabled>
```



label标签  用于为表单控件提供描述或标识。用户点击标签时，可以直接聚焦到相应的输入控件上。

1. **`for` 属性**: 指定该标签所关联的输入控件的 `id`。确保 `for` 属性的值与控件的 `id` 相匹配。

```html
<form action="/submit" method="post">
    <label for="username">用户名:</label>
    <input type="text" id="username" name="username" required><br><br>

    <label for="password">密码:</label>
    <input type="password" id="password" name="password" required><br><br>

    <input type="submit" value="提交">
</form>
```





新增属性

- **`placeholder`**: 提示用户输入内容。
- **`required`**: 确保用户填写该输入框。
- **`autofocus`**: 页面加载时自动聚焦在姓名输入框。
- **`autocomplete`**: 启用用户名输入框的自动完成。
- **`pattern`**: 用户名必须至少包含5个字母或数字。

```html
<form action="#">
    <input type="text" name="username" placeholder="请输入用户名" required
           pattern="[a-zA-Z0-9]{6,12}" title="用户名必须是6-12位的字母或数字"
           autocomplete="on"
           autofocus>
</form>
```





新增type属性值

```html
<body>
    <form>
        <!--邮箱输入框-->
        <input type="email" placeholder="请输入邮箱">
        <!--url输入框-->
        <input type="url" placeholder="请输入网址" required>
        <!--数字输入框-->
        <input type="number" placeholder="请输入数字" required>
        <!--搜索框-->
        <input type="search" placeholder="搜索" required>
        <!--手机号输入框-->
        <input type="tel" placeholder="请输入手机号" required>
        <!--范围输入框-->
        <input type="range" min="0" max="100" step="1" value="50">
        <!--颜色-->
        <input type="color" value="#ff0000">
        <!--日期-->
        <input type="date" value="2021-01-01">
        <!--月份-->
        <input type="month" value="2021-01">
        <!--周-->
        <input type="week" value="2021-W01">
        <!--时间-->
        <input type="time" value="12:00:00">
        <!--日期时间-->
        <input type="datetime-local" value="2021-01-01T12:00">
        <button type="submit">提交</button>
    </form>
</body>
```



















# HTML框架标签

\`\<iframe> `标签用于在网页中嵌入另一个HTML文档。它可以用来展示其他网页、视频、地图等内容。

- **`src`**: 指定要嵌入的网页的URL。
- **`width` 和 `height`**: 定义 `<iframe>` 的宽度和高度，可以使用像素（px）或百分比（%）。
- **`title`**: 提供关于 `<iframe>` 内容的描述，增强可访问性。

嵌入普通网页

```html
<iframe src="https://www.example.com" width="600" height="400" title="示例网站"></iframe>


// 其他内容
<img src="https://www.example.com/image.jpg" alt="示例图片" width="600" height="400">
<img src="https://www.example.com/image.pdf" alt="pdf" width="600" height="400">


// 与超链接的target配置使用 target和name配置使用
<a href="https:/www.toutiao.com"target="tt">点我看新闻</a>
<iframe name="tt"frameborder="0"width="900"height="300"></iframe>

// 与表单配合使用
<form action="https://so.toutiao.com/search"target="container">
    <input type="text"name="keyword">
    <input type="submit" value="搜索">
</form>
<iframe src="container" width="600" height="400"></iframe>
```



# HTML字符实体

在HTML中，字符实体用于表示一些特殊字符，这些字符在HTML中具有特定的意义，或是不能直接输入的字符。

| 字符 | 实体名称  | 实体代码  |
| ---- | --------- | --------- |
| `&`  | `&amp;`   | `&#38;`   |
| `<`  | `&lt;`    | `&#60;`   |
| `>`  | `&gt;`    | `&#62;`   |
| `"`  | `&quot;`  | `&#34;`   |
| `'`  | `&apos;`  | `&#39;`   |
| `©`  | `&copy;`  | `&#169;`  |
| `®`  | `&reg;`   | `&#174;`  |
| `€`  | `&euro;`  | `&#8364;` |
| `£`  | `&pound;` | `&#163;`  |
| `¥`  | `&yen;`   | `&#165;`  |

```html
<body>
    &gt;
    &lt;
    &amp;
    &quot;
    &apos;
</body>
```

# HTML全局属性

全局属性是可以应用于所有HTML元素的属性。这些属性提供了额外的信息或功能，增强了元素的表现和交互性。

| 属性              | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| `class`           | 定义元素的类名，可以用于CSS样式和JavaScript选择器。          |
| `id`              | 定义元素的唯一标识符，在文档中必须是唯一的。                 |
| `style`           | 直接在元素中定义内联CSS样式。                                |
| `title`           | 提供关于元素的额外信息，通常在鼠标悬停时显示为工具提示。     |
| `lang`            | 指定元素内容的语言。                                         |
| `data-*`          | 自定义数据属性，可以存储额外的信息，属性名称以 `data-` 开头。 |
| `hidden`          | 指定元素是否可见，设置为 `hidden` 时元素将不被显示。         |
| `draggable`       | 指定元素是否可拖动，值为 `true` 或 `false`。                 |
| `accesskey`       | 定义快捷键，允许用户通过键盘快速访问元素。                   |
| `contenteditable` | 元素是否可被用户编辑                                         |
| `spellcheck`      | 用于指示浏览器是否应对输入字段中的文本进行拼写检查           |
| `oncontextmenu`   | 用于指定在用户右键单击（或长按）元素时触发的JavaScript事件   |

```html
<body>
    <div contenteditable="true">dfjaklj1</div>
    
    <div style="height: 100px;width: 100px;background-color: red" draggable="true">
        极乐空间
    </div>
    <div hidden>加咖啡</div>
    
    <div spellcheck="true">
        this is my fathes
    </div>
    
    <!--上下文菜单-->
    <div oncontextmenu="alert('你点击了右键！')">fa1</div>
    
    <!--私有定制数据-->
    <div data-custom-attr="custom-value" data-custom-attr2="custom-value2"></div>
</body>
```





# HTML Meta元信息

`<meta>` 标签用于提供关于HTML文档的元信息（metadata）。这些信息通常不会直接显示在网页上，但对浏览器、搜索引擎和其他服务非常重要。

1. **字符集声明**   指定文档使用的字符编码，`UTF-8` 是最常用的编码。

   ```html
   <meta charset="UTF-8">
   ```

2.  **页面描述**  提供关于页面内容的简短描述，通常用于搜索引擎结果中的摘要。

   ```html
   <meta name="description" content="这是网页的描述信息。">
   ```

3. **关键词**   定义与页面相关的关键词，帮助搜索引擎优化（SEO）。

   ```html
   <meta name="keywords" content="HTML, CSS, JavaScript">
   ```

4. **作者**  指定网页的作者。

   ```html
   <meta name="author" content="作者姓名">
   ```

5. **视口设置 **  控制页面在移动设备上的布局和缩放。

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

6. **刷新页面**  每30秒刷新一次页面。

   ```html
   <meta http-equiv="refresh" content="30">
   ```

7. **兼容性声明**  指定浏览器的渲染模式，确保使用最新的渲染引擎。

   ```html
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   ```

8. **社交媒体信息 **  Open Graph 协议用于控制在社交媒体平台上分享时的显示内容。

   ```html
   <meta property="og:title" content="网页标题">
   <meta property="og:description" content="网页描述">
   <meta property="og:image" content="https://www.example.com/image.jpg">
   ```

   

# HTML布局标签

布局标签用于定义网页的结构和内容的组织。这些标签帮助开发者创建清晰、可维护的网页布局

| 标签        | 描述                                             | 示例代码                                            |
| ----------- | ------------------------------------------------ | --------------------------------------------------- |
| `<header>`  | 定义文档的头部区域，通常包含网站标题和导航菜单。 | `<header><h1>网站标题</h1><nav>...</nav></header>`  |
| `<nav>`     | 定义导航链接的区域。                             | `<nav><ul><li><a href="#">首页</a></li></ul></nav>` |
| `<main>`    | 定义文档的主要内容区域。                         | `<main><h2>主要内容</h2><p>...</p></main>`          |
| `<section>` | 定义文档中的一个独立部分。                       | `<section><h2>部分标题</h2><p>...</p></section>`    |
| `<article>` | 定义独立的内容块，通常用于博客或新闻。           | `<article><h3>文章标题</h3><p>...</p></article>`    |
| `<aside>`   | 定义与主内容相关的附加信息，通常用于侧边栏。     | `<aside><h4>相关信息</h4><p>...</p></aside>`        |
| `<footer>`  | 定义文档的底部区域，通常包含版权和联系信息。     | `<footer><p>© 2024 公司名</p></footer>`             |

```html
<body>
    <header>
        <h1>尚品汇</h1>
        <nav>
            <a href="#">首页</a>
            <a href="#">产品</a>
            <a href="#">新闻</a>
            <a href="#">关于我们</a>
        </nav>
    </header>
    <main>
        <aside style="float:right;">
            <ul>
                <li><a href="#">品牌故事</a></li>
                <li><a href="#">品牌文化</a></li>
                <li><a href="#">品牌理念</a></li>
                <li><a href="#">品牌价值</a></li>
            </ul>
        </aside>
        <article>
            <h2>《如何一页暴富》</h2>
            <section>
                <p>如何一页暴富？</p>
                <p>1. 创造价值</p>
            </section>
            <section>
                <p>2. 做好准备</p>
            </section>
            <section>
                <p>3. 坚持不懈</p>
            </section>
        </article>
    </main>
    <footer>
        <a href="#">联系我们</a>
        <a href="#">招聘信息</a>
        <a href="#">友情链接</a>
        <p>© 2018 尚品汇 版权所有</p>
        <p>地址：北京市海淀区西二旗北路10号院1号楼101室</p>
    </footer>
</body>
```

# HTML状态标签

状态标签通常用于表示文档或应用程序的状态信息

1. **`<meter>`**   用于表示一个已知范围内的数值，通常用于显示测量值。
   1. **`value`**: 当前的测量值。
   2. **`min`**: 测量值的下限。
   3. **`max`**: 测量值的上限。
   4. **`low`**: 低于此值时的警告状态。
   5. **`high`**: 高于此值时的警告状态。
   6. **`optimum`**: 理想状态的值。
2. **`<progress>`**     用于表示某个任务的进度，通常与 JavaScript 结合使用。
   1. **`value`**: 当前进度值，动态变化。
   2. **`max`**: 进度条的最大值，表示任务的总量。
   3. **`min`**: 进度条的最小值，通常为 `0`。

```html
<body>
    <h2>meter基本使用</h2>
    <meter value="0.6">60%</meter>

    <h2>带有最小值和最大值</h2>
    <meter value="0.4" min="0" max="1">40%</meter>

    <h2>低值警告</h2>
    <meter value="0.2" min="0" max="1" low="0.3">20%</meter>

    <h2>高值警告</h2>
    <meter value="0.8" min="0" max="1" high="0.7">80%</meter>

    <h2>最佳值</h2>
    <meter value="0.9" min="0" max="1" optimum="0.8">90%</meter>


    <progress value="70"  max="100">70%</progress>

</body>
```

# HTML视频标签

\<video>标签用于在网页上嵌入视频。它允许用户播放、暂停和控制视频的播放。

- **`src`**: 视频文件的URL（可选，通常使用`<source>`标签）。
- **`controls`**: 添加播放控件（如播放、暂停、音量等）。
- **`autoplay`**: 自动播放视频。
- **`loop`**: 循环播放视频。
- **`muted`**: 静音播放。
- **`poster`**: 视频加载前显示的图像。



**`<source>`**: 指定视频文件的不同格式，以确保在不同浏览器中兼容。

```html
<video width="640" height="360" controls poster="poster.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    您的浏览器不支持视频标签。
</video>
```

# HTML音频标签

\<audio>标签用于在网页上嵌入音频内容。它允许用户播放、暂停和控制音频的播放

- **`src`**: 音频文件的URL（可选，通常使用`<source>`标签）。
- **`controls`**: 添加播放控件（如播放、暂停、音量等）。
- **`autoplay`**: 自动播放音频。
- **`loop`**: 循环播放音频。
- **`muted`**: 静音播放。

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    您的浏览器不支持音频标签。
</audio>
```

# HTML5兼容性

1. 添加元信息，让浏览器处好最优渲染模式。

   ```html
   <!--设置IE总是使用最新的文档模式进行渲染-->
   <meta http-equiv="X-UA-Compatible"content="IE=Edge">
   <!--优先使用webkit(Chromium)内核进行渲染，针对360等壳浏览器->
   <meta name="renderer"content="webkit">
   ```

2. 使用html15shiv让低版本浏览器认识H5的语义化标签。

   ```html
   <!-[if 1t ie 9]>
   <script src="../sources/js/html5shiv.js"></script>
   <![endif]-->
   ```

   



