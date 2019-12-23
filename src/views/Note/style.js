import styled from'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 935px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top:24px
`
const Left = styled.div`
    max-width:735px;
    width:735px
`
const Right = styled.div`
    flex:1
`
const Title = styled.h4`
    display: inline;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #212121;
    position: relative;
    vertical-align: middle;
    padding:5px 0
`
const Description =styled.div`
    margin-top:5px;
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    color: #888;
    font-size: 13px;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;

`
const Section = styled.div`
    h5{
        font-weight:bold
    }
`
export default {
    Container,
    Left,
    Right,
    Title,
    Description,
    Section
}