---
title: dynamic与静态库的区别
date: 2025-07-17
path: source/iOS/dynamic与静态库区别.md
categories:
  - iOS
---

# 1. 中文答案

## 1.1 概念与本质
- **静态库（Static Library）**：编译时直接打包进可执行文件，扩展名.a。
- **动态库（Dynamic Library）**：运行时动态加载，扩展名.dylib/.framework。

## 1.2 主要区别
- 链接时机：静态库在编译时，动态库在运行时。
- 体积：静态库会增加主程序体积，动态库可复用、节省空间。
- 更新：动态库可独立升级，静态库需重新编译主程序。
- 资源占用：动态库可被多个进程共享，静态库各自占用。

## 1.3 代码/配置示例
- Xcode 添加静态库：Target → Build Phases → Link Binary With Libraries
- 动态库：需设置“Embedded Binaries”

## 1.4 业务场景
- SDK/第三方库分发、热修复、插件化等。

## 1.5 易混淆点
- iOS 8 以前不支持动态 framework。
- 动态库需注意 App Store 审核政策。

# 2. English Answer

## 2.1 Concept & Essence
- **Static Library**: Linked at compile time, extension .a
- **Dynamic Library**: Loaded at runtime, extension .dylib/.framework

## 2.2 Key Differences
- Link time: static (compile), dynamic (runtime)
- Size: static increases app size, dynamic saves space
- Update: dynamic can be updated independently
- Resource: dynamic can be shared, static is duplicated

## 2.3 Code/Config Example
- Xcode add static: Target → Build Phases → Link Binary With Libraries
- Dynamic: set “Embedded Binaries”

## 2.4 Business Scenarios
- SDK/3rd-party distribution, hotfix, plugin, etc.

## 2.5 Common Confusions
- iOS <8 no dynamic framework
- Dynamic library and App Store policy
