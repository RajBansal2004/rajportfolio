import React, { createContext, useRef, useState } from "react";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Skills from "./components/Skills";
import HomePage from "./components/HomePage";
export const gloableData = createContext();
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element ={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;