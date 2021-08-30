import React, { useState } from "react";
import "./index.css";


import Arama from "./components/Search";
import Sonuc from "./components/Result";

function App() {
  const [havaDurumu, currentWeather] = useState({});

  return (
      <div className="arkaplan">
          <div className="baslik">
            Hava Durumu
          </div>
          <Arama currentWeather={currentWeather} />
        <Sonuc hava={havaDurumu} />
      </div>
  );
}

export default App;