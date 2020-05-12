import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Alternatif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alternatif: [],
      data: [],
      modal: { id: 0, alternatif: "", data: [0, 0, 0, 0] },
      isHovered: {},
      isEdited: false,
    };
  }

  componentDidMount() {
    this.setState({
      alternatif: JSON.parse(localStorage.getItem("alternatif")),
      data: JSON.parse(localStorage.getItem("data_rs")),
    });
    M.AutoInit();
  }

  resetModal = () => {
    this.setState({
      modal: { alternatif: "", data: [0, 0, 0, 0] },
      isEdited: false,
    });
  };

  editNama = (event) => {
    let data = this.state.modal;
    data["alternatif"] = event.target.value;
    this.setState({ modal: data });
  };

  editBor = (event) => {
    let data = this.state.modal;
    data["data"][0] = parseFloat(event.target.value);
    this.setState({ modal: data });
  };

  editBto = (event) => {
    let data = this.state.modal;
    data["data"][1] = parseFloat(event.target.value);
    this.setState({ modal: data });
  };

  editToi = (event) => {
    let data = this.state.modal;
    data["data"][2] = parseFloat(event.target.value);
    this.setState({ modal: data });
  };

  editAvlos = (event) => {
    let data = this.state.modal;
    data["data"][3] = parseFloat(event.target.value);
    this.setState({ modal: data });
  };

  handleMouseEnter = (index) => {
    this.setState((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  };

  handleMouseLeave = (index) => {
    this.setState((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  handleTambahAlternatif = () => {
    let alternatif = this.state.alternatif;
    let data = this.state.data;
    alternatif.push(this.state.modal.alternatif);
    data.push(this.state.modal.data);
    this.setState({ alternatif, data });
    localStorage.setItem("alternatif", JSON.stringify(this.state.alternatif));
    localStorage.setItem("data_rs", JSON.stringify(this.state.data));
    this.resetModal();
  };

  handleEditAlternatif = () => {
    let alternatif = this.state.alternatif;
    let data = this.state.data;
    alternatif[this.state.modal.id] = this.state.modal.alternatif;
    data[this.state.modal.id] = this.state.modal.data;
    this.setState({ alternatif, data });
    localStorage.setItem("alternatif", JSON.stringify(this.state.alternatif));
    localStorage.setItem("data_rs", JSON.stringify(this.state.data));
    this.resetModal();
  };

  handleHapusAlternatif = (index) => {
    let alternatif = this.state.alternatif;
    let data = this.state.data;
    alternatif.splice(index, 1);
    data.splice(index, 1);
    this.setState({ alternatif, data });
    localStorage.setItem("alternatif", JSON.stringify(this.state.alternatif));
    localStorage.setItem("data_rs", JSON.stringify(this.state.data));
  };

  editAlternatif = (index) => {
    this.setState({ isEdited: true });
    let modal = this.state.modal;
    modal.id = index;
    modal.alternatif = this.state.alternatif[index];
    modal.data = [...this.state.data[index]];
    this.setState({ modal });
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
                        {this.state.data[index].map((item2, i) => {
                          return (
                            <td className="center-align" key={i}>
                              {item2}
                            </td>
                          );
                        })}
                        <td>
                          {this.state.isHovered[index] ? (
                            <div>
                              <a
                                href="#modal"
                                className="modal-trigger"
                                onClick={() => this.editAlternatif(index)}
                              >
                                <i
                                  style={{
                                    cursor: "pointer",
                                    borderRadius: 10,
                                    marginRight: 10,
                                  }}
                                  className="material-icons hoverable z-depth-1 teal-text"
                                >
                                  edit
                                </i>
                              </a>
                              <i
                                onClick={() =>
                                  this.handleHapusAlternatif(index)
                                }
                                style={{
                                  cursor: "pointer",
                                  borderRadius: 10,
                                }}
                                className="material-icons hoverable z-depth-1 grey-text text-darken-2"
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
            </div>
          </div>
          <div className="row" style={{ margin: 0 }}>
            <div className="col s12">
              <div className="row">
                <div className="col s10 offset-s1 left-align">
                  <a
                    className="waves-effect waves-light modal-trigger btn"
                    onClick={this.resetModal}
                    href="#modal"
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
          <div id="circle-small-alternatif"></div>
          <div id="circle-small-alternatif1"></div>
          <div id="circle-small-alternatif2"></div>
        </div>

        <div
          id="modal"
          className="modal"
          style={{ maxWidth: 750, borderRadius: 10 }}
        >
          <div className="modal-content left-align">
            <h5>{this.state.isEdited ? "Edit" : "Tambah"} Alternatif</h5>
            <div className="row" style={{ margin: 0 }}>
              <div className="input-field col s7">
                <input
                  id="nama"
                  type="text"
                  className="validate"
                  value={this.state.modal.alternatif}
                  onChange={(event) => {
                    this.editNama(event);
                  }}
                />
                <label
                  htmlFor="nama"
                  className={this.state.isEdited ? "active" : ""}
                >
                  Nama Rumah Sakit
                </label>
              </div>
              <div className="input-field col s5">
                <input
                  id="bor"
                  type="number"
                  min={0}
                  value={this.state.modal.data[0]}
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
                  value={this.state.modal.data[1]}
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
                  value={this.state.modal.data[2]}
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
                  value={this.state.modal.data[3]}
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
              onClick={
                this.state.isEdited
                  ? this.handleEditAlternatif
                  : this.handleTambahAlternatif
              }
            >
              Simpan
            </a>
          </div>
        </div>
      </div>
    );
  }
}
