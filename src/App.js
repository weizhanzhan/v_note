import React from 'react';
import routes from './routes/index.js';
import { GlobalStyle } from  './style';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import  './assets/iconfont/iconfont.css';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      { renderRoutes (routes) }
    </Router>
  );
}

export default App;
