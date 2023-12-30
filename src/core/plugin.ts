import Block from "./block";

class Plugin {
  private _name: string = "@reduce4";
  private _url: string = "";
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

  public set name(v: string) {
    this._name = v;
  }

  public get name(): string {
    return this._name;
  }
}
export default Plugin;
