import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ColorComponent from "./ColorComponent";
import ModalComponent from "./ModalComponent";
import axios from "axios";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutUsComponent from "./AboutUsComponent";
import SettingsComponent from "./SettingsComponent";

export default function BodyComponent() {
  // get data from api

  const [url, setUrl] = useState("https://www.colr.org/json/schemes/random/10");
  const [DATA, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  // set modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // set colors
  const [modalColor, setModalColor] = useState(null);

  //get infomation from son to set modal true and get specific color
  function ClickDoFilho(colorFilho) {
    setModalIsOpen(true);
    setModalColor(colorFilho);
  }

  //get color component
  function getColorComponents(colors) {
    return colors.map((schemes) => {
      let rgb = schemes["colors"][0];
      return (
        <ColorComponent color={rgb} key={rgb} onClicarPai={ClickDoFilho} />
      );
    });
  }

  //get information from modal to close it
  function setCloseModal() {
    setModalIsOpen(false);
  }

  if (DATA) {
    let colors = DATA["schemes"]; // get informations after api loads
    return (
      <div className="body">
        <Router>
          <NavbarComponent />
          <Route exact path={"/"}>
            <div className="grid">{getColorComponents(colors)}</div>
            <ModalComponent
              open={modalIsOpen}
              color={modalColor}
              setClose={setCloseModal}
            />
          </Route>
          <Route path={"/about-us"}>
            <AboutUsComponent />
          </Route>
          <Route path={"/settings"}>
            <SettingsComponent />
          </Route>

          <FooterComponent />
        </Router>
      </div>
    );
  }
  // No information => Loading...
  return <div>Loading...</div>;
}
