<template>
  <div id="wrap" class="flex-wrap flex-vertical">
    <header class="border-b">APICloud</header>
    <div id="main" class="flex-con"></div>
  </div>
</template>
<script>
export default {
  onReady () {
    this.$api.fixStatusBar(this.$api.dom('header'))
    this.api.setStatusBarStyle({
      style: 'dark',
      color: '#6ab494'
    })
    this.api.openFrame({
      name: 'win_home',
      url: 'win_home.html',
      rect: {
        x: 0,
        y: this.$api.dom('header').offsetHeight,
        w: this.api.winWidth,
        h: this.$api.dom('#main').offsetHeight
      }
    })
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
  background-color: #f2f2f2;
  line-height: 42px;
  font-size: 18px;
  text-align: center;
}
.flex-con {
  overflow: auto;
}
</style>
