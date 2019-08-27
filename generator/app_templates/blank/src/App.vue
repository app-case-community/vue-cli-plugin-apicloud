<template>
    <div id="wrap">
        <div id="header">
            <h1>APICloud</h1>
        </div>
        <div id="main" class="flex-con">

        </div>
        <div id="footer">
            <h5>Copyright &copy;<span>{{year}}</span> </h5>
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return  {
        year: new Date().getFullYear()
      }
    },
    onReady () {
        var header = this.$api.byId('header');
        // this.$api.fixStatusBar(header);
        var headerPos = this.$api.offset(header);
        var main = this.$api.byId('main');
        var mainPos = this.$api.offset(main);
        this.api.openFrame({
            name: 'main',
            url: 'main.html',
            bounces: true,
            rect: {
                x: 0,
                y: headerPos.h,
                w: 'auto',
                h: mainPos.h
            }
        });
    }
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#wrap {
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-flex-flow: column;
  flex-flow: column;
}
#header {
  text-align: center;
  background-color: #81a9c3;
  color: #fff;
  width: 100%;
}
#header h1 {
  font-size: 20px;
  height: 44px;
  line-height: 44px;
  margin: 0em;
  color: #fff;
}
#main {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
#footer {
  height: 30px;
  line-height: 30px;
  background-color: #81a9c3;
  width: 100%;
  text-align: center;
}
#footer h5 {
  margin: 0;
  padding: 0;
  color: white;
}
.con {
  font-size: 28px;
  text-align: center;
}
.flex-con {
  overflow: auto;
}
</style>
