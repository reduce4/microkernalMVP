import { Inject } from "typescript-ioc";
import collaborate from "./abilites/collaborate";
import IPlugin from "./plugin";
import { loadPluginList } from "mini-star";
class Block {
  @Inject
  private colla?: collaborate;
  protected type: string = "operate";
  private pluginsArr: Array<IPlugin> = [];
  private pluginsMap: Map<string, IPlugin> = new Map();
  private id: string;
  constructor(type: string, id: string) {
    this.type = type;
    this.id = id;
  }

  public collaborate() {
    this.colla?.collaborate();
  }
  public registerPlugin(plugins: Array<{ name: string; url: string }>) {
    plugins.forEach(({ name, url }) => {
      const p = new IPlugin();
      p.name = name;
      p.url = url;
      this.pluginsArr.push(p);
      this.pluginsMap.set(p.name, p);
    });
  }
  public async loadPlugin() {
    await loadPluginList(
      this.pluginsArr.map((plugin) => {
        return {
          name: plugin.name,
          url: plugin.url,
        };
      })
    );
    //@ts-ignore
    this.pluginsArr.forEach((plugin) => {
      //@ts-ignore
      window.plugins[plugin.name]?.onload(this);
    });
  }
  public removePlugin() {}
}
export default Block;
