---
title: throws和rethrows的用法
date: 2025-07-17
path: source/iOS/throws和rethrows用法.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 throws 和 rethrows 的区别与用法
1. **throws**：用于声明函数可能抛出错误，调用时需 try/catch。
2. **rethrows**：用于高阶函数，只有传入的闭包抛错时才会抛出错误，否则不会。

## 1.2 为什么要这样设计？
- throws 让错误处理显式、安全。
- rethrows 避免不必要的 try/catch，提升代码简洁性和性能。

## 1.3 实际代码示例
```swift
func canThrow() throws {
    throw NSError(domain: "Test", code: 1)
}

func notThrow() {}

func call(_ fn: () throws -> Void) rethrows {
    try fn()
}

// 用法
try? call(canThrow) // 需要 try
call(notThrow)      // 不需要 try
```

## 1.4 业务/用户价值
- 明确错误边界，提升代码健壮性。
- 让 API 更易用，减少误用。

## 1.5 易混淆点
- throws：无论闭包是否抛错，调用都需 try。
- rethrows：只有闭包可能抛错时才需 try。

# 2. English Answer

## 2.1 Difference and Usage
1. **throws**: Declares a function may throw errors, must use try/catch.
2. **rethrows**: For higher-order functions, only throws if closure throws.

## 2.2 Why this design?
- throws: explicit, safe error handling.
- rethrows: avoids unnecessary try/catch, cleaner code.

## 2.3 Code Example
```swift
func canThrow() throws {
    throw NSError(domain: "Test", code: 1)
}

func notThrow() {}

func call(_ fn: () throws -> Void) rethrows {
    try fn()
}

try? call(canThrow) // needs try
call(notThrow)      // no try needed
```

## 2.4 Business/User Value
- Clear error boundaries, robust code.
- Easier API usage, less misuse.

## 2.5 Common Confusion
- throws: always needs try, regardless of closure.
- rethrows: only needs try if closure can throw.
