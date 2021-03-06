import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";


import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";
import Button from "./component/button-header";

import Salad from "./component/header-salad";
import Ensaladas from "./component/ensaladas"

import Hotdog from "./component/header-hotdog"
import Perritos from "./component/perritos"

import Sandwich from "./component/header-sanwich"
import Bocata from "./component/sanwich"

import Hamburger from "./component/header-hamburger"
import Hamburgesas from "./component/hamburgesas"

import Pan from "./component/boacata-header"
import Jamon from "./component/bocatas"

import Tosta from "./component/header-tosta"
import Tosta2 from "./component/tosta"


import logo from './restaurante.svg'; // Tell webpack this JS file uses this image

import "./styles.css";

class Place extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <br></br>
        <br></br>
        <Button /> 
        <br></br>
        <Salad />
        <br></br>
        <Ensaladas />
        <br></br>
        <br></br>
        <Hotdog />
        <br></br>
        <Perritos />
        <br></br>
        <br></br>
        <Sandwich />
        <br></br>
        <Bocata />
        <br></br>
        <br></br>
        <Hamburger />
        <br></br>
        <Hamburgesas />
        <br></br>
        <br></br>
        <Pan />
        <br></br>
        <Jamon />
        <br></br>
        <br></br>
        <Tosta />
        <br></br>
        <Tosta2 />
        <br></br>
        <Footer />
      </Fragment>
    );
  }
}

ReactDOM.render(<Place />, document.getElementById("root"));
