import React,{useState,useEffect} from 'react';
import './index.css'
import './md.css'
import init from './init.md'
var markdown_config = {
  html: true,        // Enable HTML tags in source
  xhtmlOut: true,        // Use '/' to close single tags (<br />).
  breaks: true,        // Convert '\n' in paragraphs into <br>
  langPrefix: 'lang-',  // CSS language prefix for fenced blocks. Can be
  linkify: false,        // 自动识别url
  typographer: true,
  quotes: '“”‘’'
}
var markdown = require('markdown-it')(markdown_config);
var a = '```js var a = 2```'

var b ={"body": "vue的一些常用知识点和一些小技巧\r\n## Router\r\n### 传参\r\n>都知道query和params都可以用来传参，那他们是分别以什么方式去传参呢？有什么区别\r\n```javascript\r\n//query传参\r\nthis.$router.push({\r\n    path:'/index',\r\n    query:{\r\n       id:'001'    \r\n    }\r\n})\r\n//params传参\r\nthis.$router.push({\r\n    name:'index',\r\n    params:{\r\n       id:'001'    \r\n    }\r\n})\r\n```\r\n看完上面两种方式，应该能懂了，query传参是根据path来跳转，而params是根据路由的name来跳转，而且直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示",

"content":"``` js\nvar const = function const(data,value){\n  window.data = value\n  Object.defineProperty(window,data,{\n    enumerable:false,\n    configurable:false,\n    get:function(){\n      return value\n    },\n    set:function(){\n      if(data!==value){\n        throw new TypeError('Assignment to constant variable.')\n      }else{\n        return value\n      }\n    }\n  })\n}\n\n_const('a',10)\nconsole.log(a)//10\na=20  //Assignment to constant variable.\n```"

}
const initSource = `
# React Markdown Editor

* A list

Some **bold** and _italic_ text

> A quote...

By [Jed Watson](https://github.com/JedWatson) and [Joss Mackison](https://github.com/jossmac)

### 特点
* 轻量、基于React
* UI可配置, 如只显示编辑区或预览区
* 支持自定义markdown语法解析器,语法高亮等
* 支持常用的markdown编辑功能，如加粗，斜体等等...
* 支持编辑区和预览区同步滚动
${a}
${b.body}
${b.content}
`
function SimpleMarkdown (props) {
    // props.history.push('/note-info/123')
  const [init,setInit] = useState(initSource)

  useEffect(()=>{
    _render(initSource,function(res){
      console.log('%c =======================================================',"color:red")
      console.log(res)
      setInit(res)
    })
  },[])
  return (
    <div className="simple-md-wrapper markdown-body">
      <h1>SimpleMarkdown</h1>
      <div dangerouslySetInnerHTML={{ __html:init }}></div>
    </div>
  )
}


const _render = (src,func)=>{
  var res = markdown.render(src);
 
  func(res)
}
export default React.memo (SimpleMarkdown);