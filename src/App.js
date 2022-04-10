import React from "react";
import "./App.css";
import SailorCard from "./components/SailorCard";
import listaSailor from "./service/data";

function App() {
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
}

export default App;
