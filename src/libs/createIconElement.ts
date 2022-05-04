const createIconElement = (iconSvg: string): SVGElement => {
  const template = document.createElement("template");
  template.innerHTML = iconSvg;
  return template.content.firstChild as SVGElement;
};

export default createIconElement;
