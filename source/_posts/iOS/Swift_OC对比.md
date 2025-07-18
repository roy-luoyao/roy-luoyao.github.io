---
title: Swift与OC对比
date: 2025-07-17
path: source/iOS/Swift_OC对比.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 语法与特性
- Swift：强类型、类型推断、Optionals、值类型、函数式编程。
- OC：动态类型、消息机制、指针、手动内存管理。

## 1.2 代码示例
```swift
let arr = [1,2,3] // Swift
NSArray *arr = @[@1,@2,@3]; // OC
```

## 1.3 业务场景
- Swift 适合新项目、类型安全要求高。
- OC 适合维护老项目、动态特性需求。

## 1.4 易混淆点
- Swift 更安全但更严格，OC 灵活但易出错。
- Swift 与 OC 可混编。

## 1.5 深挖追问
- Swift 性能优化点？ARC、COW、泛型。
- OC 动态特性优势？运行时注入、KVC/KVO。

# 2. English Answer

## 2.1 Syntax & Features
- Swift: strong type, inference, optionals, value type, functional.
- OC: dynamic type, messaging, pointer, manual memory.

## 2.2 Code Example
```swift
let arr = [1,2,3] // Swift
NSArray *arr = @[@1,@2,@3]; // OC
```

## 2.3 Business Scenarios
- Swift: new project, type safety.
- OC: legacy, dynamic needs.

## 2.4 Common Confusions
- Swift safer but stricter, OC flexible but risky.
- Swift/OC can mix.

## 2.5 Deep Dive
- Swift perf: ARC, COW, generics.
- OC dynamic: runtime, KVC/KVO.
