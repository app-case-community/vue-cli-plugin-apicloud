<template>
  <div>
    <div class="empty">{{title}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  onReady () {
    this.title = this.api.pageParam.title + '页'
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
.empty {
  text-align: center;
  padding: 120px 0;
}
</style>
