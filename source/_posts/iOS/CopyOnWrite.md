---
title: Copy-on-write（COW）
date: 2025-07-17
path: source/iOS/CopyOnWrite.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 概念与原理
Copy-on-write（写时复制，COW）是一种优化技术，多个变量共享同一内存，只有在写操作时才真正复制，Swift 的 Array、Dictionary、String 等都采用 COW。

## 1.2 代码示例
```swift
var a = [1,2,3]
var b = a // 未复制，a/b 共用内存
b[0] = 9 // 此时 b 才复制，a 不变
```

## 1.3 业务场景
- 大数据结构传递、缓存、性能优化。

## 1.4 易混淆点
- COW 只在值类型（struct）生效。
- 只读不会复制，写时才复制。

## 1.5 深挖追问
- COW 如何实现？引用计数+写时检测。
- 如何自定义 struct 支持 COW？用 isKnownUniquelyReferenced。

# 2. English Answer

## 2.1 Concept & Principle
Copy-on-write (COW) is an optimization: multiple variables share memory, only copy on write. Swift's Array, Dictionary, String use COW.

## 2.2 Code Example
```swift
var a = [1,2,3]
var b = a // not copied yet
b[0] = 9 // b is copied now, a unchanged
```

## 2.3 Business Scenarios
- Large data passing, cache, performance.

## 2.4 Common Confusions
- COW for value types only.
- No copy on read, only on write.

## 2.5 Deep Dive
- How COW works? Ref count + write check.
- Custom struct COW? Use isKnownUniquelyReferenced.
