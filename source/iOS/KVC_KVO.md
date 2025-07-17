---
title: KVC与KVO
date: 2025-07-17
path: source/iOS/KVC_KVO.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 概念与原理
- **KVC（Key-Value Coding）**：通过字符串 key 间接访问对象属性。
- **KVO（Key-Value Observing）**：基于 KVC 的观察机制，监听属性变化。

## 1.2 代码示例
```swift
class Person: NSObject {
    @objc dynamic var name = ""
}
let p = Person()
p.setValue("Tom", forKey: "name") // KVC
p.addObserver(self, forKeyPath: "name", options: .new, context: nil) // KVO
```

## 1.3 业务场景
- 数据绑定、UI自动刷新、MVVM 等。

## 1.4 易混淆点
- KVO 需继承 NSObject 且属性 dynamic。
- SwiftUI/Combine 推荐用新机制。

## 1.5 深挖追问
- KVO 的原理？运行时动态生成子类，重写 setter。
- KVO 的局限？类型安全差、易遗漏移除。

# 2. English Answer

## 2.1 Concept & Principle
- **KVC**: Access properties via string key.
- **KVO**: Observe property changes, based on KVC.

## 2.2 Code Example
```swift
class Person: NSObject {
    @objc dynamic var name = ""
}
let p = Person()
p.setValue("Tom", forKey: "name") // KVC
p.addObserver(self, forKeyPath: "name", options: .new, context: nil) // KVO
```

## 2.3 Business Scenarios
- Data binding, UI auto-refresh, MVVM, etc.

## 2.4 Common Confusions
- KVO: NSObject + dynamic.
- SwiftUI/Combine: prefer new mechanisms.

## 2.5 Deep Dive
- KVO principle: runtime subclass, override setter.
- KVO limitations: type safety, removal risk.
