function bor(data) {
  if (data > 0 && data <= 20) {
    return 1;
  } else if (data <= 40) {
    return 2;
  } else if (data <= 60) {
    return 3;
  } else if (data <= 80) {
    return 4;
  } else if (data <= 100 || data > 100) {
    return 5;
  }
}

function bto(data) {
  if (data > 0 && data <= 15) {
    return 1;
  } else if (data <= 30) {
    return 2;
  } else if (data <= 45) {
    return 3;
  } else if (data <= 60) {
    return 4;
  } else if (data <= 75 || data > 75) {
    return 5;
  }
}

function toi(data) {
  if (data > 0 && data <= 3) {
    return 5;
  } else if (data <= 6) {
    return 4;
  } else if (data <= 9) {
    return 3;
  } else if (data <= 12) {
    return 2;
  } else if (data <= 15 || data > 15) {
    return 1;
  }
}

function avlos(data) {
  if (data > 0 && data <= 3) {
    return 1;
  } else if (data <= 6) {
    return 2;
  } else if (data <= 9) {
    return 3;
  } else if (data <= 12) {
    return 4;
  } else if (data <= 15 || data > 15) {
    return 5;
  }
}

const range = {
  bor,
  bto,
  toi,
  avlos,
};
export default range;
