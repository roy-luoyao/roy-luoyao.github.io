

```markdown
在 Swift 中，类（  class  ）是引用类型，这意味着当你将一个类实例赋值给一个变量时，实际上只是复制了对同一个实例的引用，而不是复制整个对象。 如果用struct 来修饰ListNode 呢
# 在 Swift 中使用 `struct` 与 `class` 定义链表节点的区别

## 使用 `class` 定义 `ListNode`

```swift
public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init(_ val: Int) { self.val = val; self.next = nil }
}
```



特点

• 引用类型：

• 当你将一个`ListNode`实例赋值给另一个变量时，实际上只是复制了对同一个实例的引用。

• 修改一个引用的值会影响所有引用该实例的变量。


• 链表操作：

• 在链表操作中，引用类型非常适合，因为链表的节点通常需要通过指针来连接和操作。

• 例如，`curr.next = ListNode(sum % 10)`会创建一个新的节点，并将其链接到当前节点的`next`属性上。


使用`struct`定义`ListNode`


```swift
public struct ListNode {
    public var val: Int
    public var next: ListNode?
    public init(_ val: Int) { self.val = val; self.next = nil }
}
```



特点

• 值类型：

• 当你将一个`ListNode`实例赋值给另一个变量时，实际上会创建一个新的副本。

• 修改一个副本的值不会影响其他副本。


• 链表操作：

• 在链表操作中，值类型可能会导致一些问题，因为每次赋值都会创建一个新的副本。

• 例如，`curr.next = ListNode(sum % 10)`会创建一个新的节点，但`curr`本身是一个值类型，因此`curr`的修改不会影响原来的链表结构。


示例对比


使用`class`的链表操作


```swift
var node1 = ListNode(1)
var node2 = ListNode(2)
node1.next = node2

node2.val = 3
print(node1.next?.val ?? 0) // 输出 3
```



• `node1.next`和`node2`指向同一个实例，因此修改`node2.val`会影响`node1.next?.val`。


使用`struct`的链表操作


```swift
var node1 = ListNode(1)
var node2 = ListNode(2)
node1.next = node2

node2.val = 3
print(node1.next?.val ?? 0) // 输出 2
```



• `node1.next`和`node2`是两个独立的副本，因此修改`node2.val`不会影响`node1.next?.val`。


为什么链表通常使用`class`而不是`struct`？


• 链表的特性：

• 链表是一种动态数据结构，节点之间通过指针连接。

• 引用类型（`class`）更适合这种场景，因为引用类型允许节点之间共享相同的实例。


• 性能和内存管理：

• 使用`class`时，节点的连接和操作只需要调整指针，而不需要复制整个对象。

• 使用`struct`时，每次赋值都会创建一个新的副本，这可能导致不必要的内存开销和性能问题。


• 链表操作的复杂性：

• 在链表操作中，经常需要修改节点的`next`指针。

• 使用`class`时，这些操作是直接的，因为`next`指针指向的是同一个实例。

• 使用`struct`时，每次修改`next`指针都需要创建新的副本，这会使代码变得复杂且难以维护。


总结

• 使用`class`：

• 适合链表这种需要通过指针连接和操作的动态数据结构。

• 引用类型允许节点之间共享相同的实例，操作效率高。


• 使用`struct`：

• 适合值类型，例如简单的数据结构或不可变对象。

• 在链表操作中，值类型会导致不必要的内存开销和复杂的代码逻辑。

因此，在实现链表时，推荐使用`class`而不是`struct`。
