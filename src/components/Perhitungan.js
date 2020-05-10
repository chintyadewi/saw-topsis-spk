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

  return (
    <>
      <div id="perhitungan" className="center-align">
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
                          <td className="center-align">{peringkat[index]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="langkah" className="center-align">
        <div className="row">
          <div className="col s10 offset-s1">
            <h4>Langkah Perhitungan</h4>
            <p>
              Berikut langkah-langkah perangkingan menggunakan metode gabungan
              SAW-TOPSIS
            </p>
            <div className="row">
              <div className="col s6">
                <Collapsible accordion={false}>
                  <CollapsibleItem
                    expanded={false}
                    header="Better safe than sorry. That's my motto."
                    icon={<Icon>filter_drama</Icon>}
                    node="div"
                  >
                    Better safe than sorry. That's my motto.
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="Yeah, you do seem to have a little 'shit creek' action going."
                    icon={<Icon>place</Icon>}
                    node="div"
                  >
                    Yeah, you do seem to have a little 'shit creek' action
                    going.
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                  >
                    You know, FYI, you can buy a paddle. Did you not plan for
                    this contingency?
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
