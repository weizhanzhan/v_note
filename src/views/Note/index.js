import React,{useState,useEffect} from 'react';
import { $fetch } from '../../utils/fetch'
import NoteStyle from './style'
import marked from 'marked'
import ContentLoader from 'react-content-loader'
// primaryColor="#f3f3f3"
// secondaryColor="#ecebeb"
const MyLoader = () => (
  <ContentLoader 
    height={60}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="6" rx="4" ry="4" width="238" height="9" /> 
    <rect x="0" y="20" rx="3" ry="3" width="339" height="7" /> 
    <rect x="0" y="31" rx="3" ry="3" width="340" height="7" /> 
    <rect x="474" y="-57" rx="3" ry="3" width="380" height="6" /> 
    <rect x="20" y="46" rx="3" ry="3" width="105" height="7" /> 
    <circle cx="631" cy="-63" r="30" /> 
    <circle cx="8" cy="49" r="8" /> 
    <circle cx="54" cy="92" r="1" /> 
    <circle cx="92" cy="88" r="0" />
  </ContentLoader>
)

const Loadmore = () => (
  <div className="loading-more">
    <div className="three1"></div>
    <div className="three2"></div>
    <div className="three3"></div>
  </div>
)

function Note (props) {
    // props.history.push('/note-info/123')
  const [note,setNote] = useState([])
  const [endCursor,setEndCursor] = useState('') 
  const [hasNextPage,setHasNextPage] = useState(false)
  const [loading,setLoading] = useState(false)
  const [loadmore,setLoadmore] = useState(false)
  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      const notes = await getNotes()
      setLoading(false)
      setNote(notes.articles)
      setEndCursor(notes.endCursor)
      setHasNextPage(notes.hasNextPage)
    }
    fetchData(); 
  },[note.hasNextPage])
  return (
    <NoteStyle.Container>
      <NoteStyle.Left>
        <NoteStyle.Section>
          <h5 className="tech-title">栏目</h5>
          <div className="tech-item">
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-Vue"></use>
            </svg>
            <span>Vue</span>
          </div>
          <div className="tech-item">
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-React"></use>
            </svg>
            <span>React</span>
          </div>
          <div className="tech-item">
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-csswizardry-copy"></use>
            </svg>
            <span>CSS</span>
          </div>
          <div className="tech-item">
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-JavaScript"></use>
            </svg>
            <span>Javascript</span>
          </div>
          <div className="tech-item">
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-file_type_flutter"></use>
            </svg>
            <span>Flutter</span>
          </div>
          <div className="tech-item">
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-bug"></use>
            </svg>
            <span>Bug</span>
          </div>
          <div className="tech-item ">
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-zongjie"></use>
            </svg>
            <span>总结</span>
          </div>
          <div className="tech-item end">
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-comment"></use>
            </svg>
           <span>说点什么...</span>
         </div>
          <h5 className="tech-title">关于我</h5>
         
          <div className="about">
            <svg className="icon about-item" aria-hidden="true">
                <use xlinkHref="#icon-QQ"></use>
            </svg>
            <svg className="icon about-item" aria-hidden="true">
                <use xlinkHref="#icon-weixin"></use>
            </svg>
            <svg className="icon about-item" aria-hidden="true">
                <use xlinkHref="#icon-git"></use>
            </svg>
          </div>  
        </NoteStyle.Section>
      </NoteStyle.Left>
      <NoteStyle.Right>
        <ul>
          {
            loading ? 
             <li>
               <MyLoader/>
               <MyLoader/>
               <MyLoader/>
               <MyLoader/>
               <MyLoader/>
             </li> :''
          }
         
          { 
            note.map(n=>{
              return (
                <li key={n.id} onClick={()=>{
                  props.history.push('/note-info/'+n.number)
                }}>
                  <NoteStyle.Title>
                    {n.title}
                  </NoteStyle.Title>
                  <NoteStyle.Description>
                    {handleContent(n.content)}
                  </NoteStyle.Description>
                  <div>
                    <div className="star-contaienr">
                      <span className="star-box"><i className="iconfont icon-diancai1-copy star"></i></span>
                      {  n.reactions ? <span className="star-count">{n.reactions}</span> :'' }
                      <span className="star-word">赞</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="load-more">
          {
             hasNextPage?<div className="btn" onClick={ async ()=>{
            if(hasNextPage){
              setLoadmore(true)
              const notes = await getNotes(endCursor)
              setLoadmore(false)
              const {hasNextPage, articles} = notes        
              setNote([...note,...articles])     
              setEndCursor(notes.endCursor)
              setHasNextPage(hasNextPage)
            }   
          }}>
            {
              loadmore? <Loadmore/>:'更多...'
            } 
          </div>
          :<div>暂无...</div>
        }
        </div>
      </NoteStyle.Right>
    </NoteStyle.Container>
  )
}

const GetArticles = (nextPage) => `
{
  repository(owner: "weizhanzhan", name: "v_note") {
    issues(${nextPage} filterBy: {createdBy: "weizhanzhan",states: OPEN}, orderBy: {field: CREATED_AT, direction: DESC}, first: 10) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        title
        number
        body
        id
        createdAt
        labels(first: 5) {
          nodes {
            color
            name
          }
        }
        comments {
          totalCount
        }
        reactions(content: THUMBS_UP) {
          totalCount
        }
      }
    }
  }
}        
`

function getNotes(nextCursor){
    // method: 'get',
      // url: 'https://api.github.com/repos/weizhanzhan/v_note/issues',
  return new Promise(async (resolve,reject)=>{
    const nextPage = nextCursor ? `after:"${nextCursor}",` : ''
    const { status,data } = await $fetch({
      method: 'post',
      url:'https://api.github.com/graphql',
      data: {
        query:GetArticles(nextPage),
        variables: null
      } 
    })
 
    if (status < 400) {
     
      const articles = data.data.repository.issues.nodes.map(article => ({
        title: article.title,
        content: article.body,
        id:article.id,
        // cover: article.body.match(/!\[.+?\]\((.+?[^)]*)\)/)[1],
        number: article.number,
        date: new Date(article.createdAt).toLocaleDateString('zh').replace(/\//g, '-'),
        labels: article.labels.nodes,
        commentsUrl: `https://api.github.com/issues/repos/weizhanzhan/v_note/${article.number}/comments`,
        commentsAmount: article.comments.totalCount,
        reactions: article.reactions.totalCount
      }))
      resolve({
        articles,
        endCursor:data.data.repository.issues.pageInfo.endCursor,
        hasNextPage:data.data.repository.issues.pageInfo.hasNextPage
      })
    
    }else{
      reject({msg:'请求错误'})
    }
    
  })

}
function handleContent(body){
  return marked(body).match(/<p>(.*?)<\/p>/)[1]
}
export default React.memo (Note);