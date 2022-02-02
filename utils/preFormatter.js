function preFormatter() {
  const code = document.querySelectorAll(".language-markup");
  for (let i of code) {
    let x = i.innerHTML;
    x.replaceAll("<", "&lt;");
    x.replaceAll(">", "&gt;\n");
    i.textContent = x;
  }
}
preFormatter();
