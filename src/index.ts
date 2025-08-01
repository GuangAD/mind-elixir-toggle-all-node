import type { MindElixirInstance, Topic } from "mind-elixir";

const map: Record<string, string> = {
  expand: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="200px" height="177.78px" viewBox="0 0 1152 1024" version="1.1"><path d="M205.696 135.424L353.28 0l58.176 58.176-205.76 190.336L0 58.24 58.112 0l147.584 135.424zM617.088 1.728H534.848v987.456h82.24V1.728z m123.52 246.848H1152V330.88H740.48V248.576z m329.088 329.152h-329.152v82.304h329.152V577.728z m-82.304 329.152h-246.848v82.304h246.848V906.88z" fill="#444343"/></svg>`,
  collapse: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="200px" height="177.78px" viewBox="0 0 1152 1024" version="1.1"><path d="M818.304 888.576L670.72 1024l-58.176-58.176 205.76-190.33599999L1024 965.76 965.888 1024l-147.584-135.424zM406.912 1022.272l82.24 0 0-987.456-82.24000001 0L406.912 1022.272z m-123.52-246.848L-128 775.424l0-82.304L283.52 693.12l0 82.304z m-329.088-329.15199999L283.456 446.27200001l0-82.30400001-329.152 0 0 82.30400001zM36.608 117.12L283.45600001 117.12l-1e-8-82.30399999-246.848-1e-8L36.608 117.12z"/></svg>`,
};

const createButton = (id: string, name: string) => {
  const button = document.createElement("span");
  button.id = id;
  button.innerHTML = map[name];
  return button;
};

export default function initPlugin(mind: MindElixirInstance) {
  const toolBarLTContainer = mind.container.querySelector(
    ".mind-elixir-toolbar.lt"
  );
  if (!toolBarLTContainer) {
    return;
  }
  const expand = createButton("tbl_expand", "expand");
  toolBarLTContainer.appendChild(expand);
  expand.addEventListener("click", () => {
    toggleAllNodes(mind, true);
  });
  const collapse = createButton("tbl_collapse", "collapse");
  toolBarLTContainer.appendChild(collapse);
  collapse.addEventListener("click", () => {
    toggleAllNodes(mind, false);
  });
}

// type HasChildren = {
//   children?: Array<any>;
// };

// function traversal<T extends HasChildren>(
//   list: Array<T>,
//   callback: (element: T) => void
// ) {
//   for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     callback(element);
//     if (element.children && element.children.length) {
//       traversal(element.children, callback);
//     }
//   }
// }

function toggleAllNodes(mind: MindElixirInstance, isExpand = true) {
  const targetArr = mind.nodeData?.children || [];

  if (mind.expandNodeAll) {
    for (let index = 0; index < targetArr.length; index++) {
      const nodeObj = targetArr[index];
      mind.expandNodeAll({ nodeObj } as Topic, isExpand);
    }
  } else {
    // traversal(targetArr, node => {
    //   mind.expandNode(node, isExpand);
    // });
  }
  mind.toCenter();
}
