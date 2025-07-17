---
title: String与NSString的关系与区别
date: 2025-07-17
path: source/iOS/String与NSString区别.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 关系与区别
1. String 是 Swift 的原生字符串类型，NSString 是 OC 的字符串类。
2. String 与 NSString 可以自动桥接，互相转换。
3. String 是值类型（struct），NSString 是引用类型（class）。

## 1.2 为什么要这样设计？
- String 采用值类型，提升性能和安全性，支持 copy-on-write。
- 兼容 OC 生态，便于混编。

## 1.3 实际代码示例
```swift
let swiftStr: String = "Hello"
let ocStr: NSString = swiftStr as NSString
let swiftStr2: String = ocStr as String

// 值类型特性
var a = "abc"
var b = a
b += "d"
print(a) // "abc"
print(b) // "abcd"
```

## 1.4 业务/用户价值
- 性能更优，线程安全。
- 兼容 OC，便于迁移和集成。

## 1.5 易混淆点
- String 是 struct，NSString 是 class。
- String 支持更多 Swift 特性（如泛型、协议扩展等）。

# 2. English Answer

## 2.1 Relationship and Difference
1. String: native Swift string type; NSString: Objective-C class.
2. String and NSString are automatically bridged.
3. String is a value type (struct), NSString is a reference type (class).

## 2.2 Why this design?
- String as value type: better performance, safety, COW.
- OC compatibility for mixed code.

## 2.3 Code Example
```swift
let swiftStr: String = "Hello"
let ocStr: NSString = swiftStr as NSString
let swiftStr2: String = ocStr as String

var a = "abc"
var b = a
b += "d"
print(a) // "abc"
print(b) // "abcd"
```

## 2.4 Business/User Value
- Better performance, thread safety.
- OC compatibility, easier migration/integration.

## 2.5 Common Confusion
- String is struct, NSString is class.
- String supports more Swift features (generics, protocol extensions, etc).
