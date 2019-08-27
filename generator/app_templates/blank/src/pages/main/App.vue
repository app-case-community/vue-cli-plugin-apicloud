<template>
  <div>
    <label id="con">Hello APP</label>
    <div id='sys-info'></div>
  </div>
</template>
<script>
export default {
    onReady () {
        var ver = this.api.version;
		var sType = this.api.systemType;
		var sVer = this.api.systemVersion;
		var id = this.api.deviceId;
		var model = this.api.deviceModel;
		var name = this.api.deviceName;
		var cType = this.api.connectionType;
		var winName = this.api.winName;
		var winWidth = this.api.winWidth;
		var winHeight = this.api.winHeight;
		var frameName = this.api.frameName || '';
		var frameWidth = this.api.frameWidth || '';
		var frameHeight = this.api.frameHeight || '';

		var str = '<ul>';
		str += '<li>引擎版本信息: ' + ver + '</li>';
		str += '<li>系统类型: ' + sType + '</li>';
		str += '<li>系统版本: ' + sVer + '</li>';
		str += '<li>设备标识: ' + id + '</li>';
		str += '<li>设备型号: ' + model + '</li>';
		str += '<li>设备名称: ' + name + '</li>';
		str += '<li>网络状态: ' + cType + '</li>';
		str += '<li>主窗口名字: ' + winName + '</li>';
		str += '<li>主窗口宽度: ' + winWidth + '</li>';
		str += '<li>主窗口高度: ' + winHeight + '</li>';
		str += '<li>子窗口名字: ' + frameName + '</li>';
		str += '<li>子窗口宽度: ' + frameWidth + '</li>';
		str += '<li>子窗口高度: ' + frameHeight + '</li>';
		str += '</ul>';

		this.$api.byId('sys-info').innerHTML = str;
    }
}
</script>
<style>
#con {
  margin: 10px;
  font-size: 24px;
}
ul {
  margin-bottom: 10px;
}
ul li {
  margin: 5px 10px;
  padding: 5px;
  color: #000;
  word-wrap: break-word;
}
</style>