# computerJS

《啊哈算法》书本js代码版(更新中...)

### 桶排序

速度快,但是占内存，实用于排列整数，不适合小数
> 比如排序1-10000以内的数,创建10000一个数组，分别对应1-10000,比如999出现1一次，数组索引999增加一，

```javascript
function barrelSort (arr) {
    const max = Math.max(...arr)
    const barrel = Array(max + 1).fill(0)
    for (let i of arr) {
        barrel[i]++
    }
    let result = []
    for(let _i = 0; _i < barrel.length; _i++) {
        if (barrel[_i]) {
            result = result.concat(Array(barrel[_i]).fill(_i))
        }
    }
    return result
}
var arr = [1,3,4,62,1,5,16,12,435,13,12,54,27,9,99]
console.log(barrelSort(arr))
```

### 冒泡排序

### 快速排序

### 解密QQ号-列队
