import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../views/Home';
import Note from '../views/Note'

export default [
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
    ]
  }
]