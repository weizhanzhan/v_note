import styled from'styled-components';
// import style from '../../assets/global-style';
const Container = styled.div`
    width:100%;
    height:100%
`
const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,.15);
`
const Top = styled.div`
    margin: 0 auto;
    width: 100%;
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
    margin-top:60px
   
`

const Avatar = styled.img`
    margin-left: 15px;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    border: 1px solid #dcdfe6
`
const RightInfo = styled.div`
    display: flex;
    align-items: center;
    `
export {
    Container,
    Top,
    Header,
    Logo,
    Main,
    Avatar,
    RightInfo
}