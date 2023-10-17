class State {
    // 计算器实例
    calc
    // 状态机，用于修改状态，查询状态
    stateMachine

    constructor(_calc, _stateMachine) {
        this.calc = _calc
        this.stateMachine = _stateMachine
    }

    // op: 点击的按钮字符，例如数字或运算符
    btnHandler(op) {
    }
}

// 输入第一个数字的状态
export class InputNum1State extends State {
    btnHandler(op) {
        if (op === '') return
    }
}

// 输入运算符的状态
export class InputOpState extends State {
    btnHandler(op) {
        if (op === '') return
    }
}

// 输入第二个数字的状态
export class InputNum2State extends State {
    btnHandler(op) {
        if (op === '') return
    }
}

// 计算结束状态
export class CalcOverState extends State {
    btnHandler(op) {
        if (op === '') return
    }
}