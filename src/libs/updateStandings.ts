import { isElementWithVue } from "types/ElementWithVue";
import { isVueWithUserInfo } from "types/VueWithUserInfo";
import icons from "libs/icons";

const createIconElement = (iconSvg: string): SVGElement => {
  const template = document.createElement("template");
  template.innerHTML = iconSvg;
  return template.content.firstChild as SVGElement;
};

const updateStandings = (): void => {
  Array.from(document.querySelectorAll(".standings-username > a.username")).map(
    (userElement) => {
      if (
        isElementWithVue(userElement) &&
        isVueWithUserInfo(userElement.__vue__) &&
        !userElement.querySelector("img") &&
        !userElement.querySelector("svg")
      ) {
        const rating = userElement.__vue__.u.Rating;
        const rank = rating > 2800 ? 0 : ((rating % 400) / 100) | 0;
        const iconElement = createIconElement(icons[rank]);
        // set style
        const colorClassName = userElement.querySelector("span")?.className;
        iconElement.setAttribute("class", colorClassName ?? "");
        iconElement.style.verticalAlign = "text-bottom";
        iconElement.style.marginRight = "2px";
        // insert
        userElement.insertBefore(
          iconElement,
          userElement.querySelector("span")
        );
      }
    }
  );
};

export default updateStandings;
