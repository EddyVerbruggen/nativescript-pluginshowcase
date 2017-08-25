import { PluginInfo } from "./plugin-info";

export class PluginInfoWrapper {
  description: string;
  plugins: Array<PluginInfo>;

  constructor(description: string, plugins: Array<PluginInfo>) {
    this.description = description;
    this.plugins = plugins;
  }
}