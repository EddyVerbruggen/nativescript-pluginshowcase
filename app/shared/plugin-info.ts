export class PluginInfo {
  id: string;
  name: string;
  url: string;
  description?: string;

  constructor(id: string, name: string, url: string, description?: string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.description = description;
  }
}