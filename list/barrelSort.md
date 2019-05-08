### 桶排序

速度快,但是占内存，实用于排列正整数，不适合浮点数,负数
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