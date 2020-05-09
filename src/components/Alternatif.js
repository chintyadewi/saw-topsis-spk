import React, { Component } from "react";
import SawTopsis from "../services/saw-topsis";
import { TextInput } from "react-materialize";

export default class Alternatif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alternatif: SawTopsis.alternatif,
      data: SawTopsis.data,
    };
  }

  render() {
    return (
      <div id="alternatif" className="center-align">
        <div className="row">
          <div className="col s12">
            <h3>Data Alternatif</h3>
            <p>
              Alternatif yang ditambahkan adalah Rumah Sakit yang akan dihitung
              ranking-nya dan memasukkan nilai dari kriteria yang telah
              ditentukan
            </p>
          </div>

          <div className="row">
            <div className="col s10 offset-s1">
              <table className="responsive-table highlight">
                <thead>
                  <tr>
                    <th className="center-align">No.</th>
                    <th className="center-align">Nama RS</th>
                    <th className="center-align">BOR (%)</th>
                    <th className="center-align">BTO (kali)</th>
                    <th className="center-align">TOI (hari)</th>
                    <th className="center-align">AVLOS (hari)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.alternatif.map((item, index) => {
                    return (
                      <tr>
                        <td className="center-align">{index + 1}</td>
                        <td className="left-align">{item}</td>
                        {this.state.data[index].map((data) => {
                          return <td className="center-align">{data}</td>;
                        })}
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
                  <a class="btn-floating btn-large pulse" href="#perhitungan">
                    <i class="material-icons">check</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="circle-small-kriteria"></div>
          <div id="circle-small-kriteria1"></div>
        </div>
      </div>
    );
  }
}
