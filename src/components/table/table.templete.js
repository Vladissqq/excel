const CODES = {
  A: 65,
  Z: 90,
};

export function createTable(rowsCount = 15) {
  const colsColumn = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsColumn)
    .fill("")
    .map(toChar)
    .map(createCol)
    .join("");

  rows.push(createRow("", cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsColumn).fill("").map(createCell).join("");
    rows.push(createRow(i + 1, cells));
  }

  return rows.join("");
}

function createRow(index, content) {
  return `
    <div class="table__row row">
        <div class="row__info">${index}</div>
        <div class="row__data">${content}</div>
    </div>
    `;
}

function createCol(el) {
  return `
    <div class="row__data-column">
        ${el}
    </div>
    `;
}

function createCell() {
  return `
    <div class="row__data-cell" contenteditable>
    </div>
    `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}
