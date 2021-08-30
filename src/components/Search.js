import React, { useState } from "react";

function Search({ currentWeather }) {
  const api = {
    key: "67332982aae53efdc73b8f7b2f81c081",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [State, currentState] = useState("");

  const ara = (e) => {
    if (e.key === "Enter") {
      fetch(
        `${api.base}?q=${State}&units=metric&lang=tr&appid=${api.key}`
      )
        .then((veri) => veri.json())
        .then((sonuc) => {
          currentState("");
          currentWeather(sonuc);
        });
    }
  };

  return (
    <div className="arama">
      <input
        className="arama-input"
        type="text"
        placeholder="Şehir"
        onChange={(e) => currentState(e.target.value)}
        value={State}
        onKeyPress={ara}
      />
    </div>
  );
}

export default Search;
