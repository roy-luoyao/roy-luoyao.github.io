---
title: lazy懒加载
date: 2025-07-17
path: source/iOS/lazy懒加载.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 概念与原理
`lazy` 关键字用于延迟属性的初始化，只有在第一次访问时才会计算和分配内存，适合开销大或依赖外部条件的属性。

## 1.2 代码示例
```swift
class DataManager {
    lazy var data: [String] = loadData()
    func loadData() -> [String] { ["A", "B", "C"] }
}
```

## 1.3 业务场景
- 大型数据、图片、网络请求等按需加载。

## 1.4 易混淆点
- lazy 属性必须是 var，不能是 let。
- lazy 属性不能用于常量或计算属性。
- 多线程下需注意线程安全。

## 1.5 深挖追问
- lazy 属性何时释放？随对象生命周期。
- lazy 属性和延迟存储属性的区别？本质一致，强调使用场景。

# 2. English Answer

## 2.1 Concept & Principle
The `lazy` keyword delays property initialization until first access, ideal for expensive or externally dependent properties.

## 2.2 Code Example
```swift
class DataManager {
    lazy var data: [String] = loadData()
    func loadData() -> [String] { ["A", "B", "C"] }
}
```

## 2.3 Business Scenarios
- Large data, images, network requests, etc. on demand.

## 2.4 Common Confusions
- lazy must be var, not let.
- Not for constants or computed properties.
- Thread safety concerns in multithreading.

## 2.5 Deep Dive
- When is lazy property released? With object lifecycle.
- Difference with lazy stored property? Essentially the same, focus on usage scenario.
