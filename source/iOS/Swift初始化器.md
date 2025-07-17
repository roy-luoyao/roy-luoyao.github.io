---
title: Swift中的初始化器（构造方法）
date: 2025-07-17
path: source/iOS/Swift初始化器.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 Swift 初始化器的类型
1. **指定初始化器（Designated Initializer）**：负责初始化所有属性，调用父类的指定初始化器。
2. **便利初始化器（Convenience Initializer）**：必须调用同一个类中的其他初始化器，常用于简化初始化流程。
3. **可失败初始化器（Failable Initializer）**：`init?`，初始化可能失败时返回 nil。

## 1.2 为什么要这样设计？
- 保证对象所有属性都被初始化，提升类型安全。
- 便于多构造方式，提升 API 易用性。
- 可失败初始化器提升健壮性。

## 1.3 实际代码示例
```swift
class Person {
    var name: String
    var age: Int
    // 指定初始化器
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    // 便利初始化器
    convenience init(name: String) {
        self.init(name: name, age: 0)
    }
    // 可失败初始化器
    init?(dict: [String: Any]) {
        guard let name = dict["name"] as? String,
              let age = dict["age"] as? Int else { return nil }
        self.name = name
        self.age = age
    }
}
```

## 1.4 业务/用户价值
- 保证数据完整性，提升产品稳定性。
- 支持多种初始化方式，提升开发效率。

## 1.5 易混淆点
- 便利初始化器必须调用本类其他初始化器。
- 可失败初始化器返回 nil，需注意解包。

# 2. English Answer

## 2.1 Types of Swift Initializers
1. **Designated Initializer**: Initializes all properties, calls superclass's designated initializer.
2. **Convenience Initializer**: Must call another initializer in the same class, simplifies initialization.
3. **Failable Initializer**: `init?`, returns nil if initialization fails.

## 2.2 Why this design?
- Ensures all properties are initialized, improves type safety.
- Supports multiple construction patterns, better API usability.
- Failable initializers improve robustness.

## 2.3 Code Example
```swift
class Person {
    var name: String
    var age: Int
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    convenience init(name: String) {
        self.init(name: name, age: 0)
    }
    init?(dict: [String: Any]) {
        guard let name = dict["name"] as? String,
              let age = dict["age"] as? Int else { return nil }
        self.name = name
        self.age = age
    }
}
```

## 2.4 Business/User Value
- Ensures data integrity, improves stability.
- Supports multiple init patterns, better dev efficiency.

## 2.5 Common Confusion
- Convenience initializers must call another initializer in the same class.
- Failable initializers return nil, need to unwrap.
