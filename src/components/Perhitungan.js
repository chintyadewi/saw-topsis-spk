import React, { Component } from "react";
import Illustration from "../assets/illustration.jpg";

export default class Perhitungan extends Component {
  render() {
    return (
      <div id="perhitungan" className="center-align">
        <div className="row">
          <div className="col s12">
            <h3>Hasil Perhitungan</h3>
            <p>
              Berikut hasil perangkingan menggunakan metode gabungan SAW-TOPSIS
            </p>
          </div>
        </div>
      </div>
    );
  }
}
