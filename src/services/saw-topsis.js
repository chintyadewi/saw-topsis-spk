import range from "./range";

const kriteria = [
  { nama: "BOR - Bed Occupancy Ratio (%)", isBenefit: true, bobot: 0.3 },
  { nama: "BTO - Bed Turn Over (kali)", isBenefit: true, bobot: 0.26 },
  { nama: "TOI - Turn Over Interval (hari)", isBenefit: false, bobot: 0.18 },
  {
    nama: "AVLOS - Average Length of Stay (hari)",
    isBenefit: false,
    bobot: 0.27,
  },
];

const alternatif = [
  "RS Karsa Husada",
  "RS Baptis Batu",
  "RS Bhayangkara",
  "RS dr. Etty Asharto",
  "RSIA HAJI",
  "RS PUNTEN",
];

// data[alternatif][kriteria]
const data = [
  [47.4, 50.2, 3.8, 3.4],
  [44.4, 56.2, 3.6, 2.6],
  [74.4, 76.6, 1.2, 2.5],
  [35, 50.9, 4.7, 2.6],
  [33.5, 62.1, 3.9, 2.1],
  [36.5, 33.4, 7, 3.5],
];

// ----------------------------------------
// MATRIKS RANGE
// -----------------(-----------------------
const hitungRange = (data) => {
  let hasilRange = [];
  for (const a in data) {
    let hasilKriteria = [];
    for (const c in data[a]) {
      if (c === "0") {
        hasilKriteria[c] = range.bor(data[a][c]);
      } else if (c === "1") {
        hasilKriteria[c] = range.bto(data[a][c]);
      } else if (c === "2") {
        hasilKriteria[c] = range.toi(data[a][c]);
      } else if (c === "3") {
        hasilKriteria[c] = range.avlos(data[a][c]);
      }
    }
    hasilRange[a] = hasilKriteria;
  }
  return hasilRange;
};

const normalisasiSaw = (hasilRange) => {
  let hasilMaxMin = [];
  for (const c in hasilRange[0]) {
    let tempArray = [];
    let hasil = 0;
    for (const a of hasilRange) {
      tempArray.push(a[c]);
      if (kriteria[c].isBenefit) {
        hasil = Math.max.apply(Math, tempArray);
      } else {
        hasil = Math.min.apply(Math, tempArray);
      }
    }
    hasilMaxMin[c] = hasil;
  }

  // ----------------------------------------
  // MATRIKS NORMALISASI
  // ----------------------------------------
  let hasilNormalisasi = [];
  for (const a in hasilRange) {
    let hasilKriteria = [];
    for (const c in hasilRange[a]) {
      if (kriteria[c].isBenefit) {
        hasilKriteria[c] = hasilRange[a][c] / hasilMaxMin[c];
      } else {
        hasilKriteria[c] = hasilMaxMin[c] / hasilRange[a][c];
      }
    }
    hasilNormalisasi[a] = hasilKriteria;
  }
  return hasilNormalisasi;
};

// ----------------------------------------
// MATRIKS NORMALISASI TERBOBOT
// ----------------------------------------
const normalisasiTerbobot = (hasilNormalisasi) => {
  let hasilNormalisasiTerbobot = [];
  for (const a in hasilNormalisasi) {
    let hasilKriteria = [];
    for (const c in hasilNormalisasi[a]) {
      hasilKriteria[c] = hasilNormalisasi[a][c] * kriteria[c].bobot;
    }
    hasilNormalisasiTerbobot[a] = hasilKriteria;
  }
  return hasilNormalisasiTerbobot;
};

// ----------------------------------------
// A+, A- (Ideal positif & Negatif)
// ----------------------------------------
const idealPositifNegatif = (hasilNormalisasiTerbobot) => {
  let idealPositif = [];
  let idealNegatif = [];
  for (const c in hasilNormalisasiTerbobot[0]) {
    let tempArray = [];
    let hasilPositif = 0;
    let hasilNegatif = 0;
    for (const a of hasilNormalisasiTerbobot) {
      tempArray.push(a[c]);
      if (kriteria[c].isBenefit) {
        hasilPositif = Math.max.apply(Math, tempArray);
        hasilNegatif = Math.min.apply(Math, tempArray);
      } else {
        hasilPositif = Math.min.apply(Math, tempArray);
        hasilNegatif = Math.max.apply(Math, tempArray);
      }
    }
    idealPositif[c] = hasilPositif;
    idealNegatif[c] = hasilNegatif;
  }
  return [idealPositif, idealNegatif];
};

// ----------------------------------------
// D+, D- (Jarak Alternatif)
// ----------------------------------------
const jarakIdealPositifNegatif = (
  hasilNormalisasiTerbobot,
  idealPositif,
  idealNegatif
) => {
  let jarakIdealPositif = [];
  let jarakIdealNegatif = [];
  for (const a in hasilNormalisasiTerbobot) {
    let hasilPositif = 0;
    let hasilNegatif = 0;
    for (const c in hasilNormalisasiTerbobot[a]) {
      hasilPositif += Math.pow(
        idealPositif[c] - hasilNormalisasiTerbobot[a][c],
        2
      );
      hasilNegatif += Math.pow(
        hasilNormalisasiTerbobot[a][c] - idealNegatif[c],
        2
      );
    }
    jarakIdealPositif[a] = Math.sqrt(hasilPositif);
    jarakIdealNegatif[a] = Math.sqrt(hasilNegatif);
  }
  return [jarakIdealPositif, jarakIdealNegatif];
};

// ----------------------------------------
// Vektor V - Skor Akhir
// ----------------------------------------
const skorAkhir = (jarakIdealPositif, jarakIdealNegatif) => {
  let skorAkhir = [];
  for (const i in jarakIdealPositif) {
    skorAkhir[i] =
      jarakIdealNegatif[i] / (jarakIdealNegatif[i] + jarakIdealPositif[i]);
  }
  return skorAkhir;
};

const hasilRank = (skorAkhir) => {
  // mencari ranking
  let sorted = skorAkhir.slice().sort(function (a, b) {
    return b - a;
  });
  // .reverse();
  let rank = skorAkhir.map(function (v) {
    return sorted.indexOf(v) + 1;
  });
  return rank;
};

export default {
  kriteria,
  alternatif,
  data,
  hitungRange,
  normalisasiSaw,
  normalisasiTerbobot,
  idealPositifNegatif,
  jarakIdealPositifNegatif,
  skorAkhir,
  hasilRank,
};
