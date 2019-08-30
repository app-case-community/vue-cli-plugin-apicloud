<template>
  <div
    id="wrap"
    class="flex-wrap flex-vertical"
  >
    <div class='swipe'>
      <div class='swipe-wrap'>
        <div class="swipe-con">
          <img
            src="./image/api_100.png"
            alt=""
          >
        </div>
        <div class="swipe-con">
          <img
            src="./image/api_100.png"
            alt=""
          >
        </div>
        <div class="swipe-con">
          <img
            src="./image/api_100.png"
            alt=""
          >
        </div>
        <div class="swipe-con">
          <img
            src="./image/api_100.png"
            alt=""
          >
        </div>
        <div class="swipe-con">
          <img
            src="./image/api_100.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <div
      id="main"
      class="flex-wrap flex-con"
    >
      <div class="flex-con flex-wrap flex-vertical">
        <div
          @click="funOpenArticle(1)"
          class="flex-wrap flex-con flex-2 layout-wrap"
        >
          <div class="flex-con layout ic-hot">
            <h6>标题1</h6>
            <p>简介</p>
          </div>
        </div>
        <div
          @click="funOpenArticle(2)"
          class="flex-wrap flex-con flex-2 layout-wrap"
        >
          <div class="flex-con layout ic-tag">
            <h6>标题2</h6>
            <p>简介</p>
          </div>
        </div>
        <div
          @click="funOpenArticle(3)"
          class="flex-wrap flex-con layout-wrap"
        >
          <div class="flex-con layout  ic-article">
            <h6>标题3</h6>
            <p>简介</p>
          </div>
        </div>
      </div>
      <div class="flex-wrap flex-con flex-vertical">
        <div
          @click="funOpenArticle(4)"
          class="flex-wrap flex-con layout-wrap"
        >
          <div class="flex-con layout ic-coffee">
            <h6>标题4</h6>
            <p>简介</p>
          </div>
        </div>
        <div
          @click="funOpenArticle(5)"
          class="flex-wrap flex-con flex-2 layout-wrap"
        >
          <div class="flex-con layout ic-shop">
            <h6>标题5</h6>
            <p>简介</p>
          </div>
        </div>
        <div
          @click="funOpenArticle(6)"
          class="flex-wrap flex-con layout-wrap"
        >
          <div class="flex-con layout ic-like">
            <h6>标题6</h6>
            <p>简介</p>
          </div>
        </div>
        <div class="flex-wrap flex-con">
          <div
            @click="funOpenArticle(7)"
            class="flex-wrap flex-con layout-wrap"
          >
            <div class="flex-con layout ic-lable">
              <h6>标题7</h6>
              <p>简介</p>
            </div>
          </div>
          <div
            @click="funOpenArticle(8)"
            class="flex-wrap flex-con layout-wrap"
          >
            <div class="flex-con layout ic-more">
              <h6>标题8</h6>
              <p>简介</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    // eslint-disable-next-line no-new
    new window.Swipe(this.$api.dom('.swipe'), {
      speed: 400,
      auto: 3000,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
      transitionEnd: function () {}
    })
  },
  methods: {
    funOpenArticle (idx) {
      this.api.openWin({
        name: 'win_webpage',
        url: './win_webpage.html',
        pageParam: {
          name: '标题' + idx
        }
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
.swipe {
  overflow: hidden;
  position: relative;
}
.swipe-wrap {
  overflow: hidden;
  position: relative;
}
.swipe-wrap .swipe-con {
  float: left;
  position: relative;
}
.swipe-wrap .swipe-con img {
  width: 100%;
  vertical-align: middle;
}
#main {
  padding: 2px;
  background-color: #e5e5e5;
}
#main .flex-vertical .layout {
  background: #e66961 url() right bottom no-repeat;
  margin: 0.3rem;
  padding: 0.3rem;
  background-size: auto 50%;
  line-height: 2rem;
  color: white;
  font-size: 1.8rem;
}
#main .flex-vertical .layout p {
  font-size: 1rem;
}
#main .flex-vertical .layout.ic-hot {
  background-image: url(./image/ic-hot.png);
}
#main .flex-vertical .layout.ic-article {
  background-image: url(./image/ic-article.png);
  background-color: #6ab494;
}
#main .flex-vertical .layout.ic-tag {
  background-image: url(./image/ic-tag.png);
  background-color: #9e9a8d;
  font-size: 1.6rem;
}
#main .flex-vertical .layout.ic-coffee {
  background-image: url(./image/ic-coffee.png);
  background-color: #ebd275;
  font-size: 1.6rem;
}
#main .flex-vertical .layout.ic-shop {
  background-image: url(./image/ic-shop.png);
  background-color: #6ab494;
}
#main .flex-vertical .layout.ic-like {
  background-image: url(./image/ic-like.png);
  background-color: #d8c09d;
  font-size: 1.6rem;
}
#main .flex-vertical .layout.ic-lable {
  background-image: url(./image/ic-lable.png);
  font-size: 1.2rem;
}
#main .flex-vertical .layout.ic-more {
  background-image: url(./image/ic-more.png);
  background-color: #ebd275;
  font-size: 1.2rem;
  background-size: 50% auto;
  background-position: center right;
}
.flex-2 {
  -webkit-box-flex: 2;
  -webkit-flex: 2;
  flex: 2;
}
.hover {
  opacity: 0.8;
}
</style>
