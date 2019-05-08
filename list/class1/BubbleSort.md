### 冒泡排序
不浪费内存但是浪费费时间
> 马冒泡排序基本思想：每次比较两个相邻的元素，如果它们顺序错误就交换位置

书本源码（c语言）
```C
#include <stdio.h>

int main () {
    int book[1001], i, j, t, n;
    // 初始化
    for (i = 0; i <= 1000; i++) {
        book[i] = 0
    }
    // 输入一个数n，表示接下来有n个数
    scanf("%d", &n);
    // 循环读入n个数，并进行桶排序
    for (i = 1; i <= n; i++) {
        scanf("%d", &t); // 把每个数读到变量t中
        book[t]++; // 进行计数，对编号为t的桶递增
    }
    // 依次判断编号1000->0的桶
    for (i = 1000; i >= 0; i--) {
        // 出现几次就打印几次
        for (j = 1; j <= book[i]; j++) {
            printf("%d ",i);
        }
    }
    getchar();
    getchar();
    return 0;
}
// 输入
// 10
// 8 100 50 22 15 6 1 1000 999 0

// 输出
// 1000 999 100 50 22 15 8 6 1 0

```



javascript代码

```javascript

function sort (arr) {
    for(let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
var arr = [1,3,4,62,1,5,16,12,435,13,12,54,27,9,99]
console.log(sort(arr))

```