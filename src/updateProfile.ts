import createIconElement from "libs/createIconElement";
import ratingToRankSvg from "libs/ratingToRankSvg";

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
    const iconElement = createIconElement(ratingToRankSvg(rating));

    const colorClassName = spanElement.className;
    iconElement.setAttribute("class", colorClassName);
    Object.assign(iconElement.style, {
      width: "14px",
      height: "14px",
      verticalAlign: "text-bottom",
      marginRight: "4px",
    });

    tdElement.insertBefore(iconElement, spanElement);

    if (index === 0) {
      const updateBigIcon = () => {
        // === config ====
        const checkboxElement = document.getElementById(
          "acri-profile-icon-config"
        ) as HTMLInputElement | null;
        if (!checkboxElement) return;
        const showProfileIcon: boolean = checkboxElement.checked;
        const svgElement = document.getElementById("acri-profile-big-icon");
        if (!showProfileIcon) {
          if (svgElement) svgElement.remove();
          return;
        }
        // ==== create element ====
        if (svgElement) return;
        const canvasElement = document.getElementById("ratingStatus");
        const divElement = canvasElement?.parentElement;
        if (!canvasElement || !divElement) return;
        const bigIconElement = iconElement.cloneNode(true) as SVGElement;
        bigIconElement.id = "acri-profile-big-icon";
        Object.assign(bigIconElement.style, {
          width: "40px",
          height: "40px",
          position: "absolute",
          top: "-6px",
          left: "40px",
        });
        divElement.style.position = "relative";
        divElement.insertBefore(bigIconElement, canvasElement);
      };

      const buttonGroupElement = document.querySelector(
        ".col-md-9 .btn-text-group"
      ) as HTMLElement | null;
      if (!buttonGroupElement) return;
      buttonGroupElement.insertAdjacentHTML(
        "beforeend",
        `<span class="divider"></span>
        <input type="checkbox" id="acri-profile-icon-config" checked />
        <label for="acri-profile-icon-config">[ac-rating-icon] Show Profile Icon</label>
        `
      );
      const checkboxElement = document.getElementById(
        "acri-profile-icon-config"
      ) as HTMLInputElement | null;
      if (!checkboxElement) return;
      checkboxElement.addEventListener("change", updateBigIcon);
      updateBigIcon();
    }
  });
};

export default updateProfile;
