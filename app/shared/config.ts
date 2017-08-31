export class Config {
  static isProdMode: boolean = false;
  static isTablet: boolean = false; // set in app.module.ts

  static DEBUG_MODE = {
    firstPage: "/menu"
  };
}