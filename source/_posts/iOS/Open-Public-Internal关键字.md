---
title: Open-Public...权限修饰符详解
date: 2025-07-08
categories:
  - iOS
---

# 1. 中文解答

## 1.1 概念与原理
Swift 提供五种访问控制修饰符，用于控制代码中实体（类、结构体、枚举、属性、方法等）的可见性和访问范围：

1. **open**
   - 最高级别，仅适用于类和类成员。
   - 允许在模块外被继承和重写。
   - 典型场景：第三方库/框架对外暴露可扩展 API。
   - 例：
     ```swift
     open class Animal {
         open func speak() {}
     }
     ```

2. **public**
   - 允许在模块外访问，但不能被继承或重写。
   - 适合对外暴露 API，但不希望被扩展。
   - 例：
     ```swift
     public class Dog {
         public func bark() {}
     }
     ```

3. **internal**（默认）
   - 仅在同一模块内可见，模块外不可访问。
   - 适合项目内部逻辑，默认不写就是 internal。
   - 例：
     ```swift
     class Cat {
         func meow() {}
     }
     ```

4. **fileprivate**
   - 仅在当前 Swift 文件内可见。
   - 适合同文件内多个类型协作，隐藏实现细节。
   - 例：
     ```swift
     fileprivate class Mouse {}
     fileprivate func hide() {}
     ```

5. **private**
   - 仅在当前声明作用域（如类/结构体/扩展）内可见。
   - 适合封装最细粒度的实现细节。
   - 例：
     ```swift
     class Lion {
         private var secret: String = "Roar"
         private func sleep() {}
     }
     ```

## 1.2 为什么要这样设计？
- 提高代码安全性，防止外部误用或依赖内部实现。
- 明确 API 边界，便于团队协作和模块解耦。
- 支持灵活的封装和扩展策略。

## 1.3 实际项目代码示例
```swift
// FrameworkA
open class BaseViewController: UIViewController {
    open func setupUI() {}
}

public class APIClient {
    public func request() {}
}

class InternalHelper {
    func doWork() {}
}

fileprivate class FileHelper {}

class Demo {
    private var cache: [String: Any] = [:]
    private func clearCache() {}
}
```

## 1.4 用户体验与业务价值
- 合理使用访问控制，API 更安全、易用，减少误用和维护成本。
- 便于团队分工，隐藏实现细节，提升代码可维护性。

## 1.5 问题拆解与调试建议
- 如果外部无法访问某成员，优先检查访问修饰符。
- 框架开发时，优先用 public，需支持继承/重写时用 open。
- 内部工具类、辅助方法建议用 internal、fileprivate 或 private。

## 1.6 易混淆点与对比
- **open vs public**：open 可被继承/重写，public 只能访问不能继承。
- **fileprivate vs private**：fileprivate 跨类型同文件可见，private 仅限当前作用域。
- **internal** 是默认级别，不写就是 internal。

---

# 2. English Answer

## 2.1 Concepts & Principles
Swift provides five access control levels to manage the visibility and accessibility of entities:

1. **open**
   - Highest level, only for classes and class members.
   - Can be subclassed/overridden outside the module.
   - Example:
     ```swift
     open class Animal {
         open func speak() {}
     }
     ```

2. **public**
   - Accessible outside the module, but cannot be subclassed/overridden.
   - Example:
     ```swift
     public class Dog {
         public func bark() {}
     }
     ```

3. **internal** (default)
   - Accessible only within the same module.
   - Example:
     ```swift
     class Cat {
         func meow() {}
     }
     ```

4. **fileprivate**
   - Accessible only within the same Swift file.
   - Example:
     ```swift
     fileprivate class Mouse {}
     fileprivate func hide() {}
     ```

5. **private**
   - Accessible only within the enclosing declaration.
   - Example:
     ```swift
     class Lion {
         private var secret: String = "Roar"
         private func sleep() {}
     }
     ```

## 2.2 Why this design?
- Improves code safety, prevents misuse, and clarifies API boundaries.
- Facilitates team collaboration and modularization.
- Supports flexible encapsulation and extension strategies.

## 2.3 Practical Example
```swift
open class BaseViewController: UIViewController {
    open func setupUI() {}
}

public class APIClient {
    public func request() {}
}

class InternalHelper {
    func doWork() {}
}

fileprivate class FileHelper {}

class Demo {
    private var cache: [String: Any] = [:]
    private func clearCache() {}
}
```

## 2.4 User Experience & Business Value
- Proper access control makes APIs safer and easier to use, reducing maintenance costs.
- Hides implementation details, improving maintainability and team collaboration.

## 2.5 Debugging & Troubleshooting
- If a member is inaccessible, check its access modifier first.
- Use public for APIs, open for extensible frameworks, internal/fileprivate/private for internal logic.

## 2.6 Key Distinctions
- **open vs public**: open allows subclassing/overriding, public does not.
- **fileprivate vs private**: fileprivate is visible within the same file, private only within the enclosing scope.
- **internal** is the default level.
