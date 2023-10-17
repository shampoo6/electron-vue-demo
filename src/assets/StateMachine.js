import {InputNum1State, InputNum2State, InputOpState, CalcOverState} from "@/assets/State";

export class StateMachine {
    // 计算器
    calc
    // 当前状态
    state
    #states

    constructor(_calc) {
        this.calc = _calc
        this.#states = {}
        this.#states[InputNum1State.name] = new InputNum1State(this.calc, this)
        this.#states[InputNum2State.name] = new InputNum2State(this.calc, this)
        this.#states[InputOpState.name] = new InputOpState(this.calc, this)
        this.#states[CalcOverState.name] = new CalcOverState(this.calc, this)
        this.switchState(InputNum1State)
    }

    // 切换状态
    // _state: 类名, 构造器
    switchState(_state) {
        this.state = this.#states[_state.name]
    }


}