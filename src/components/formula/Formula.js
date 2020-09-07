import { ExcelComponent } from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: "Formula",
      listeners: ["input", "keydown"],
      ...options,
    });
  }
  static className = "excel__formula";

  toHTML() {
    return `
    <div class="formula__info">fx</div> 
    <div class="formula__input input" id="formula" contenteditable spellcheck="false"></div>
    `;
  }

  init() {
    super.init();

    this.$formula = this.$root.find("#formula");

    this.$on("table:select", ($cell) => {
      this.$formula.text($cell[0].text());
    });

    this.$on("table:input", ($cell) => {
      this.$formula.text($cell[0].text());
    });
  }

  onInput(event) {
    const text = event.target.textContent.trim();
    console.log(text);
    this.$emit("formula:input", text);
  }

  onKeydown(event) {
    const keys = ["Enter", "Tab"];
    if (keys.includes(event.key)) {
      event.preventDefault();

      this.$emit("formula:done");
    }
  }
}
