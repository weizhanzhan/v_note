import React,{useState,useEffect} from 'react';
import { renderRoutes } from "react-router-config";
import { Container, Top, Header, Logo, Main ,Avatar , RightInfo} from './style';
import { $fetch } from '../../utils/fetch'


function Home (props) {
  const { route,location } = props;
  const [ info, setInfo] = useState({name:'',avatarUrl:''})
  useEffect(()=>{
    const token = localStorage.getItem('github_token')  
    if(token){
      getUserInfo(token,setInfo)
    }
  }, [])
  init(location,setInfo)
  return (
    <Container>
      <Header>
        <Top>
          <Logo>
            <img alt="" src="http://test1.zlpfs.com/ico.png" />
          </Logo>
          <RightInfo onClick={()=>handleClick(location)}>
            <span style={{color:'#909399'}}>{info.name}</span>
            <Avatar alt='' src={info.avatarUrl}></Avatar>
          </RightInfo>
        </Top>
      </Header>
      <Main>
        {/* 二级路由 */}
        { renderRoutes (route.routes) }
      </Main>
     
    </Container>
  )
}
function handleClick(location){
  
  window.location.href = 'https://github.com/login/oauth/authorize?client_id=a3cca693df0ee3a00cb9'
}
function init(location,setInfo){
  const code = getGithubCode(location.search)
 
  if(code){
    getGithubAuth(code,location)
  }
}
async function getUserInfo(token,setInfo){
  const GetUserInfo = () => `
  {
    viewer {
      name
      avatarUrl
      login
    }
  }
  `
  const {  data } = await $fetch({
    method: 'post',
    url: 'https://api.github.com/graphql',
    headers: {
      'Authorization': token
    },
    data: {
      query: GetUserInfo()
    }
  })
  setInfo(data.data.viewer)
}
function getGithubCode(path){
  const code = path.split('code=')[1] ||''
  const end = code.indexOf('&')
  if(end===-1){
    return code
  }else{
    return code.substr(0,end)
  }
}
async function getGithubAuth(code) {
  const { data } = await $fetch({
    url: 'http://111.231.59.56:5000/api/github',
    data: {
      code
    },
   
  }).catch(e => e)
  if(data.data.access_token){
    localStorage.setItem('github_token','Bearer '+data.data.access_token)
    window.location.href =  window.location.href.split(/[?#]/)[0]
  }
}
export default React.memo (Home);