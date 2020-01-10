import React,{useState,useEffect} from 'react';
import './index.css'
import './md.css'
import {

  loadLink,
  loadScript,

} from './lib/core/extra-function.js'
import hljsCss from './lib/core/hljs/lang.hljs.css.js'
import hljsLangs from './lib/core/hljs/lang.hljs.js'
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
var mihe = require('markdown-it-highlightjs-external');
var missLangs = {};
var needLangs = [];
var hljs_opts = {
  hljs: 'auto',
  highlighted: true,
  langCheck: function(lang) {
      if (lang && hljsLangs[lang] && !missLangs[lang]) {
          missLangs[lang] = 1;
          needLangs.push(hljsLangs[lang])
      }
  }
};
markdown.use(mihe, hljs_opts)
var a = '```js var a = 2```'

var b ={"body": "vue的一些常用知识点和一些小技巧\r\n## Router\r\n### 传参\r\n>都知道query和params都可以用来传参，那他们是分别以什么方式去传参呢？有什么区别\r\n```javascript\r\n//query传参\r\nthis.$router.push({\r\n    path:'/index',\r\n    query:{\r\n       id:'001'    \r\n    }\r\n})\r\n//params传参\r\nthis.$router.push({\r\n    name:'index',\r\n    params:{\r\n       id:'001'    \r\n    }\r\n})\r\n```\r\n看完上面两种方式，应该能懂了，query传参是根据path来跳转，而params是根据路由的name来跳转，而且直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示",

"content":"``` js\nvar const = function const(data,value){\n  window.data = value\n  Object.defineProperty(window,data,{\n    enumerable:false,\n    configurable:false,\n    get:function(){\n      return value\n    },\n    set:function(){\n      if(data!==value){\n        throw new TypeError('Assignment to constant variable.')\n      }else{\n        return value\n      }\n    }\n  })\n}\n\n_const('a',10)\nconsole.log(a)//10\na=20  //Assignment to constant variable.\n```",


}
// # React Markdown Editor

// * A list

// Some **bold** and _italic_ text

// > A quote...

// By [Jed Watson](https://github.com/JedWatson) and [Joss Mackison](https://github.com/jossmac)

// ### 特点
// * 轻量、基于React
// * UI可配置, 如只显示编辑区或预览区
// * 支持自定义markdown语法解析器,语法高亮等
// * 支持常用的markdown编辑功能，如加粗，斜体等等...
// * 支持编辑区和预览区同步滚动
// ${a}
// ${b.body}
const initSource = `
${b.content}
`
function SimpleMarkdown (props) {
    // props.history.push('/note-info/123')
  const [init,setInit] = useState(initSource)
  const [pExternalLink,setPExternalLink] = useState({})
  const externalLink =true
  useEffect(()=>{
    iRender()
    initExternalFuc()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
  
    _loadExternalLink('hljs_js','js',function(){
      iRender(true)
    })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pExternalLink])
  const  s_external_link= {
      markdown_css: function() {
          return 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css';
      },
      hljs_js: function() {
          return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js';
      },
      hljs_lang: function(lang) {
          return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/' + lang + '.min.js';
      },
      hljs_css: function(css) {
          if (hljsCss[css]) {
              return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/' + css + '.min.css';
          }
          return '';
      },
      katex_js: function() {
          return 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js';
      },
      katex_css: function() {
          return 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css';
      }
  }
  const iRender = (toggleChange) => {
   
    $render(initSource,function(res){
      console.log(res)
      setInit(res)
    })
  }
  const $render = (src,func)=>{
    console.log('raw',src)
    var res = markdown.render(src);
    func(res)
  }
  const initExternalFuc = () =>{
    
    let p_external_link_new = JSON.parse(JSON.stringify(pExternalLink))
    var _external_ = ['markdown_css', 'hljs_js', 'hljs_css', 'hljs_lang', 'katex_js', 'katex_css'];
    var _type_ = typeof externalLink;
    var _is_object = (_type_ === 'object');
    var _is_boolean = (_type_ === 'boolean');
    for (var i = 0; i < _external_.length; i++) {
        if ((_is_boolean && !externalLink) || (_is_object && externalLink[_external_[i]] === false)) {
          p_external_link_new[_external_[i]] = false;
        } else if (_is_object && typeof externalLink[_external_[i]] === 'function') {
          p_external_link_new[_external_[i]] = externalLink[_external_[i]];
        } else {
          p_external_link_new[_external_[i]] = s_external_link[_external_[i]];
        }
    }
    setPExternalLink(p_external_link_new)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _loadExternalLink = ( name, type, callback )=>{
    if (typeof pExternalLink[name] !== 'function') {
      if (pExternalLink[name] !== false) {
          console.error('external_link.' + name, 'is not a function, if you want to disabled this error log, set external_link.' + name, 'to function or false');
      }
      return;
    }
    var _obj = {
        'css': loadLink,
        'js': loadScript
    };
    if (_obj.hasOwnProperty(type)) {
      console.log(_obj[type],'=======================',pExternalLink[name]())

        _obj[type](pExternalLink[name](), callback);
    }
  }
 
  return (
    <div className="simple-md-wrapper markdown-body">
      <h1>SimpleMarkdown</h1>
      <div dangerouslySetInnerHTML={{ __html:init }}></div>
    </div>
  )
  
}


export default React.memo (SimpleMarkdown);