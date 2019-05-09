void function () {
    let desk = []
    let A = []
    let B = []
    
    let play = 1 // 出牌方 1：A, 2: B
    
    // 初始化双方牌
    for (let i = 0; i < 5; i++) {
        A.push((Math.random() * 5 | 0 ) + 1);
        B.push((Math.random() * 5 | 0 ) + 1);
    }
    
    
    console.log('A 的牌是：', A.join());
    console.log('B 的牌是：', B.join());
    
    function isEnd () {
        if (!A.length) {
            console.log('B win')
            return true
        } else if (!B.length) {
            console.log("A win")
            return true
        }
        return false
    }
    
    function checkCard () {
        const {length} = desk
        const last  = desk[length - 1]
        for (let i = 0; i < length - 1; i++) {
            if (desk[i] === last) {
                let takeCard = desk.slice(i)
                console.log('有人要赢了', takeCard.join())
                if (play === 1) {
                    A = [...A, ...takeCard]
                } else {
                    B = [...B, ...takeCard]
                }
                console.log("%cA=>", 'color: green', A.join())
                console.log("%cB=>", 'color: blue', B.join())
                console.log('-------------------------')
                desk = desk.slice(0, i)
                return
            }
        }
    }
    
    function startGame () {
        let walk = setInterval(() => {
            if (isEnd()) {
                clearInterval(walk)
                walk = null
                return false
            }
            // A 出牌
            if (play === 1) {
                desk.push(A.shift())
                console.log("%cA=>", 'color: green', A.join())
            }
            if (play === 2) {
                desk.push(B.shift())
                console.log("%cB=>", 'color: blue', B.join())
            }
            console.log('%c桌面上的牌=>', 'color: red',desk.join())
            checkCard()
            play = play === 1 ? 2 : 1
        }, 1000)
    }
    startGame()
} ()