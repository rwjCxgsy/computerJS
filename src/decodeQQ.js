function decodeQQ (qq = []) {
    const result = []
    while (qq.length !== 1) {
        result.push(qq.shift())
        qq.push(qq.shift())
    }
    result.push(qq[0])
    return result
}

function decodeQQ2 (qq) {
    let head = 0
    let tail = qq.length
    const result = []
    while (head < tail) {
        debugger
        result.push(qq[head])
        head++
        qq[tail] = qq[head]
        tail++
        head++
    }
    return result
}