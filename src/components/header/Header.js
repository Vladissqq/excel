import { ExcelComponent } from "@core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = "excel__header";
  toHTML() {
    return `
        <input type="text" class="header__input" value="new table">
        <div>
          <div class="header__button">
            <i class="material-icons">delete</i>
          </div>
          <div class="header__button">
            <i class="material-icons">exit_to_app</i>
          </div>
        </div>
    `;
  }
}
