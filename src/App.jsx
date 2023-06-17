import React from "react";
import Header from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Contacto from "./components/Contacto/Contacto";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuInicio from "./components/MenuInicio/MenuInicio";
import { BrowserRouter , Routes , Route, Navigate} from "react-router-dom";


function App() {

const clickear = () => console.log()

  return (


    <BrowserRouter>


      <Header />
      <Intro mensaje="No te muevas de tu casa, elegi los productos y te los llevamos... " />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/Contacto" element={<Contacto />}/>
        <Route path="/MenuInicio" element={<MenuInicio />}/>
        <Route path="*" element={ <Navigate to={"/"} />}/>

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App


