---
title: 获取一个String的长度
date: 2025-07-17
path: source/iOS/String长度获取.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 获取方式
1. 使用 `count` 属性获取字符数。
2. 注意 Swift 的 String 支持 Unicode，count 统计的是字符（而非字节）。

## 1.2 为什么要这样设计？
- 保证多语言/表情符号等复杂字符的正确统计。
- 提升国际化和用户体验。

## 1.3 实际代码示例
```swift
let str = "你好abc😊"
print(str.count) // 6

let nsStr: NSString = str as NSString
print(nsStr.length) // 8（UTF-16 单元数）
```

## 1.4 业务/用户价值
- 保证字符统计准确，避免 UI 错位或截断。
- 支持多语言和表情，提升产品国际化能力。

## 1.5 易混淆点
- String.count 是字符数，NSString.length 是 UTF-16 单元数。
- 部分 emoji/特殊字符在 NSString.length 下会统计为2。

# 2. English Answer

## 2.1 How to get String length
1. Use `count` property for character count.
2. Swift String supports Unicode, count is for characters, not bytes.

## 2.2 Why this design?
- Ensures correct count for multi-language/emoji.
- Better i18n and UX.

## 2.3 Code Example
```swift
let str = "你好abc😊"
print(str.count) // 6

let nsStr: NSString = str as NSString
print(nsStr.length) // 8 (UTF-16 units)
```

## 2.4 Business/User Value
- Accurate character count, avoids UI bugs.
- Supports i18n and emoji, better product reach.

## 2.5 Common Confusion
- String.count = character count, NSString.length = UTF-16 units.
- Some emoji/special chars count as 2 in NSString.length.
