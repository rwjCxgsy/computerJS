# 小猫钓鱼

游戏规则
> 将一副扑克牌分成两份，每人拿一份，小哼先拿出手中第一张牌放到桌面上，然后小哈也拿出一张扑克牌，并放在小哼刚刚打出的扑克牌上面，两人交替出牌，出牌时，如果某人打出的牌与桌面某张牌相同，即可将两张相同的牌中间所夹的牌全部取走，当任意一个人牌出完，游戏结束。

    桌面上的牌相当于栈
    手中的牌相当于列队

## javaSxript 代码

```javascript

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
            console.log("%cB=>", 'color: blue', B.join())
            return true
        } else if (!B.length) {
            console.log("A win")
            console.log("%cA=>", 'color: green', A.join())
            return true
        }
        return false
    }
    
    function checkCard () {
        const {length} = desk
        const last  = desk[length - 1]
        const i = desk.indexOf(last)
        if (i === -1) {
            return false
        }
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

```