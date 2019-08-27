<template>
  <div
    id="wrap"
    class="flex-wrap flex-vertical"
  >
    <header>
      <ul>
        <li
          v-for="(tab, i) in tabs"
          :key="'title'+i"
          :class="['border-b', tab.active ? 'active':'']"
        >{{tab.title}}</li>
      </ul>
    </header>
    <div
      id="main"
      class="flex-con"
    >
    </div>
    <div
      id="footer"
      class="border-t"
    >
      <ul class="flex-wrap">
        <li
          v-for="(tab, i) in tabs"
          :key="'tab'+i"
          :class="['flex-con', tab.active ? 'active':'']"
          @click="randomSwitchBtn(i)"
        >{{tab.title}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabs: [
        {
          title: '云API',
          page: 'frame0.html',
          active: true
        },
        {
          title: '端API',
          page: 'frame1.html',
          active: false
        },
        {
          title: '开发',
          page: 'frame2.html',
          active: false
        },
        {
          title: '文档',
          page: 'frame3.html',
          active: false
        }
      ]
    }
  },
  onReady () {
    this.$api.fixStatusBar(this.$api.dom('header'))
    this.api.setStatusBarStyle({
      style: 'dark',
      color: '#6ab494'
    })
    this.funIniGroup()
  },
  computed: {
    tabIdx () {
      return this.tabs.findIndex(it => it.active)
    }
  },
  methods: {
    funIniGroup () {
      var frames = []
      for (var i = 0, len = this.tabs.length; i < len; i++) {
        var page = this.tabs[i].page.endsWith('.html') ? this.tabs[i].page : `${this.tabs[i].page}.html`
        frames.push({
          name: 'frame' + i,
          url: page,
          bgColor: 'rgba(0,0,0,.2)',
          bounces: true
        })
      }
      this.api.openFrameGroup(
        {
          name: 'group',
          scrollEnabled: false,
          rect: {
            x: 0,
            y: this.$api.dom('header').offsetHeight,
            w: this.api.winWidth,
            h: this.$api.dom('#main').offsetHeight
          },
          index: 0,
          frames: frames
        },
        // eslint-disable-next-line no-unused-vars
        function (ret, err) {}
      )
    },
    randomSwitchBtn (idx) {
      this.tabs[this.tabIdx].active = false
      this.tabs[idx].active = true
      this.api.setFrameGroupIndex({
        name: 'group',
        index: idx
      })
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
  background-color: #f2f2f2;
}
header ul li {
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: none;
  color: #323237;
  position: relative;
  font-size: 18px;
}
header ul li.active {
  display: block;
}
#footer {
  background-color: #f2f2f2;
}
#footer ul li {
  padding-top: 36px;
  padding-bottom: 4px;
  background: url() no-repeat center 2px;
  background-size: auto 30px;
  text-align: center;
}
#footer ul li.active {
  color: #6ab494;
}
#footer ul li:nth-child(1) {
  background-image: url(./assets/bottombtn0101.png);
}
#footer ul li:nth-child(2) {
  background-image: url(./assets/bottombtn0201.png);
}
#footer ul li:nth-child(3) {
  background-image: url(./assets/bottombtn0301.png);
}
#footer ul li:nth-child(4) {
  background-image: url(./assets/bottombtn0401.png);
}
#footer ul li:nth-child(1).active {
  background-image: url(./assets/bottombtn0102.png);
}
#footer ul li:nth-child(2).active {
  background-image: url(./assets/bottombtn0202.png);
}
#footer ul li:nth-child(3).active {
  background-image: url(./assets/bottombtn0302.png);
}
#footer ul li:nth-child(4).active {
  background-image: url(./assets/bottombtn0402.png);
}
.flex-con {
  overflow: auto;
}
</style>
