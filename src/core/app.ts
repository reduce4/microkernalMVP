import { Container } from "typescript-ioc";
import collaborate from "./abilites/collaborate";
import BlockCollaborate from "./abilites/blockCollaborate";
import Block from "./block";
import UserCollaborate from "./abilites/userCollaborate";

const mockBlocksData = [
  {
    id: "@reduce-1",
    type: "left",
    plugins: [
      { name: "button", url: "/plugins/button/index.js" },
      { name: "webcomponent", url: "/plugins/webcomponent/index.js" },
    ],
  },
  {
    id: "@reduce-2",
    type: "top",
    plugins: [],
  },
  {
    id: "@reduce-3",
    type: "operate",
    plugins: [
      { name: "button2", url: "/plugins/button2/index.js" },
      { name: "list", url: "/plugins/list/index.js" },
    ],
  },
];

class App {
  private container: Container;
  private blocks: Array<Block> = [];
  constructor() {
    this.container = new Container();
    //@ts-ignore
    window.plugins = {};
    //注册基座能力
    // Container.bind(collaborate).to(BlockCollaborate);
    // Container.get(collaborate).collaborate();
    Container.bind(collaborate).to(UserCollaborate);
    Container.get(collaborate).collaborate();
    //注册基座(块)
    mockBlocksData.forEach((mockBlocksData) => {
      const b = new Block(mockBlocksData.type, mockBlocksData.id);
      b.registerPlugin(mockBlocksData.plugins);
      this.blocks.push(b);
    });
    this.blocks.forEach((e) => e.loadPlugin());
  }
}
export default new App();
