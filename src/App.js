import React from 'react';
import './App.css';
import Sailor from './Sailor';

function App() {
  const listaSailor = [
    {
      name: "Sailor Saturn",
      img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/Sailor-Moon-Este-es-el-ranking-de-poder-de-las-Sailor-Scouts-7.png?resize=1280%2C720&quality=80&ssl=1",
      identity: "Hotaru Tomoe"
    },
    {
      name: "Sailor Pluto",
      img: "https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/Sailor-Moon-Este-es-el-ranking-de-poder-de-las-Sailor-Scouts-6.png?resize=1280%2C720&quality=80&ssl=1",
      identity: "Setsuna Meiou"
    },
    {
      name: "Sailor Neptune",
      img: "https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/Sailor-Moon-Este-es-el-ranking-de-poder-de-las-Sailor-Scouts-1.jpg?resize=1280%2C720&quality=80&ssl=1",
      identity: "Michiru Kaiou"
    },
    {
      name: "Sailor Uranus",
      img: "https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/Sailor-Moon-Este-es-el-ranking-de-poder-de-las-Sailor-Scouts-5.png?resize=1280%2C720&quality=80&ssl=1",
      identity: "Haruka Tenou"
    },
    {
      name: "Black Lady",
      img: "https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/06/black-lady-2.jpg?fit=1280%2C720&quality=80&ssl=1",
      identity: "Rini"
    },
    {
      name: "Sailor Moon",
      img: "https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/Sailor-Moon-Este-es-el-ranking-de-poder-de-las-Sailor-Scouts-3.jpg?resize=1280%2C720&quality=80&ssl=1",
      identity: "Usagi Tsukino"
    },
    {
      name: "Sailor Mars",
      img: "https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/Sailor-Moon-Este-es-el-ranking-de-poder-de-las-Sailor-Scouts-4.png?resize=1280%2C720&quality=80&ssl=1",
      identity: "Rei Hino"
    },
    {
      name: "Sailor Jupiter",
      img: "https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/Sailor-Moon-Este-es-el-ranking-de-poder-de-las-Sailor-Scouts-3.png?resize=1280%2C720&quality=80&ssl=1",
      identity: "Lita Kino"
    }

]

  return (
    <div>
      <h1 className="app-title">Sailor Scouts</h1>
    <div className="App">
     {
       listaSailor.map((e) =>
       <Sailor 
        name={e.name}
        identity={e.identity}
        img={e.img}
       />)
     }
    </div>
    </div>
  );
}

export default App;
