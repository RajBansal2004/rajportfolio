import React, { createContext, useState } from "react";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ToggleCard from "./components/ToggleCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import { Api } from "@mui/icons-material";
export const gloableData = createContext();
const App = () => {
  const [cards, setCards]=useState()
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/viewToggle" element={  <ToggleCard/>}/>
        <Route path="/contact_us" element={  <ContactForm/>}/>
        </Routes>
      </BrowserRouter>

     
    </>
  )
}
export default App;