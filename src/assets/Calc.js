import {StateMachine} from "@/assets/StateMachine";

export class Calc {
    // 状态机
    stateMachine
    // 第一个数字
    num1 = ''
    // 第二个数字
    num2 = ''
    // 需要两个数的操作
    op = ''
    // 当前数
    currentNum = '0'
    // 显示的当前数
    displayCurrentNum = '0'
    // 显示的字符串
    display = ''

    // 是否点过等于按钮
    equalPressed = false

    constructor() {
        this.stateMachine = new StateMachine(this)
    }

    // 按钮点击事件
    btnHandler(op) {
        // this.stateMachine.state.btnHandler(op)
        if (op === '') return

        // 数字的情况
        if (!isNaN(Number(op))) this.numberHandler(op)
        else if (op === 'clear') this.clear()
        else if (op === 'backspace') this.backspace()
        else if (op === 'equal') this.equal()
        // 其他运算符还能在这里使用 else if 分别判断
        else {
            // 四则运算
            let _op = op === 'add' ? '+' :
                op === 'sub' ? '-' :
                    op === 'multi' ? '*' :
                        op === 'div' ? '/' : 'unknown'
            this.opHandler(_op)
        }
    }

    clear() {
        this.num1 = ''
        this.num2 = ''
        this.op = ''
        this.currentNum = '0'
        this.displayCurrentNum = '0'
        this.display = ''
    }

    backspace() {
        if (this.currentNum === '0') return
        if (this.currentNum.length > 1) this.currentNum = this.currentNum.substring(0, this.currentNum.length - 1)
        else this.currentNum = '0'
        this.displayCurrentNum = this.currentNum
    }

    // 数字按钮
    numberHandler(op) {
        if (this.currentNum === '0') this.currentNum = op
        else this.currentNum += op
        this.displayCurrentNum = this.currentNum
        if (this.op !== '') this.num2 = this.currentNum
    }

    // 四则运算
    opHandler(op) {
        if (this.equalPressed) {
            this.num2 = ''
            this.equalPressed = false
        }

        if (this.op === '') {
            console.log(1)
            this.num1 = this.currentNum
            this.currentNum = '0'
            this.op = op
            this.display = `${this.num1} ${this.op}`
        } else if (this.num2 === '') {
            console.log(2)
            this.op = op
            this.display = `${this.num1} ${this.op}`
        } else {
            console.log(3)
            this.num1 = eval(`${this.num1}${this.op}${this.num2}`)
            this.displayCurrentNum = this.num1
            this.num2 = ''
            this.currentNum = '0'
            this.display = `${this.num1} ${this.op}`
            this.op = op
        }
    }

    // 等于
    equal() {
        if (this.num2 === '') return
        this.display = `${this.num1} ${this.op} ${this.num2} =`
        this.num1 = eval(`${this.num1}${this.op}${this.num2}`)
        this.displayCurrentNum = this.num1
        this.currentNum = '0'
        this.equalPressed = true
    }
}