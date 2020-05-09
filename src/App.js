import React from "react";
import "./App.css";
import { Home, Kriteria, Data, Perhitungan } from "./components";

function App() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav id="navbar" className="z-depth-0 transparent">
          <div class="nav-wrapper">
            <span className="grey-text text-darken-1 brand-logo">
              SPK - Pelayanan Rumah Sakit Terbaik
            </span>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="#home" className="grey-text text-darken-1">
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href="#kriteria" className="grey-text text-darken-1">
                  <b>Kriteria</b>
                </a>
              </li>
              <li>
                <a href="#alternatif" className="grey-text text-darken-1">
                  <b>Alternatif</b>
                </a>
              </li>
              <li>
                <a href="#perhitungan" className="grey-text text-darken-1">
                  <b>Perhitungan</b>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s10 offset-s1">
          <Home />
          <Kriteria />
          <Data />
          <Perhitungan />
        </div>
      </div>
    </div>
  );
}

export default App;
