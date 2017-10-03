class RadioOption {
  label: string;
  selected: boolean;

  constructor(label: string) {
    this.label = label;
  }
}

export class CheckboxHelper {
  checkbox1: boolean;
  checkbox2: boolean;
  radios: Array<RadioOption> = [];

  constructor() {
    this.radios.push(new RadioOption("NativeScript!"));
    this.radios.push(new RadioOption("React Native!"));
  }

  radioOptionSelected(radio: RadioOption): void {
    radio.selected = !radio.selected;

    if (!radio.selected) {
      return;
    }

    // uncheck all other options
    this.radios.forEach(option => {
      if (option.label !== radio.label) {
        option.selected = false;
      }
    });
  }
}