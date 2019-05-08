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

// export default quicksort