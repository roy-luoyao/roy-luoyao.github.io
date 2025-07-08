---
title: mutating关键字的作用
date: 2025-07-08
categories:
  - iOS
---

# 1. 中文解答

## 1.1 概念与原理
1. **mutating 关键字**
   - 用于 Swift 的 struct（结构体）和 enum（枚举）的方法声明。
   - 表示该方法内部可以修改实例自身的属性或自身（即 self ）。
   - 结构体和枚举是值类型，默认方法不能修改自身属性，除非加 mutating。

## 1.2 为什么需要 mutating？
- Swift 设计为值类型默认不可变，防止无意修改数据，提升安全性。
- 只有明确声明 mutating，才允许方法内部修改属性或赋值 self。

## 1.3 实际项目代码示例
```swift
struct Counter {
    var value: Int = 0
    mutating func increment() {
        value += 1 // 允许修改属性
    }
    mutating func reset() {
        self = Counter() // 允许重新赋值 self
    }
}

var c = Counter()
c.increment() // value 变为 1
c.reset()     // value 变为 0
```

## 1.4 用户体验与业务价值
- 明确哪些方法会修改数据，便于团队协作和代码维护。
- 避免无意副作用，提升代码健壮性。

## 1.5 问题拆解与调试建议
- 如果 struct 方法需要修改属性但未加 mutating，编译器会报错。
- 调试时优先检查 mutating 关键字是否遗漏。

---

# 2. English Answer

## 2.1 Concept
- The `mutating` keyword in Swift is used in methods of structs and enums.
- It allows the method to modify properties of `self` or assign a new value to `self`.
- By default, value types (struct/enum) methods cannot modify their own properties unless marked as `mutating`.

## 2.2 Why is it needed?
- Swift enforces immutability for value types by default for safety.
- Only methods explicitly marked as `mutating` can change the instance's state.

## 2.3 Practical Example
```swift
struct Counter {
    var value: Int = 0
    mutating func increment() {
        value += 1
    }
    mutating func reset() {
        self = Counter()
    }
}

var c = Counter()
c.increment() // value becomes 1
c.reset()     // value becomes 0
```

## 2.4 User Experience & Business Value
- Makes code intent clear, improves team collaboration and maintainability.
- Prevents unintended side effects, increasing code robustness.

## 2.5 Debugging & Troubleshooting
- If you need to modify a property in a struct method but forget `mutating`, the compiler will throw an error.
- Always check for missing `mutating` if you see such errors.
