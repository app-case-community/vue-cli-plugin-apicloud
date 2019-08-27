<template>
  <div></div>
</template>
<script>
export default {
  onReady() {
    this.api.openSlidLayout(
      {
        type: "left",
        leftEdge: 60,
        fixedPane: {
          name: "fixed",
          url: "fixed.html"
        },
        slidPane: {
          name: "slide",
          url: "slide.html"
        }
      },
      function() {}
    );
  }
};
</script>
<style>
html {
  height: 100%;
  background-color: #fff;
}
body {
  background-color: #fff;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-flex-flow: column;
  flex-flow: column;
}
</style>