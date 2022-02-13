import { createNode } from "./utils/utils.js";
import { darkTheme } from "./atoms/theme/index.js";
import { setTheme } from "./atoms/theme/index.js";
const navTop = document.querySelector(".tuid__nav--top");
const drawer = document.querySelector(".tuid__drawer");
const themeSwitch = document.querySelector(".tui_theme--Switch");
let theme = localStorage.getItem("tuid__theme");
console.log(theme);
let globalThemeLight;
if (theme == "light") {
  globalThemeLight = true;
  setTheme();
} else if (theme == "dark") {
  globalThemeLight = false;
  setTheme({ theme: darkTheme });
} else {
  globalThemeLight = true;
  setTheme();
  localStorage.setItem("tuid__theme", "light");
}
const themeSwitcher = () => {
  if (globalThemeLight) {
    setTheme({ theme: darkTheme });
    localStorage.setItem("tuid__theme", "dark");
    document
      .querySelector(".tui_theme--Switch")
      .setAttribute("src", "/assets/svgs/sun.svg");
  } else {
    setTheme();
    localStorage.setItem("tuid__theme", "light");
    document
      .querySelector(".tui_theme--Switch")
      .setAttribute("src", "/assets/svgs/moon.svg");
  }
  globalThemeLight = !globalThemeLight;
  console.log(globalThemeLight);
};

// console.log(window.location.pathname);
// util function to create dom nodes
const drawerData = [
  { innerText: "Introduction", href: "/usage" },
  // { innerText: "Colors", href: "/atoms/colors" },
  { innerText: "Typography", href: "/atoms/typography" },
  { innerText: "Alert", href: "/atoms/alert" },
  { innerText: "Avatar", href: "/atoms/avatar" },
  { innerText: "Badge", href: "/atoms/badge" },
  { innerText: "Button", href: "/atoms/button" },
  { innerText: "Card", href: "/molecules/card" },
  { innerText: "Image", href: "/atoms/image" },
  { innerText: "Input", href: "/atoms/input" },
  { innerText: "Grid", href: "/atoms/grid" },
  { innerText: "List", href: "/atoms/list" },
  { innerText: "Navbar", href: "/molecules/navbar" },
  { innerText: "Rating", href: "/molecules/rating" },
  { innerText: "Slider", href: "/atoms/slider" },
  { innerText: "Toast", href: "/molecules/toast" },
  { innerText: "Modal", href: "/molecules/modal" },
  // { innerText: "Dummy", href: "/atoms/typography" },
  // { innerText: "Dummy", href: "/atoms/typography" },
  // { innerText: "Dummy", href: "/atoms/typography" },
  // { innerText: "Dummy", href: "/atoms/typography" },
];
function createnavBar(navTop) {
  createNode({
    element: "div",
    className: "tuid__logo--nav tui__flex--row-pack",
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
    className: "tuid__nav--list tui__text-md",
    children: [
      createNode({
        element: "li",
        children: [
          createNode({
            element: "img",
            src: globalThemeLight
              ? "/assets/svgs/moon.svg"
              : "/assets/svgs/sun.svg",
            className:
              "tuid__nav--menu tui_theme--Switch tui__col--svg tui__m-in-sm",
            onClick: themeSwitcher,
          }),
          ,
          window.location.pathname == "/" ||
          window.location.pathname == "/index.html"
            ? createNode({
                element: "a",
                href: "/usage/",
                innerText: "Docs",
              })
            : createNode({
                element: "img",
                src: "/assets/svgs/menu.svg",
                className: "tuid__nav--menu tui__col--svg",
                onClick: (e) => {
                  drawer.classList.contains("tui__dis--none")
                    ? drawer.classList.remove("tui__dis--none")
                    : drawer.classList.add("tui__dis--none");
                },
              }),
        ],
      }),
    ],
    parent: navTop,
  });
}

function createDrrawer(drawer, drawerData) {
  createNode({
    element: "header",
    parent: drawer,
    children: [
      createNode({
        element: "h2",
        className: "tui__h-2 tui__m-md",
        innerText: "Places to Go!",
      }),
    ],
  });
  createNode({
    element: "ul",
    parent: drawer,
    className: "tui__drawer--list tui__flex--col-justify-center",
    children: [
      ...drawerData.map((li) =>
        createNode({
          element: "li",
          className: "tuid__drawer--li",
          children: [createNode({ element: "a", ...li })],
        })
      ),
    ],
  });
}
createnavBar(navTop);
createDrrawer(drawer, drawerData);
