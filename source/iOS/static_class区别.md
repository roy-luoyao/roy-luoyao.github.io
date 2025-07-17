---
title: static 与 class 的区别
date: 2025-07-17
path: source/iOS/static_class区别.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 概念与用法
- static：用于类/结构体/枚举，表示静态属性/方法，不能被子类重写。
- class：仅用于类，表示类属性/方法，允许子类重写（需 override）。

## 1.2 代码示例
```swift
class Base {
    static func foo() {}
    class func bar() {}
}
class Sub: Base {
    // override static func foo() {} // ❌ 不允许
    override class func bar() {} // ✅ 允许
}
```

## 1.3 业务场景
- static：工具方法、常量。
- class：多态、可扩展 API。

## 1.4 易混淆点
- struct/enum 只能用 static，不能用 class。
- static 本质 final class。

## 1.5 深挖追问
- static/class 的底层实现？static 静态派发，class 支持动态派发。

# 2. English Answer

## 2.1 Concept & Usage
- static: for class/struct/enum, static property/method, not overridable.
- class: for class only, overridable with override.

## 2.2 Code Example
```swift
class Base {
    static func foo() {}
    class func bar() {}
}
class Sub: Base {
    // override static func foo() {} // ❌ not allowed
    override class func bar() {} // ✅ allowed
}
```

## 2.3 Business Scenarios
- static: utility, constants.
- class: polymorphism, extensible API.

## 2.4 Common Confusions
- struct/enum: only static.
- static is final class.

## 2.5 Deep Dive
- static/class implementation? static: static dispatch; class: dynamic dispatch.
