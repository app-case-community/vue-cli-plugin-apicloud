# vue-cli-plugin-apicloud
apicloud for vue-cli plugin

## 使用

* 安装

    使用前提：使用vue-cli3 创建的项目

    ```js
    vue add apicloud
    ```

* 选择模板

    ![](./vender/WX20190830-132749@2x.png)

* vue-cli-service扩展命令

    ```bash
    vue-cli-service ac <command> [options]
    ```

    * vue-cli-service ac add NewPage --type [default|blank]
        * default ：默认模板，也就是page+frame模式，
        * blank ：空白页


## Vue.prototype 扩展

### api

    替代window.api

### $api

    替代window.$api

### $page

* 方法

    * open

        * 参数
            * url: 打开页面路径，比如hello.html (可简写hello)
            * opts: 
            ```js
            {
                title: 'New Page'
            }
            ```
    * close
        
        关闭当前页面

## 注意

* 不支持tapmode

    由于tapmode需要元素定义onclick，这与vue相冲突。默认使用fastclick替代后解决
    