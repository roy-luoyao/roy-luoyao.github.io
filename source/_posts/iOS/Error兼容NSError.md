---
title: Error兼容NSError
date: 2025-07-17
path: source/iOS/Error兼容NSError.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 Swift Error 与 NSError 的关系
1. Swift 的 Error 协议用于错误类型，NSError 是 Objective-C 的错误类型。
2. Swift 的 Error 可以自动桥接为 NSError，便于与 OC/系统 API 兼容。

## 1.2 为什么要兼容？
- 兼容 Apple 各种 API（如 Foundation、网络、文件等），便于混编和第三方库集成。
- 保证错误信息的完整性和可追踪性。

## 1.3 实际代码示例
```swift
// Swift 自定义 Error
enum MyError: Error {
    case notFound
    case invalid
}

// 转为 NSError
let error: Error = MyError.notFound
let nsError = error as NSError
print(nsError.domain) // 输出 MyError
print(nsError.code)   // 输出 0

// OC API 兼容
func legacyAPICall() throws {
    throw MyError.invalid
}
do {
    try legacyAPICall()
} catch let error as NSError {
    print(error.domain, error.code)
}
```

## 1.4 业务/用户价值
- 统一错误处理，提升用户体验。
- 便于日志、监控和问题定位。

## 1.5 易混淆点
- Swift Error 只需遵循 Error 协议即可自动桥接。
- NSError 需要 domain、code、userInfo，Swift Error 会自动生成。

# 2. English Answer

## 2.1 Relationship
1. Swift Error protocol is for error types; NSError is Objective-C's error type.
2. Swift Error can be automatically bridged to NSError for compatibility.

## 2.2 Why compatible?
- For Apple APIs (Foundation, networking, etc.), mixed code, and third-party integration.
- Ensures error info completeness and traceability.

## 2.3 Code Example
```swift
enum MyError: Error {
    case notFound
    case invalid
}

let error: Error = MyError.notFound
let nsError = error as NSError
print(nsError.domain)
print(nsError.code)

do {
    throw MyError.invalid
} catch let error as NSError {
    print(error.domain, error.code)
}
```

## 2.4 Business/User Value
- Unified error handling, better UX.
- Easier logging, monitoring, and debugging.

## 2.5 Common Confusion
- Swift Error auto-bridges to NSError.
- NSError needs domain/code/userInfo; Swift Error generates them automatically.
