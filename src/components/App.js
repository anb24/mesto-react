import React from "react";
import '../utils/api.js';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import {useEffect} from "react";

function App() {

  useEffect(() => {
    console.log('Use Done 02020202')
  })
  return (
    <div className="page">
      <div className="page__container">
          <Header/>
          <Main



          />
          <Footer/>

      </div>
    </div>
  );
}

export default App;
