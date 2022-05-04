import { isElementWithVue } from "types/ElementWithVue";
import { isVueWithUserInfo } from "types/VueWithUserInfo";
import createIconElement from "libs/createIconElement";
import ratingToRankSvg from "libs/ratingToRankSvg";

const updateStandings = (): void => {
  Array.from(document.querySelectorAll(".standings-username > a.username")).map(
    (userElement) => {
      if (
        isElementWithVue(userElement) &&
        isVueWithUserInfo(userElement.__vue__) &&
        !userElement.__vue__.u.IsTeam &&
        !userElement.querySelector("img") &&
        !userElement.querySelector("svg")
      ) {
        const iconElement = createIconElement(
          ratingToRankSvg(userElement.__vue__.u.Rating)
        );
        // set style
        const colorClassName = userElement.querySelector("span")?.className;
        iconElement.setAttribute("class", colorClassName ?? "");
        Object.assign(iconElement.style, {
          width: "14px",
          height: "14px",
          verticalAlign: "text-bottom",
          marginRight: "4px",
        });
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
