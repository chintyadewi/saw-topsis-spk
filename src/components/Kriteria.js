import React, { Component } from "react";
import SawTopsis from "../services/saw-topsis";

export default class Kriteria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kriteria: SawTopsis.kriteria,
    };
  }

  render() {
    return (
      <div id="kriteria" className="center-align">
        <div className="row">
          <div className="col s12">
            <h3>Kriteria</h3>
            <p>
              Kriteria dalam pemilihan Rumah Sakit berdasarkan indikator
              efisiensi Pelayanan Rumah Sakit yang diperoleh dari pengumpulan
              data sensus harian pihak Rumah Sakit
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s8 offset-s2">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nama Kriteria</th>
                  <th>Tipe</th>
                  <th>Bobot</th>
                </tr>
              </thead>
              <tbody>
                {this.state.kriteria.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.nama}</td>
                      <td>{item.isBenefit ? "Benefit" : "Cost"}</td>
                      <td>{item.bobot}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row" style={{ paddingTop: 20 }}>
          <div className="col s12">
            <div id="get-started" className="row">
              <div className="col s12 center-align">
                <a class="btn-floating btn-large pulse" href="#alternatif">
                  <i class="material-icons">add</i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="circle-small-kriteria"></div>
        <div id="circle-small-kriteria1"></div>
      </div>
    );
  }
}
