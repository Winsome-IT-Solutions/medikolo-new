import React from "react";

import Card from "./Card";
import "../assets/css/App.css";
import logo from "../assets/img/logo-medikolo.png";

const App = () => {
  return (
    <div id="container">
      <img
        src={logo}
        style={{ width: "150px", margin: "20px 0" }}
        alt="Medikolo Logo"
      />
      <div className="card-group-container">
        <div className="card-row">
          <Card
            text="Meet Your Doctor"
            imgPath={require("../assets/img/doctor.jpg")}
          />
          <Card
            text="Book Your Hospital"
            imgPath={require("../assets/img/hospital.jpg")}
          />
        </div>
        <div className="card-row">
          <Card
            text="Book your Test"
            imgPath={require("../assets/img/test.jpg")}
          />
          <Card
            text="Get Medicine Now"
            imgPath={require("../assets/img/medicine.jpg")}
          />
        </div>
        <div className="card-row">
          <Card
            text="Call Ambulance"
            imgPath={require("../assets/img/ambulance.jpg")}
          />
          <Card
            text="Parent Care"
            imgPath={require("../assets/img/care.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
