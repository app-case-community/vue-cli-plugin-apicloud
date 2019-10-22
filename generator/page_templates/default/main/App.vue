<template>
  <div id="wrap" class="flex-wrap flex-vertical" >
    <header class="border-b" >
      <b @click="doBack" class="ic-back"></b>
      <div class="title">{{title}}</div>
      <b @click="doFun"  class="ic-check"></b>
    </header>
    <div id="main" class="flex-con" ></div>
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
    this.title = this.api.pageParam.title
    this.$api.fixStatusBar(this.$api.dom('header'))
    this.api.openFrame({
      name: '<%=frm %>',
      url: './<%=frm %>.html',
      rect: {
        x: 0,
        y: this.$api.dom('header').offsetHeight,
        w: this.api.winWidth,
        h: this.$api.dom('#main').offsetHeight
      },
      bounces: true,
      pageParam: {
        title: this.title
      }
    })
  },
  methods: {
    doBack () {
      this.api.closeWin()
    },
    doFun () {

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
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAY1BMVEX///9YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFgLuTaRAAAAIXRSTlMAABuHSCHk/2/8J/MY9kIkLertzPXSydveHuHwA9gPVBIWOBGIAAABDklEQVRYw+3X2Q6CMBCFYUGgiuKKC7i+/1OKFImlUxJnzp3z36g3X2IC7cxkommaphFFZPE0aT9RYJoZMwOCb8+KGNB6Zp6DwM4ziyUG/HjFCvOXHQ8Aup4cHHhicOhJQc8Tgr4nAwlPBFKeBCQ9AUh7fHBNe2ww5HHBoMcEwx4PzMMeC9xsrWd2e6/y+1vZ1fwaA3vvl8bAgwGDRzQYn8BgFJ/BYC8WCeaxGRWZr15Y5B4OQZF9fIVE/gEbEAVXAC1KLilSFF2jFSHKLnpCFI4ivigdljxRPM4NRfnAORABI7ErIoZ2R4SsFVVtxcsVtfh04g23mrVinQKXx0bMUuQ2Gt0fT+5jo2ma9re9ALA0HKKwjYGnAAAAAElFTkSuQmCC);
}
header b.ic-check {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAACVBMVEX///9YWFhYWFjtK/ESAAAAA3RSTlMAAP/XdCtTAAAANklEQVRIx+3TsQ0AIAwDwcD+QyOhTEAQpLjrv7IcAZ+MdBbPTfwmLk0lFnuVP4v9Wdzuz3DBAgKIAa1qsMp7AAAAAElFTkSuQmCC);
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
