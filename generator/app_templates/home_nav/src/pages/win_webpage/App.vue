<template>
  <div
    id="wrap"
    class="flex-wrap flex-vertical"
  >
    <header class="border-b">
      <b
        tapmode="hover"
        @click="() => this.api.closeWin()"
        class="ic-back"
      ></b>
      <div class="title"></div>
      <b
        tapmode="hover"
        @click="funActionSheet"
        class="ic-check"
      ></b>
    </header>
    <div
      id="main"
      class="flex-con"
    >

    </div>
  </div>
</template>
<script>
export default {
  onReady () {
    this.$api.fixStatusBar(this.$api.dom('header'))
    this.$api.dom('.title').innerHTML = this.api.pageParam.name
    this.api.openFrame({
      name: 'frm_mine',
      url: './frm_mine.html',
      rect: {
        x: 0,
        y: this.$api.dom('header').offsetHeight,
        w: this.api.winWidth,
        h: this.$api.dom('#main').offsetHeight
      },
      bounces: true,
      pageParam: {
        name: this.api.pageParam.name
      }
    })
  },
  methods: {
    funActionSheet () {
      this.api.actionSheet(
        {
          title: '底部弹出框',
          cancelTitle: '取消',
          destructiveTitle: '红色警告按钮',
          buttons: ['按钮1', '按钮2', '按钮3']
        },
        function () {
          // api.alert({
          //     msg: '你刚点击了'+ret.buttonIndex
          // });
        }
      )
    }
  }
}
</script>
<style>
html,
body {
  font-size: 14px;
  height: 100%;
}
.hover {
  opacity: 0.8;
}

.flex-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.flex-con {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.flex-vertical {
  -webkit-box-orient: vertical;
  -webkit-flex-flow: column;
  flex-flow: column;
}

.border-t,
.border-b {
  position: relative;
}
.border-t:before,
.border-b:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  background: #ddd;
  right: 0;
  height: 1px;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.border-b:after {
  top: auto;
  bottom: 0;
}

#wrap {
  height: 100%;
}
header {
  background-color: #fcfcfc;
  line-height: 42px;
  height: 42px;
  position: relative;
}
header b {
  width: 42px;
  height: 100%;
  display: inline-block;
  position: relative;
  z-index: 1;
  background: url() no-repeat center;
  background-size: 70% auto;
}
header b.ic-back {
  background-image: url(./image/ic-back.png);
}
header b.ic-check {
  background-image: url(./image/ic-check.png);
  float: right;
}
header .title {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 18px;
}
</style>
