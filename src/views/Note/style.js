import styled from'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 935px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top:24px;
    .banner{
        margin-bottom:16px
        img{
            width:100%;
            height:150px;
            border-radius:6px
        }
    }
`
const Right = styled.div`
    max-width:735px;
    width:735px
`
const Left = styled.div`
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
    .tech-title{
        
        color: #212121;
        position: relative;
        display: inline-block;
        padding-bottom:10px;
        &::after{
            position: absolute;
            content: '';
            border-bottom: 1px solid #eee;
            width: 125px;
            margin-left: 5px;
            margin-top: 8px;
        }
    }
    .tech-item{
        height: 34px;
        display: flex;
        align-items: center;
        color: #757575;
        text-decoration: none;
        margin-bottom: 1px;
        border-radius: 4px;
        &:hover{
            background:rgb(236,247,243)
        }
        span{
            padding-left:8px
        }
        &.end{
            margin-bottom:12px
        }
    }
    .about{
        margin-top:8px
    }
    .about-item{
       margin-right:12px ;
       font-size:20px
    }
    .website{
        color:#909399;
        font-size:14px;
        padding-top:14px
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