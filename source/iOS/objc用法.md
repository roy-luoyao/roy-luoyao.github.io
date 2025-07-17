---
title: @objc的用法
date: 2025-07-17
path: source/iOS/objc用法.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 @objc 的作用
1. 让 Swift 代码暴露给 Objective-C 运行时（如 KVO、Selector、动态派发等）。
2. 使方法/属性/类可被 OC 调用或反射。

## 1.2 为什么要用 @objc？
- 兼容 OC 代码和第三方库。
- 支持 KVO、Target-Action、通知、动态特性。

## 1.3 实际代码示例
```swift
class MyClass: NSObject {
    @objc func sayHello() { print("Hello") }
    @objc dynamic var name: String = ""
}

let obj = MyClass()
let sel = #selector(MyClass.sayHello)
obj.perform(sel)
```

## 1.4 业务/用户价值
- 便于 Swift/OC 混编，提升项目兼容性。
- 支持 Apple 框架的动态特性。

## 1.5 易混淆点
- 只有继承自 NSObject 的类才能完全支持 @objc。
- @objc dynamic 用于 KVO。

# 2. English Answer

## 2.1 What is @objc for?
1. Exposes Swift code to Objective-C runtime (KVO, Selector, dynamic dispatch).
2. Allows methods/properties/classes to be called/reflected from OC.

## 2.2 Why use @objc?
- For OC compatibility and third-party libraries.
- Supports KVO, Target-Action, notifications, dynamic features.

## 2.3 Code Example
```swift
class MyClass: NSObject {
    @objc func sayHello() { print("Hello") }
    @objc dynamic var name: String = ""
}

let obj = MyClass()
let sel = #selector(MyClass.sayHello)
obj.perform(sel)
```

## 2.4 Business/User Value
- Easier Swift/OC interop, better compatibility.
- Supports dynamic features in Apple frameworks.

## 2.5 Common Confusion
- Only NSObject subclasses fully support @objc.
- @objc dynamic is for KVO.
