import React,{useState,useEffect} from 'react';
import { $fetch } from '../../utils/fetch'
import NoteStyle from './style'
import marked from 'marked'
function Note (props) {
  const [note,setNote] = useState([])
  useEffect(()=>{
    async function fetchData() {
      const notes = await getNotes()
      console.log(notes)
      setNote(notes)
    }
    fetchData();
   
  },[])
  return (
    <NoteStyle.Container>
      <NoteStyle.Left>
        <ul>
          { 
            note.map(n=>{
              return (
                <li key={n.id}>
                  <NoteStyle.Title>
                    {n.title}
                  </NoteStyle.Title>
                  <NoteStyle.Description>
                    {handleContent(n.content)}
                  </NoteStyle.Description>
                </li>
              )
            })
          }
        </ul>
      </NoteStyle.Left>
      <NoteStyle.Right>
        <NoteStyle.Section>
          <h5>技术专栏</h5>
          <div>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-Vue"></use>
            </svg>
            <span>react</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-React"></use>
            </svg>
            <span>react</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-csswizardry-copy"></use>
            </svg>
            <span>CSS</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-csswizardry-copy"></use>
            </svg>
            <span>Javascript</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-file_type_flutter"></use>
            </svg>
            <span>Flutter</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-bug"></use>
            </svg>
            <span>Bug</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-zongjie"></use>
            </svg>
            <span>总结</span>
          </div>
        </NoteStyle.Section>
      </NoteStyle.Right>
    </NoteStyle.Container>
  )
}

const GetArticles = (nextPage) => `
{
  repository(owner: "weizhanzhan", name: "v_note") {
    issues(${nextPage} filterBy: {createdBy: "weizhanzhan",states: OPEN}, orderBy: {field: CREATED_AT, direction: DESC}, first: 100) {
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
      resolve(articles)
      // if (nextCursor) {
      //   commit('ADD_ARTICLES', articles)
      // } else {
      //   commit('GET_ARTICLES', articles)
      // }
      // const { hasNextPage, endCursor } = data.data.repository.issues.pageInfo
      // if (hasNextPage) {
      //   await dispatch('getArticlesV4', endCursor)
      // }
      // return true
    }else{
      reject({msg:'请求错误'})
    }
    
  })

}
function handleContent(body){
 
  return marked(body).match(/<p>(.*?)<\/p>/)[1]
}
export default React.memo (Note);