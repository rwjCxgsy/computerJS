# 快速排序

最常用的排序方法
> 找一个基准数，小于基准数的移动到左边，大于基准数的移动到右边，循环递归

## 书本源码（c语言）

```c
# include <stdio.h>

int a[101], n; // 定义全局变量

int quickSort (int left, int right) {
    int i, j, t, temp;
    if (left > right) {
        return;
    }
    temp = a[left]; // temp 中就是存在的基准数
    i = left;
    j = right;

    while (i != j) {

        // 从右往左
        while (a[j] >= temp && i < j) {
            j--;
        }
        // 从左往右
        while (a[i] <= temp && i < j) {
            i++;
        }
        if (i < j) {
            t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }
    // 将基数归为
    a[left] = a[i];
    a[i] = temp;
    // 递归过程
    quickSort(teft, i - 1);
    quickSort(i + 1, right);
    return 0;
}

int main () {
    int i, j;
    // 读取数据
    scanf('%d', &n);
    for (i = 1; i <= n; i++) {
        printf("%d", a[i]);
    }
    quickSort(1, n);
    getchar();
    getchar();
    return 0;
}
```

## JavaScript

```javascript
function quicksort(arr) {
    function sort(left, right) {
        var i, j, t, temp;
        if (left > right)
            return;

        temp = arr[left]; //temp中存的就是基准数
        i = left;
        j = right;
        while (i != j) {
            //顺序很重要，要先从右边开始找
            while (arr[j] >= temp && i < j) {
                j--;
            }

            //再找右边的
            while (arr[i] <= temp && i < j) {
                i++;
            }
            //交换两个数在数组中的位置
            if (i < j) {
                t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }

        //最终将基准数归位
        arr[left] = arr[i];
        arr[i] = temp;
        sort(left, i - 1); //继续处理左边的，这里是一个递归的过程
        sort(i + 1, right); //继续处理右边的 ，这里是一个递归的过程
    }
    sort(0, arr.length - 1)
    return arr
}
```