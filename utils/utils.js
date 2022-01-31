export function createNode({
  element,
  className,
  parent,
  innerText,
  innerHTML,
  href,
  src,
  children = [],
}) {
  let createdNode = document.createElement(element);
  if (className) createdNode.className = className;
  if (parent) parent.appendChild(createdNode);
  if (innerText) createdNode.innerText = innerText;
  if (innerHTML) createdNode.innerHTML = innerHTML;
  if (href) createdNode.href = href;
  if (src) createdNode.src = src;
  children.forEach((node) => {
    createdNode.appendChild(node);
  });
  return createdNode;
}
