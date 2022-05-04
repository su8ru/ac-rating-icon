import updateStandings from "updateStandings";
import updateProfile from "updateProfile";

const observeTable = () => {
  updateStandings();
  const tableElement = document.getElementById("standings-tbody")
    ?.parentElement as HTMLTableElement | null;
  if (tableElement)
    new MutationObserver(updateStandings).observe(tableElement.tBodies[0], {
      childList: true,
    });
};

if (/standings(\/virtual)?\/?/.test(document.location.href)) {
  const loaded = () => !!document.getElementById("standings-tbody");
  const loadingElement = document
    .getElementById("vue-standings")
    ?.getElementsByClassName("loading-show")[0];
  if (loadingElement)
    new MutationObserver(() => {
      if (loaded()) observeTable();
    }).observe(loadingElement, { attributes: true });
}

if (/users\/([^/]+)\/?/.test(document.location.href)) {
  updateProfile();
}
