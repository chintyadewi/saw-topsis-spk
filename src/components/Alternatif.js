import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Alternatif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alternatif: JSON.parse(localStorage.getItem("alternatif")),
      data: JSON.parse(localStorage.getItem("data_rs")),
      modalTambah: { alternatif: "", data: [0, 0, 0, 0] },
      isHovered: {},
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  editNama = (event) => {
    let data = this.state.modalTambah;
    data["alternatif"] = event.target.value;
    this.setState({ modalTambah: data });
  };

  editBor = (event) => {
    let data = this.state.modalTambah;
    data["data"][0] = parseFloat(event.target.value);
    this.setState({ modalTambah: data });
  };

  editBto = (event) => {
    let data = this.state.modalTambah;
    data["data"][1] = parseFloat(event.target.value);
    this.setState({ modalTambah: data });
  };

  editToi = (event) => {
    let data = this.state.modalTambah;
    data["data"][2] = parseFloat(event.target.value);
    this.setState({ modalTambah: data });
  };

  editAvlos = (event) => {
    let data = this.state.modalTambah;
    data["data"][3] = parseFloat(event.target.value);
    this.setState({ modalTambah: data });
  };

  handleMouseEnter = (index) => {
    this.setState((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
    console.log(index);
  };

  handleMouseLeave = (index) => {
    this.setState((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  handleTambahAlternatif = () => {
    let alternatif = this.state.alternatif;
    let data = this.state.data;
    alternatif.push(this.state.modalTambah.alternatif);
    data.push(this.state.modalTambah.data);
    this.setState({ data });
    localStorage.setItem("alternatif", JSON.stringify(this.state.alternatif));
    localStorage.setItem("data_rs", JSON.stringify(this.state.data));
  };

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
              {this.state.data[0] && (
                <table className="responsive-table highlight">
                  <thead>
                    <tr>
                      <th className="center-align">No.</th>
                      <th className="center-align">Nama RS</th>
                      <th className="center-align">BOR (%)</th>
                      <th className="center-align">BTO (kali)</th>
                      <th className="center-align">TOI (hari)</th>
                      <th className="center-align">AVLOS (hari)</th>
                      <th className="center-align"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.alternatif.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          onMouseEnter={() => this.handleMouseEnter(index)}
                          onMouseLeave={() => this.handleMouseLeave(index)}
                        >
                          <td className="center-align">{index + 1}</td>
                          <td className="left-align">{item}</td>
                          {this.state.data[index].map((data, i) => {
                            return (
                              <td className="center-align" key={i}>
                                {data}
                              </td>
                            );
                          })}
                          <td>
                            {this.state.isHovered[index] ? (
                              <div>
                                <i
                                  onClick={() =>
                                    this.handleEditAlternative(index)
                                  }
                                  style={{
                                    cursor: "pointer",
                                    borderRadius: 10,
                                    marginRight: 10,
                                  }}
                                  class="material-icons hoverable z-depth-1 teal-text"
                                >
                                  edit
                                </i>
                                <i
                                  onClick={() =>
                                    this.handleDeleteAlternative(index)
                                  }
                                  style={{
                                    cursor: "pointer",
                                    borderRadius: 10,
                                  }}
                                  class="material-icons hoverable z-depth-1 red-text"
                                >
                                  delete
                                </i>
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <div className="row" style={{ margin: 0 }}>
            <div className="col s12">
              <div className="row">
                <div className="col s10 offset-s1 left-align">
                  <a
                    className="waves-effect waves-light modal-trigger btn"
                    onClick={() => this.showModalTambah}
                    href="#modalTambah"
                  >
                    Tambah Alternatif
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: 0 }}>
            <div className="col s12">
              <div className="row">
                <div className="col s12 center-align">
                  <a
                    className="btn-floating btn-large pulse"
                    href="#perhitungan"
                  >
                    <i className="material-icons">check</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="circle-small-kriteria"></div>
          <div id="circle-small-kriteria1"></div>
        </div>

        <div
          id="modalTambah"
          className="modal"
          style={{ maxWidth: 750, borderRadius: 10 }}
        >
          <div className="modal-content left-align">
            <h5>Tambah Alternatif</h5>
            <div className="row" style={{ margin: 0 }}>
              <div className="input-field col s7">
                <input
                  id="nama"
                  type="text"
                  className="validate"
                  onChange={(event) => {
                    this.editNama(event);
                  }}
                />
                <label htmlFor="nama">Nama Rumah Sakit</label>
              </div>
              <div className="input-field col s5">
                <input
                  id="bor"
                  type="number"
                  min={0}
                  onChange={(event) => {
                    this.editBor(event);
                  }}
                />
                <label htmlFor="bor">BOR - Bed Occupancy Ratio (%)</label>
              </div>
            </div>
            <div className="row" style={{ margin: 0 }}>
              <div className="input-field col s4">
                <input
                  id="bto"
                  type="number"
                  min={0}
                  onChange={(event) => {
                    this.editBto(event);
                  }}
                />
                <label htmlFor="bto">BTO - Bed Turn Over (kali)</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="toi"
                  type="number"
                  min={0}
                  onChange={(event) => {
                    this.editToi(event);
                  }}
                />
                <label htmlFor="toi">TOI - Turn Over Interval (hari)</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="avlos"
                  type="number"
                  min={0}
                  onChange={(event) => {
                    this.editAvlos(event);
                  }}
                />
                <label htmlFor="avlos">AVLOS (hari)</label>
              </div>
            </div>
          </div>
          <div className="modal-footer" style={{ margin: 0 }}>
            <a
              className="modal-close waves-effect waves-green teal-text btn-flat"
              onClick={this.handleTambahAlternatif}
            >
              Simpan
            </a>
          </div>
        </div>
      </div>
    );
  }
}
