import createIconElement from "libs/createIconElement";
import icons from "libs/icons";
import ratingToRank from "libs/ratingToRank";

const updateProfile = (): void => {
  const _tableElements = document.querySelectorAll("table");
  if (_tableElements.length < 2) return;
  const tableElement = _tableElements[1];

  [...Array(2)].map((_, index) => {
    const tdElement = tableElement.tBodies[0].rows[
      index +
        (tableElement.tBodies[0].rows[0].cells[0].innerText === "順位" ? 1 : 0)
    ].cells[1] as HTMLTableCellElement;
    const spanElement = tdElement.querySelector("span") as HTMLSpanElement;
    const rating = +spanElement.innerText || 0;
    const iconElement = createIconElement(icons[ratingToRank(rating)]);

    const colorClassName = spanElement.className;
    iconElement.setAttribute("class", colorClassName);
    iconElement.style.verticalAlign = "text-bottom";
    iconElement.style.marginRight = "2px";

    tdElement.insertBefore(iconElement, spanElement);

    if (index === 0) {
      const canvasElement = document.querySelector("canvas#ratingStatus");
      const divElement = canvasElement?.parentElement;
      if (!canvasElement || !divElement) return;
      const bigIconElement = iconElement.cloneNode(true) as SVGElement;
      bigIconElement.style.width = "48px";
      bigIconElement.style.height = "48px";
      divElement.style.position = "relative";
      bigIconElement.style.position = "absolute";
      bigIconElement.style.top = "-10px";
      bigIconElement.style.left = "34px";
      divElement.insertBefore(bigIconElement, canvasElement);
    }
  });
};

export default updateProfile;
