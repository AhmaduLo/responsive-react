import "./App.css";
import React from 'react';
import SideBar from "./components/SideBar";
import MainDash from "./components/MainDash";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <MainDash/>
      </div>
    </div>
  );
}

export default App;
