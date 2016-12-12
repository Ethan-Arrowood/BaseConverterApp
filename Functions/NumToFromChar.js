function NumToChar(c) {
  return c < 10 ? c.toString() : String.fromCharCode(c + 55);
}

function NumFromChar(c) {
  return c.charCodeAt() - 55;
}

export { NumToChar, NumFromChar };
