ucenter


1、关于axios跨域问题

module.exports = {
    publicPath:'./',//静态资源包打包为相对路径
    outputDir:'dist',//输出文件
    devServer:{
        open:false,
        host:'0.0.0.0',
        port:9090,
        hot:true,
        proxy: {
            '/api': {
              target:'http://api.wpbom.com', // 你请求的第三方接口
              changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
              pathRewrite:{  // 路径重写，
                '^/Api': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.wpbom.com这个地址的时候直接写成/Api即可。
              }
            }
        },  
    }
}







## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

codemiorr编辑器常用api
editor.refresh();刷新编辑器

editor.setOption('lineWrapping', true);设置自动换行

editor.setSize('auto', 'auto');设置自适应高度

getValue():获取编辑器文本内容

setValue(text):设置编辑器文本内容

//text必须是string，如果是json格式需要先用JSON.stringify转换

getRange({line,ch},{line,ch}):获取指定范围内的文本内容第一个对象是起始坐标，第二个是结束坐标

replaceRange(replaceStr,{line,ch},{line,ch}):替换指定区域的内容

getLine(line)：获取指定行的文本内容

lineCount():统计编辑器内容行数

firstLine():获取第一行行数，默认为0，从开始计数

lastLine():获取最后一行行数

getLineHandle(line):根据行号获取行句柄

getSelection():获取鼠标选中区域的代码

replaceSelection(str):替换选中区域的代码

setSelection({line:num,ch:num1},{line:num2,ch:num3}):设置一个区域被选中

somethingSelected()：判断是否被选择

getEditor()：获取CodeMirror对像

undo()：撤销

redo():回退







focus()：给编辑器焦点
getInputField():返回编辑器的输入字段

