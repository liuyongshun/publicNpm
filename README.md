
[![Build Status](https://travis-ci.com/liuyongshun/publicNpm.svg?branch=master)](https://travis-ci.com/liuyongshun/publicNpm)
![npm](https://img.shields.io/npm/v/dev-public-tool.svg)
![npm](https://img.shields.io/npm/dm/dev-public-tool.svg)
[![Coverage Status](https://coveralls.io/repos/github/liuyongshun/publicNpm/badge.svg?branch=master)](https://coveralls.io/github/liuyongshun/publicNpm?branch=master)

# Install

```
npm install dev-public-tool -D
```

# Usage

```
import{ trimSpace, toggleCase, dealPhone, dealSort, pwdRange, minMaxVal, rmDuplicates, formChecked, randomNum } from 'dev-public-tool'
```

# Quickstart

#### 1.dealPhone (str, pos, sty, styCount)

| params | option | type |
|:----------:|:-------------:|:------:|
| str | yes | String |
| pos | yes | Array |
| sty | no | String |
| styCount | no | Number |

**example**

```
dealPhone('18330233333', [0])           // 183*****333
dealPhone('刘二二', [1])                // 刘**
dealPhone('abcdefgh', [2, 4], '-', 8)  // ab--------efgh

```

#### 2.dealSort (val, type)

| params | option | type |
|:---:|:---:|:---:|
| val | yes | Array |
| type | yes | String |

type: up
type: lower
type: split

**example**

```
dealSort([1, 5, 22, 8, 2, 31, 2], 'up')    // [1, 2, 2, 5, 8, 22, 31]

dealSort([1, 5, 22, 8, 2, 31, 2], 'lower') // [31, 22, 8, 5, 2, 2, 1]

dealSort([1, 5, 22, 8, 2, 31, 2, 3.3, 1.5, 88.2, 9.1], 'split') // [1, 5, 22, 8, 2, 31, 2, 3.3, 1.5, 88.2, 9.1]

```

#### 3.formChecked (str, type)

| params | option | type |
|:---:|:---:|:---:|
| str | yes | String |
| type | yes | String |

type: email

type: phone

type: tel

type: chinese

type: idCard

type: url

type: carNumber

**example** 

```

formChecked('1234567@qq.com', 'email') // true

```

#### 4.getUrlParam(sVar)

**example**

```
http://wwww.www.com?a=3&b=4
getUrlParam('a')  // 3

```

#### 5.minMaxVal (arr, minMax, type)

| params | option | type |
|:---:|:---:|:---:|
| arr | yes | Array |
| minMax | no | String |
| type | no | String |

minMax: min

minMax: max

type: all

**example**

```
minMaxVal([3, 22, 1, 88, 3, 1, 88, 9]) // {value: 88, index: 3}

minMaxVal([3, 22, 1, 88, 3, 1, 88, 9], 'min') // {value: 1, index: 2}

minMaxVal([3, 22, 1, 88, 3, 1, 88, 9], 'max') // {value: 88, index: 3}

minMaxVal([3, 22, 1, 88, 3, 1, 88, 9], 'max', 'all') // {value: 88, index: 3, allIndex: [3, 6]}

```

#### 6.pwdRange (str, arr, length)

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

#### 7.randomNum (n1, n2)

| params | option | type |
|:---:|:---:|:---:|
| n1 | yes | Number |
| n2 | no | Number |

**example**

```
randomNum(4, 6) // value >= 4 && value <= 6
andomNum(3) // value <= 3 && value >= 0
```

#### 8.rmDuplicates (arr, property) 

| params | option | type |
|:---:|:---:|:---:|
| arr | yes | Array |
| property | no | String |

**example**

```
rmDuplicates([1, 4, 2, 4, 1, 3]) // [1, 4, 2, 3]

rmDuplicates([{name: 'hello', age: 22}, {name: 'world', age: 22}, {name: 'javascript', age: 4}], 'age') // [{name: 'hello', age: 22}, {name: 'javascript', age: 4}]
```

#### 9.toggleCase (str, type)

| params | option | type |
|:---:|:---:|:---:|
| str | yes | String |
| type | yes | String |

type: word

type: paragraph

**example**

```

toggleCase('hello world erveryone', 'word') // Hello World Erveryone

toggleCase('hello world \n erveryone', 'paragraph') // Hello world \n Erveryone

```

#### 10.trimSpace (str, type)

| params | option | type |
|:---:|:---:|:---:|
| str | yes | String |
| type | no | String |

type : all

type : suffix

type : prefix

**example**

```

trimSpace('  ab cd  ') // ab cd
trimSpace('  ab cd  ', 'all') // abcd
trimSpace('  ab cd  ', 'suffix') //   ab cd
trimSpace('  ab cd  ', 'prefix') // ab cd

```
