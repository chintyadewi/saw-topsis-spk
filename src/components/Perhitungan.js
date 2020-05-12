import React, { Component } from "react";
import SawTopsis from "../services/saw-topsis";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

export default function Perhitungan() {
  const alternatif = JSON.parse(localStorage.getItem("alternatif"));
  const localData = JSON.parse(localStorage.getItem("data_rs"));
  const range = SawTopsis.hitungRange(localData);
  const normalisasiSaw = SawTopsis.normalisasiSaw(range);
  const normalisasiTerbobot = SawTopsis.normalisasiTerbobot(normalisasiSaw);
  const idealPositifNegatif = SawTopsis.idealPositifNegatif(
    normalisasiTerbobot
  );
  const jarakIdealPositifNegatif = SawTopsis.jarakIdealPositifNegatif(
    normalisasiTerbobot,
    idealPositifNegatif[0],
    idealPositifNegatif[1]
  );
  const skorAkhir = SawTopsis.skorAkhir(
    jarakIdealPositifNegatif[0],
    jarakIdealPositifNegatif[1]
  );
  const peringkat = SawTopsis.hasilRank(skorAkhir);

  const langkah1 = () => {
    return (
      <div>
        <div className="row">
          <div className="col s4">
            <p>
              <b>Range nilai kriteria: </b>
            </p>
          </div>
          <div className="col s6">
            <ol>
              <li> Sangat buruk</li>
              <li> Buruk</li>
              <li> Cukup</li>
              <li> Baik</li>
              <li> Sangat Baik</li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <table className="responsive-table">
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
                {alternatif.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="center-align">{index + 1}</td>
                      <td className="left-align">{item}</td>
                      {range[index].map((item2, i) => {
                        return (
                          <td className="center-align" key={i}>
                            {item2}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const langkah2 = () => {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <table className="responsive-table">
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
                {alternatif.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="center-align">{index + 1}</td>
                      <td className="left-align">{item}</td>
                      {normalisasiSaw[index].map((item2, i) => {
                        return (
                          <td className="center-align" key={i}>
                            {item2}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const langkah3 = () => {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <table className="responsive-table">
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
                {alternatif.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="center-align">{index + 1}</td>
                      <td className="left-align">{item}</td>
                      {normalisasiTerbobot[index].map((item2, i) => {
                        return (
                          <td className="center-align" key={i}>
                            {item2.toFixed(3)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const langkah4 = () => {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th className="center-align">Ideal</th>
                  <th className="center-align">BOR (%)</th>
                  <th className="center-align">BTO (kali)</th>
                  <th className="center-align">TOI (hari)</th>
                  <th className="center-align">AVLOS (hari)</th>
                </tr>
              </thead>
              <tbody>
                {idealPositifNegatif.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="center-align">
                        {index === 0 ? "A+" : "A-"}
                      </td>
                      {idealPositifNegatif[index].map((item2, i) => {
                        return (
                          <td className="center-align" key={i}>
                            {item2}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const langkah5 = () => {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th className="center-align">No.</th>
                  <th className="center-align">Alternatif</th>
                  <th className="center-align">D+</th>
                  <th className="center-align">D-</th>
                </tr>
              </thead>
              <tbody>
                {alternatif.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="center-align">{index + 1}</td>
                      <td className="left-align">{item}</td>
                      <td className="center-align">
                        {jarakIdealPositifNegatif[0][index].toFixed(4)}
                      </td>
                      <td className="center-align">
                        {jarakIdealPositifNegatif[1][index].toFixed(4)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const langkah6 = () => {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th className="center-align">No.</th>
                  <th className="center-align">Alternatif</th>
                  <th className="center-align">Hasil Perhitungan</th>
                  <th className="center-align">Ranking</th>
                </tr>
              </thead>
              <tbody>
                {alternatif.map((item, index) => {
                  return (
                    <tr
                      className={peringkat[index] === 1 ? "yellow" : ""}
                      key={index}
                    >
                      <td className="center-align">{index + 1}</td>
                      <td className="left-align">{item}</td>
                      <td className="center-align">
                        {skorAkhir[index].toFixed(4)}
                      </td>
                      <td className="center-align">{peringkat[index]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div id="perhitungan" className="center-align">
        {console.log(idealPositifNegatif)}
        <div className="row">
          <div className="col s10 offset-s1">
            <h3>Hasil Perhitungan</h3>
            <p>
              Berikut hasil perangkingan menggunakan metode gabungan SAW-TOPSIS
            </p>

            <div className="row">
              <div className="col s10 offset-s1">
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th className="center-align">No.</th>
                      <th>Nama RS</th>
                      <th className="center-align">
                        Hasil Perhitungan SAW-TOPSIS
                      </th>
                      <th className="center-align">Peringkat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skorAkhir.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="center-align">{index + 1}</td>
                          <td className="left-align">{alternatif[index]}</td>
                          <td className="center-align">{item}</td>
                          <td className="center-align">
                            {peringkat[index] === 1 ? (
                              <b>{peringkat[index]}</b>
                            ) : (
                              peringkat[index]
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="circle-small-perhitungan"></div>
            <div id="circle-small-perhitungan1"></div>
          </div>
        </div>
      </div>
      <div id="langkah" className="center-align">
        <div className="row">
          <div className="col s12">
            <h5>Langkah Perhitungan</h5>
            <div className="row">
              <div className="col s6">
                <Collapsible accordion={false}>
                  <CollapsibleItem
                    expanded={false}
                    header="1. Mengubah data kedalam range dalam nilai yang sama"
                    icon={<Icon className="teal-text">linear_scale</Icon>}
                    node="div"
                    className="left-align"
                  >
                    {langkah1()}
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="2. Matriks Normalisasi Data Menggunakan Metode SAW"
                    icon={<Icon className="teal-text">functions</Icon>}
                    node="div"
                  >
                    {langkah2()}
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="3. Matriks Normalisasi Terbobot Metode Topsis"
                    icon={<Icon className="teal-text">line_weight</Icon>}
                    node="div"
                  >
                    {langkah3()}
                  </CollapsibleItem>
                </Collapsible>
              </div>

              <div className="col s6">
                <Collapsible accordion={false}>
                  <CollapsibleItem
                    expanded={false}
                    header="4. Mencari Solusi Ideal Positif dan Negatif (A+, A-)"
                    icon={<Icon className="teal-text">iso</Icon>}
                    node="div"
                    className="left-align"
                  >
                    {langkah4()}
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="5. Mencari Jarak Alternatif dengan Solusi Ideal Positif dan Negatif (D+, D-)"
                    icon={<Icon className="teal-text">swap_horiz</Icon>}
                    node="div"
                  >
                    {langkah5()}
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="6. Nilai Preferensi (V) dan Ranking"
                    icon={<Icon className="teal-text">equalizer</Icon>}
                    node="div"
                  >
                    {langkah6()}
                  </CollapsibleItem>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
