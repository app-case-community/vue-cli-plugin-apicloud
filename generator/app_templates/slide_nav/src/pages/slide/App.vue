<template>
    <header>
        <div class="header">
            <a class="menu" tapmode="" @click="sliding"></a>
            <div class="title" >APICloud</div>
            <a></a>
        </div>
    </header>
</template>
<script>
export default {
  onReady () {
    this.api.addEventListener({
      name: 'keyback'
    }, () => {
      this.api.closeWidget()
    })
  },
  methods: {
    sliding () {
      this.api.openSlidPane({ type: 'left' })
    }
  }
}
</script>
<style>
header {
    background-color: #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
}
.header {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.header a{
    display: block;
    padding: 20px;
}
.title {
    line-height:40px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
}
.header .menu {
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("./image/menu.png");
}
</style>
