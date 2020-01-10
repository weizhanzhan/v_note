import styled from'styled-components';
const Container = styled.div`
    width:100%;
    height:100%
`
const Header = styled.header`
  
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,.15);
    height:400px;
    background: url(https://s1.tuchong.com/content-image/201807/b044184145124818f7d26c75e796829f.jpeg);
    background-size: cover;
    background-position: center;
   

`
const Top = styled.div`
    margin: 0 auto;
    width: 100%;
    height:100%;
    max-width: 935px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
`
const Logo = styled.div`
    height:40px
    &>img {
        height:40px;
        width:40px
    }
`
const Main = styled.main`
    width:100%;
  
   
`

const Avatar = styled.img`
    margin-left: 15px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #ffffff
`
const RightInfo = styled.div`
    display: flex;
    align-items:center;
    position:absolute;
    bottom:50px;
    right:0;
    font-size:20px;
    font-weight: bold;
    `
const Footer = styled.div`
    width:100%;
    text-align:center;
    color:#909399;
    padding:10px 0;
    margin-top:30px;
    font-size:14px
`
export {
    Container,
    Top,
    Header,
    Logo,
    Main,
    Avatar,
    RightInfo,
    Footer
}