import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from "./config/routes-config"

function App() {

  function getRoutes() {
    return routes.map(e=><Route key={e.path} path={e.path} element={e.element}/>)
  }

  return (
    <BrowserRouter>
      <Routes>
        {getRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
