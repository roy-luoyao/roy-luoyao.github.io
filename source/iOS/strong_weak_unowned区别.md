---
title: strong、weak、unowned的区别
date: 2025-07-17
path: source/iOS/strong_weak_unowned区别.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 三者定义与区别
1. **strong**：强引用，默认，持有对象，引用计数+1。
2. **weak**：弱引用，不持有对象，不增加引用计数，自动置 nil，必须为可选类型。
3. **unowned**：无主引用，不持有对象，不增加引用计数，不自动置 nil，适合生命周期一致场景。

## 1.2 为什么要这样设计？
- 防止循环引用（如闭包、delegate）。
- 保证内存安全和资源释放。

## 1.3 实际代码示例
```swift
class A {
    var b: B?
    deinit { print("A释放") }
}
class B {
    weak var a: A?
    deinit { print("B释放") }
}

class C {
    unowned var d: D
    init(d: D) { self.d = d }
}
class D {}
```

## 1.4 业务/用户价值
- 避免内存泄漏，提升产品稳定性。
- 便于资源管理，提升用户体验。

## 1.5 易混淆点
- weak 自动置 nil，unowned 不会，若对象释放后访问 unowned 会崩溃。
- strong 是默认引用，weak/unowned 需显式声明。

# 2. English Answer

## 2.1 Definitions and Differences
1. **strong**: Default, retains object, ref count +1.
2. **weak**: Does not retain, ref count unchanged, auto nil, must be optional.
3. **unowned**: Does not retain, ref count unchanged, not auto nil, for same-lifetime cases.

## 2.2 Why this design?
- Prevent retain cycles (closures, delegates).
- Ensure memory safety and resource release.

## 2.3 Code Example
```swift
class A {
    var b: B?
    deinit { print("A released") }
}
class B {
    weak var a: A?
    deinit { print("B released") }
}

class C {
    unowned var d: D
    init(d: D) { self.d = d }
}
class D {}
```

## 2.4 Business/User Value
- Avoid memory leaks, improve stability.
- Easier resource management, better UX.

## 2.5 Common Confusion
- weak auto-nils, unowned does not (crash if accessed after release).
- strong is default, weak/unowned must be explicit.
