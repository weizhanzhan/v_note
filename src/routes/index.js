import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../views/Home';
import Note from '../views/Note'
import Detail from '../views/Note/detail'
import Markdown from '../views/Markdown'
export default [
  {
    path: "/markdown",
    component:Markdown
  },
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/note"}/>
        )
      },
      {
        path: "/note",
        component: Note
      },
      {
        path:"/note-info/:id",
        component:Detail
      },
     
    ]
  },
  
]