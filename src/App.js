import "./App.css";
import React from "react";
import { useState } from "react";

// Button Components
import AngryButton from "./Components/AngryButton";
import CounterButton from "./Components/CounterButton";
import LightSwitchButton from "./Components/LightSwitchButton";
import TextRepeaterButton from "./Components/TextRepeaterButton";


function App() {
  const [light, setLight] = useState("off");
  const dark = light === "off" ? "dark" : "";
  const switchLight = () => setLight(light === "on" ? "off" : "on");

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
