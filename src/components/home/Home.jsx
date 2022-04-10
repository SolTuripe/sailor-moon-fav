import React from "react";
import SailorCard from "../sailorCard/SailorCard";
import listaSailor from "../../service/data";
import "./home.css";

const Home = () => {
  return (
    <div>
      <h1 className="app-title">Sailor Scouts</h1>
      <div className="App">
        {listaSailor.map((e) => (
          <SailorCard
            key={e.name}
            name={e.name}
            identity={e.identity}
            img={e.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
