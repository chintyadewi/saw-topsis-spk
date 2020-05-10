import React from "react";
import Illustration from "../assets/illustration.jpg";

export default function Home() {
  return (
    <div id="home">
      <div className="row valign-wrapper">
        <div className="col s7">
          <h4 className="grey-text text-darken-3">
            Sistem Pendukung Keputusan untuk memilih Rumah Sakit dengan
            <b> Pelayanan Terbaik</b> di Wilayah Kota Batu menggunakan metode
            gabungan <b>SAW dan TOPSIS</b>
          </h4>
        </div>
        <div className="col s5">
          <img src={Illustration} />
        </div>
      </div>
      <div id="get-started" className="row">
        <div className="col s12 center-align">
          <a className="btn-floating btn-large pulse" href="#kriteria">
            <i className="material-icons">keyboard_arrow_down</i>
          </a>
        </div>
      </div>
      <div id="circle"></div>
      <div id="circle-small"></div>
    </div>
  );
}
