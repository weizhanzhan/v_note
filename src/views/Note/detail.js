import React,{useState,useEffect} from 'react';
import { $fetch } from '../../utils/fetch'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "../../components/code-block";
import HeadingBlock from "../../components/HeadingBlock";
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import 'react-markdown-editor-lite/lib/index.css'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import  style from './style'
function Detail (props){
    const id = props.match.params.id
    const [article,setArticle] = useState({})
    const [parser,setParser] = useState(new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value
            } catch (__) {}
          }    
          return '' // use external default escaping
        }
    }
    ))
    useEffect(()=>{
        async function fetchData () {
            const data = await getNoteDetail(id)
            console.log(data)
            setArticle(data)
        }
        fetchData()
    },[id])
    return (
    <style.NoteDetail>
          {/* <div className="article-content markdown" div="true" dangerouslySetInnerHTML={{ __html:article.content }} ></style.NoteDetail> */}
          {/* <ReactMarkdown
            source={article.content}
            escapeHtml={false}
            renderers={{
                code: CodeBlock,
                heading: HeadingBlock
            }}
            /> */}
             <MdEditor
          value={article.content}
        
          config={{
            view: {
              menu: false,
              md: false,
              html: true,
              fullScreen: false
            }
          }}
          renderHTML={(text) => parser.render(text)}
        
        />    
    </style.NoteDetail>
    )
}
const getNoteDetail =  (id) =>{
    return new Promise(async (resolve,reject)=>{
        const {  data } = await $fetch({
            url: `https://api.github.com/repos/weizhanzhan/v_note/issues/${id}`
          })
         
        const article = {
            title: data.title,
            content: data.body,
            // cover: data.body.match(/!\[.+?\]\((.+?[^)]*)\)/)[1],
            number: data.number,
            date: new Date(data.created_at).toLocaleDateString('zh').replace(/\//g, '-'),
            labels: data.labels,
            commentsUrl: `https://api.github.com/repos/weizhanzhan/v_note/issues/${id}/comments`,
            commentsAmount: data.comments
        }
        resolve(article)
    })
}
export default React.memo (Detail);