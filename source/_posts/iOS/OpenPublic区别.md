---
title: Open与Public的区别
date: 2025-07-17
path: source/iOS/OpenPublic区别.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 概念与本质区别
1. **open**：允许模块外继承和重写（子类化/override）。
2. **public**：允许模块外访问，但不允许继承和重写。

## 1.2 为什么要区分？
- **安全性**：public 只暴露接口，防止外部随意扩展，保护内部实现。
- **灵活性**：open 适合做框架/库，允许外部自定义扩展。

## 1.3 实际代码示例
```swift
open class Animal {
    open func speak() { print("Animal") }
}

public class Person {
    public func sayHi() { print("Hi") }
}

// 其他模块
class Dog: Animal { // ✅ 允许继承
    override func speak() { print("Dog") }
}

// class Student: Person {} // ❌ 不允许继承
```

## 1.4 业务/用户价值
- open 适合 SDK/框架，便于二次开发。
- public 适合只读 API，保证产品稳定。

## 1.5 易混淆点
- open = public + 允许继承/重写。
- public 只能访问，不能扩展。

# 2. English Answer

## 2.1 Concept and Key Difference
1. **open**: Allows subclassing/overriding outside the module.
2. **public**: Allows access but not subclassing/overriding outside the module.

## 2.2 Why distinguish?
- **Security**: public exposes API but prevents external extension.
- **Flexibility**: open is for frameworks, allows external customization.

## 2.3 Code Example
```swift
open class Animal {
    open func speak() { print("Animal") }
}

public class Person {
    public func sayHi() { print("Hi") }
}

// Other module
class Dog: Animal { // ✅ Allowed
    override func speak() { print("Dog") }
}

// class Student: Person {} // ❌ Not allowed
```

## 2.4 Business/User Value
- open: for SDK/framework, supports extension.
- public: for read-only API, ensures stability.

## 2.5 Common Confusion
- open = public + subclass/override allowed.
- public: only access, no extension.
