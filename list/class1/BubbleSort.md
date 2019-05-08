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