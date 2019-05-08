# computerJS

《啊哈算法》书本js代码版(更新中...)

### 桶排序

速度快,但是占内存，实用于排列整数，不适合浮点数
> 比如排序1-10000以内的数,创建10000一个数组，分别对应1-10000,比如999出现1一次，数组索引999增加一，

```javascript
function barrelSort (arr) {
    const max = 435
    const barrel = Array(max + 1).fill(0)
    for (let i of arr) {
        barrel[i]++
    }
    let result = []
    for(let i = 0; i < barrel.length; i++) {
        if (barrel[i]) {
            result = result.concat(Array(barrel[i]).fill(i))
        }
    }
    return result
}
var arr = [1,3,4,62,1,5,16,12,435,13,12,54,27,9,99]
console.log(barrelSort(arr))
```

### 冒泡排序
不浪费内存但是浪费费时间
> 马冒泡排序基本思想：每次比较两个相邻的元素，如果它们顺序错误就交换位置

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

### 快速排序

最常用的排序方法
> 找一个基准数，小于基准数的移动到左边，大于基准数的移动到右边，循环递归

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

### 解密QQ号-列队
新学期开始了，小哈
