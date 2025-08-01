# mind-elixir-toggle-all-node

一个 [mind-elixir](https://github.com/ssshooter/mind-elixir-core) 的插件，在左侧的按钮组中增加两个按钮，可以展开/收取所有节点。

> 注意，这个插件依赖 [mind-elixir](https://www.npmjs.com/package/mind-elixir) 的版本 >= 5.0.0

### 使用

```
npm i mind-elixir-toggle-all-node
```

```js
import MindElixir from "mind-elixir";
import ToggleAllNode from "mind-elixir-toggle-all-node";

const mind = new MindElixir(options);
mind.init(data);
mind.install(ToggleAllNode);
```

![demo](https://github.com/GuangAD/mind-elixir-toggle-all-node/blob/main/image/1.png?raw=true)
