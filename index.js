import { createNode } from "./utils/utils.js";
const navTop = document.querySelector(".tuid__nav--top");
// console.log(window.location.pathname);
// util function to create dom nodes

createNode({
  element: "div",
  className: "tuid__logo--nav",
  children: [
    createNode({
      element: "a",
      href: "/",
      children: [
        createNode({
          element: "h1",
          className: "tui__h-2",
          innerText: "thisUI",
        }),
      ],
    }),
    createNode({
      element: "span",
      innerText: "v1.0",
      className: "tui__small--text",
    }),
  ],
  parent: navTop,
});
createNode({
  element: "ul",
  className: "tuid__nav--list tui__text-base",
  children: [
    createNode({
      element: "li",
      children: [
        createNode({ element: "a", href: "./usage/", innerText: "Docs" }),
      ],
    }),
  ],
  parent: navTop,
});
