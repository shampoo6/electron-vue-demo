<template>
  <div class="container">
    <!-- 工具栏 -->
    <div class="toolbar">
      <div class="tool-btns">
        <div class="iconfont icon-caidan"></div>
        <div>Standard</div>
        <div class="iconfont icon-suoxiao"></div>
      </div>
      <div class="iconfont icon-lishi"></div>
    </div>
    <!-- 显示屏 -->
    <div class="monitor">
      <div class="display">
        {{calc.display}}
      </div>
      <div class="current-number">
        {{calc.displayCurrentNum}}
      </div>
    </div>
    <!-- 函数按钮 -->
    <div class="function">
      <div>MC</div>
      <div>MR</div>
      <div>M+</div>
      <div>M-</div>
      <div>MS</div>
      <div>M</div>
    </div>
    <!-- 按钮区域 -->
    <div class="btns">
      <template v-for="(row, idx) in btns" :key="idx">
        <template v-for="(item, idx2) in row" :key="idx2">
          <div v-if="item.op === 'equal'" v-html="item.html" class="equal" @click="calc.btnHandler(item.op)"></div>
          <div v-else v-html="item.html" @click="calc.btnHandler(item.op)"></div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import {Calc} from "@/assets/Calc";

export default {
  name: 'App',
  data() {
    return {
      calc: new Calc(),
      btns: [
        [
          {html: '%', op: ''},
          {html: 'CE', op: ''},
          {html: 'C', op: 'clear'},
          {html: '<span class="iconfont icon-backspace"></span>', op: 'backspace'},
        ],
        [
          {html: '1/x', op: 'reciprocal'},
          {html: '<span>x<sup>2</sup></span>', op: 'sqr'},
          {html: '<span style="font-size: 20px" class="iconfont icon-sqrt"></span>', op: 'sqrt'},
          {html: '<span>&#x00F7;</span>', op: 'div'},
        ],
        [
          {html: '7', op: '7'},
          {html: '8', op: '8'},
          {html: '9', op: '9'},
          {html: 'x', op: 'multi'},
        ],
        [
          {html: '4', op: '4'},
          {html: '5', op: '5'},
          {html: '6', op: '6'},
          {html: '-', op: 'sub'},
        ],
        [
          {html: '1', op: '1'},
          {html: '2', op: '2'},
          {html: '3', op: '3'},
          {html: '+', op: 'add'},
        ],
        [
          {html: '<span class="iconfont icon-zhengfu"></span>', op: 'reverse'},
          {html: '0', op: '0'},
          {html: '.', op: 'point'},
          {html: '=', op: 'equal'},
        ],
      ]
    }
  }
}
</script>

<style>
/* 引入图标库 */
@import '@/assets/iconfont.css';

/* 清空body的默认样式 */
body {
  margin: 0;
}

.container {
  /* 该元素高度为视口高度的100% */
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* 背景色 */
  background-color: #f3f3f3;
}

/* 调试用边框 */
.debug-border {
  border: 6px solid #f00;
  /* 消除边框对内容大小的干扰 */
  box-sizing: content-box;
}

/* 工具栏 */
.toolbar {
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
}

.tool-btns {
  display: flex;
  /* 单元格间距 */
  gap: 16px;
}

/* 显示屏 */
.monitor {
  height: 70px;
  /* 设置字体大小 */
  /*font-size: 32px;*/
  /* 设置字体粗细 */
  /*font-weight: bolder;*/

  /*display: flex;*/
  /*justify-content: flex-end;*/
  /*align-items: center;*/

  padding-right: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.display {
  height: 16px;
}

.current-number {
  /* 设置字体大小 */
  font-size: 32px;
  /* 设置字体粗细 */
  font-weight: bolder;
}

/* 函数 */
.function {
  height: 30px;
  display: flex;
  gap: 2px;
}

.function > div {
  font-size: 12px;
  /* 同时设置上下左右内边距 */
  padding: 8px 12px;
}

/* 按钮区域 */
.btns {
  flex-grow: 1;

  /* 网格布局 */
  display: grid;

  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(4, 1fr);

  /* 单元格间距 */
  gap: 4px;

  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
}

/* 每个按钮的样式 */
.btns > div {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 背景色 */
  background-color: #f9f9f9;
  /* 边框 */
  border: 1px solid #d2d2d2;
  /* 圆角 */
  border-radius: 4px;
}

.icon-caidan {
  position: relative;
  top: 3px;
}

/* 鼠标悬停时 */
.icon-caidan:hover {
  padding: 8px;
  background-color: #e6e6e6;
  border-radius: 8px;
}

.icon-suoxiao {
  position: relative;
  top: 3px;
}

.equal {
  /* 由于背景色样式冲突，可以添加一个 !important 来代表改样式更为重要 */
  background-color: #3b74e9 !important;
  color: #fff;
}
</style>
