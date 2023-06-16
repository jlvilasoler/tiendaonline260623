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
import ItemListNew from "./components/Hoc/ItemListNew";


function App() {

const clickear = () => console.log()

  return (

    <div>
      <Header />

      <Intro mensaje="No te muevas de tu casa, elegi los productos y te los llevamos... " />
      <ItemListContainer />
      <ItemListNew />
      <Footer />
      <ToastContainer />
      <Contacto />
      <MenuInicio />

    </div>

  )
}

export default App


