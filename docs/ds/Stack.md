---
sidebar: auto
---
# 栈

> 栈是一种先入后出的数据结构。只能通过栈顶进行入栈和出栈操作。

## 栈的实现和基础操作

> 此部分代码在 Stack.ts 中

```typescript
class Stack<T> {
    // 栈的存储空间
    data: Array<T>
    // 栈顶元素索引
    top: number

    constructor() {
        this.data = []
        this.top = 0
    }
    // 入栈
    public push (item: any):void {
        this.data.push(item)
        this.top++
    }
    // 出栈
    public pop (): T {
        this.top--
        return  this.data.pop()
    }
    // 返回栈顶的元素
    public peek (): T {
        return this.data[this.top - 1]
    }
    // 判断栈是否为空
    public isEmpty (): Boolean {
        return this.top === 0 
    }
    // 返回栈的大小
    public size (): number {
        return this.top
    }
    // 清空栈
    public clear (): void {
        delete this.data
        this.top = 0
        this.data = []
    }
    // 打印栈
    public print (): void {
        console.log(this.data.toString())
    }
}
```



## 栈的入栈和出栈序列检测

> 此部分代码在 StackCheck.ts 中

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。

例如 入栈顺序为 [1,2,3,4,5] 那么 [4,3,5,2,1]是可以为出栈序列的，但[4,3,5,1,2]却不是

```typescript
/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。
 * 
 * @param {Array} pushOrder 
 * @param {Array} popOrder 
 * @return {Boolean}
 */
function StackCheck<T> (pushOrder: Array<T>, popOrder: Array<T>): Boolean {
    // 如果长度不同，则直接证明不对应
    if (pushOrder.length !== popOrder.length) {
        return false
    }
    // 做一个辅助栈
    const stack = new Stack()
    // 设置入序指针和出序指针
    let push = 0, pop = 0;
    // 将入栈序列元素一次进入辅助栈
    // 检查辅助栈顶元素和出栈序列栈顶元素是否一致：
    // 元素一致，弹出辅助栈元素，出栈序列指针后移
    // 不一致，则证明不匹配
    while(pop < popOrder.length) {
        for(; push < pushOrder.length && popOrder[pop] !== stack.peek(); push++) {
            stack.push(pushOrder[push])
        }
        // 如果插入完毕但无匹配 则证明部位匹配的序列
        if (popOrder[pop] !== stack.peek()) {
            return false
        }
        // 若一致 则辅助栈弹出栈元素 
        stack.pop()
        pop++
    }
    return true
}
```
