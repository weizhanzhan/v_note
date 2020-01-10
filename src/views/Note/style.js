import styled from'styled-components';
import GlobalStyle from '../../assets/global-style';
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
    width:735px;
    .star-contaienr{
        margin-top:8px;
        display:inline-block;
        margin-bottom:24px
        &:hover{
            cursor:pointer;
            .star-box{
                background:rgba(1,126,102,0.8);
                color:#ffffff;
                .star{
                    color:#ffffff; 
                }
            }
        }
        .star-box{
            display:inline-block;
            width:20px;
            height:20px;
            text-align:center;
            line-height:1;
            border-radius:50%;
            background:rgba(1,126,102,0.18);
            margin-right: 8px;          
            .star{
                color:${GlobalStyle['theme-color']};
                font-size:14px
            }
        }
        .star-count{
            font-size:13px;
            color: ${GlobalStyle['theme-color']};
            font-weight: bold;
            &::before{
                content: 'x ';
                font-size: 12px;
            }
            &::after{
                content: '·';
                color: #999;
                font-weight: normal;
                padding:0 5px
            }
        }
        .star-word{
            font-size:13px;
        }
    }
    .loading4{
        width:150px;
        margin:50px auto;
        text-align: center;
    }
    .loading-more >div{
      width: 10px;
      height: 10px;
      border-radius: 100%;
      display:inline-block;
      background-color: ${GlobalStyle['theme-color']};
      -webkit-animation: three 1.4s infinite ease-in-out;
      animation: three 1.4s infinite ease-in-out;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .loading-more .three1{
      -webkit-animation-delay: -0.30s;
      animation-delay: -0.30s;
    }
    .loading-more .three2{
      -webkit-animation-delay: -0.15s;
      animation-delay: -0.15s;
    }
    @-webkit-keyframes three {
      0%, 80%, 100% {-webkit-transform: scale(0.0) }
      40% { -webkit-transform: scale(1.0) }
    }
    @keyframes three {
      0%, 80%, 100% {-webkit-transform: scale(0.0) }
      40% { -webkit-transform: scale(1.0) }
    }
    .load-more{
        text-align:center;
        font-size:14px;
        color:#909399;  
        .btn{
            cursor:pointer;        
            padding:10px;      
        }
    }   
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
    margin-bottom: 5px;
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
            background:rgb(236,247,243);
            cursor:pointer
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

const NoteDetail = styled.div`
    width:900px;
    margin:0 auto
`
export default {
    Container,
    Left,
    Right,
    Title,
    Description,
    Section,
    NoteDetail
}