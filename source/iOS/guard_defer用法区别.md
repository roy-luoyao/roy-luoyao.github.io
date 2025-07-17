---
title: guard 与 defer 用法与区别
date: 2025-07-17
path: source/iOS/guard_defer用法区别.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 概念与用法
- guard：提前校验条件，不满足则提前退出，提升可读性。
- defer：延迟执行，函数结束前必执行，常用于资源释放。

## 1.2 代码示例
```swift
func foo(_ name: String?) {
    guard let n = name else { return }
    defer { print("end") }
    print(n)
}
```

## 1.3 业务场景
- guard：参数校验、早返回。
- defer：文件/锁/资源释放。

## 1.4 易混淆点
- guard 只能提前退出，不能继续。
- defer 多个时，后写先执行（栈）。

## 1.5 深挖追问
- defer 的实现原理？编译器插入，保证执行。

# 2. English Answer

## 2.1 Concept & Usage
- guard: early check, exit if not met, improves readability.
- defer: delayed execution, always runs before function ends, for resource release.

## 2.2 Code Example
```swift
func foo(_ name: String?) {
    guard let n = name else { return }
    defer { print("end") }
    print(n)
}
```

## 2.3 Business Scenarios
- guard: param check, early return.
- defer: file/lock/resource release.

## 2.4 Common Confusions
- guard: must exit, can't continue.
- defer: LIFO if multiple.

## 2.5 Deep Dive
- defer principle? Compiler inserts, ensures execution.
