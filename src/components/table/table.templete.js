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

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsColumn).fill("").map(createCell).join("");
    rows.push(createRow(i + 1, cells));
  }

  return rows.join("");
}

function createRow(index, content) {
  const resizer = index
    ? '<div class="row-resize" data-resize="row" ></div>'
    : "";
  return `
    <div class="table__row row" data-type="resizeble">
        <div class="row__info">
          ${index ? index : ""}
          ${resizer}
        </div>
        <div class="row__data">${content}</div>
    </div>
    `;
}

function createCol(el, index) {
  return `
    <div class="row__data-column" data-type="resizeble" data-col="${index}">
        ${el}
        <div class="col-resize" data-resize="col"></div>
    </div>
    `;
}

function createCell(_, index) {
  return `
    <div class="row__data-cell" contenteditable data-col="${index}">
    </div>
    `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}
