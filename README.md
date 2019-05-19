
[![Build Status](https://travis-ci.com/liuyongshun/publicNpm.svg?branch=master)](https://travis-ci.com/liuyongshun/publicNpm) 
![npm](https://img.shields.io/npm/v/dev-public-tool.svg)
![npm](https://img.shields.io/npm/dw/dev-public-tool.svg)
[![Coverage Status](https://coveralls.io/repos/github/liuyongshun/publicNpm/badge.svg?branch=master)](https://coveralls.io/github/liuyongshun/publicNpm?branch=master)

# Method

- dealPhone (str, pos, sty, styCount)

str：必
pos：必
sty：选
styCount：选


```
传两个参数：

手机号隐藏dealPhone ('18333335246', [0])

姓名隐藏dealPhone ('刘二狗', [1]) ：刘**

传四个参数：

dealPhone('sdfslf', [2, 4],'-',8) ：字符串、开始和结束的位置、代替样式、该样式出现的次数。
```

- dealSort (val, type)

val：必
type：选

```

type : up 从小到大排序；

type : lower 从大到小排序；

type : split 分开整数和浮点数；

```

- formChecked (str, type)

str：必
type：必

```
type: email
type: phone
type: tel
type: chinese
type: idCard
type: url
type: carNumber

```

- getUrlParam(sVar)

sVar：必

```
截取路径上的参数值。
http://wwww.www.com?a=3&b=4
getUrlParam('a')  // 3

```

- minMaxVal (arr, minMax, type)

arr：必
minMax：选
type：选

```
minMax : 

默认返回最大值；

min 返回最小值；

type : all 有多个最大值时，返回所有出现过的值的位置；

```

- pwdRange (str, arr, length)

str：必
arr： 必
length： 选

```
arr : 五种校验类型,按数组顺序校验，可以自己调位置把控顺序。 
  length： 字符长度
  number： 是否含有数字
  upper： 是否有大写
  lower： 是否有小写
  special： 是否有特殊符号

length : 长度校验的长度默认6位。
```

- randomNum (n1, n2)

n1：必
n2：选

```
传一个参数默认0 - n1 内的随机整数

传两个参数得到范围内的随机数整数
```

- rmDuplicates (arr, property) 数组去重

arr：必
property：选


```
arr : 原数组或者是类数组
property : 可提供对象格式的数据的去重，根据属性名去重
```

- toggleCase (str, type)

str： 必
type：必

```
type : word 将每个单词首字母大写；
type : paragraph 将每个段落的首字母大写；
```

- trimSpace (str, type)

str： 必
type： 选

```
只有一个参数默认移除在字符串前后空格；
type : all 移除所有空格；
type : suffix 移除结尾的空格；
type : prefix 移除开始的空格；
```
