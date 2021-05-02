import { artistsData } from "./artists.js";
import { GlobalData } from "./globalData.js";
import { ArtistsList } from "./artistsList.js";
import { ArtistsProfile } from "./artistsProfile.js";

export class DomHelper {
  static mode = "home";
  static currentFlterMode = "";
  static currentFilter = "";

  static changeView(mode) {
    const homePage = document.getElementById("home-page");
    const listPage = document.getElementById("list-page");
    const listElem = listPage.querySelector("#links-list");
    const profilePage = document.getElementById("artist-profile");
    const artProfile = document.getElementById("art-profile");

    switch (mode) {
      case "home":
        profilePage.classList.add("not-visible");
        listPage.classList.add("not-visible");
        artProfile.classList.add("not-visible");
        homePage.classList.remove("not-visible");
        this.mode = "home";
        break;
      case "list":
        profilePage.classList.add("not-visible");
        homePage.classList.add("not-visible");
        artProfile.classList.add("not-visible");
        listPage.classList.remove("not-visible");
        listElem.innerHTML = "";
        listElem.classList.remove("profiles-list");
        listElem.classList.add("list");
        this.mode = "list";
        break;
      case "artists-list":
        profilePage.classList.add("not-visible");
        homePage.classList.add("not-visible");
        listPage.classList.remove("not-visible");
        listElem.innerHTML = "";
        listElem.classList.remove("list");
        listElem.classList.add("profiles-list");
        this.mode = "artists-list";
        break;
      case "artists-profile":
        homePage.classList.add("not-visible");
        listPage.classList.add("not-visible");
        profilePage.classList.remove("not-visible");
        this.mode = "artists-profile";
        break;
      case "art-profile":
        profilePage.classList.add("not-visible");
        artProfile.classList.remove("not-visible");
        this.mode = "art-profile";
        break;
      default:
        console.error("no such case for changeView() function");
        break;
    }
  }

  static removeEventListeners(element){
    var old_element = element
    var new_element = element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    return new_element;
  }

  static addLinksToDOM(linksArray, showData) {
    let linksList = document.querySelector("#links-list");
    linksList = this.removeEventListeners(linksList);

    linksList.innerHTML = "";
    linksArray.forEach((link, index) => {
      const linkElement = document.createElement("a");
      linkElement.onclick = () => {
        return false;
      };
      linkElement.href = "";
      if (showData)
        linkElement.innerHTML = `${link.name}<sup>${link.data}</sup>`;
      else linkElement.innerHTML = `${link.name}`;
      linkElement.dataset.id = index;
      linksList.append(linkElement);
    });

    linksList.addEventListener("click", (event) => {
      this.removeEventListeners(linksList);
      event.stopImmediatePropagation();
      const index = event.target.closest("a").dataset.id;
      if (this.currentFlterMode === "artists-links") {
        if (this.currentFilter === "alphabetic") {
          new ArtistsProfile(artistsData[index]);
        } else {
          this.changeView('artists-list')
          switch (this.currentFilter) {
            case "fields":
              new ArtistsList(
                this.currentFilter,
                GlobalData.getValueInMapByIndex(
                  GlobalData.artistFieldsMap,
                  index
                )
              );
              break;
            case "styles":
              new ArtistsList(
                this.currentFilter,
                GlobalData.getValueInMapByIndex(
                  GlobalData.artistStylesMap,
                  index
                )
              );
              break;
            case "nationalities":
              new ArtistsList(
                this.currentFilter,
                GlobalData.getValueInMapByIndex(
                  GlobalData.nationalitiesMap,
                  index
                )
              );
              break;
          }
        }
      } else {
      }
    });
  }

  static generateList(mode, filter) {
    const pageTitle = document.querySelector("#list-page h1");
    const pageDescription = document.querySelector(
      "#list-page .list-desc-container"
    );
    let linksList;
    this.currentFlterMode = mode;
    this.currentFilter = filter;
    if (mode === "artists-links") {
      switch (filter) {
        case "alphabetic":
          pageTitle.textContent = "Artists list in A-Z order";
          pageDescription.textContent = '';
          linksList = artistsData.map((artist, index) => {
            return {
              name: artist.name,
              data: index,
            };
          });
          break;
        case "fields":
          pageTitle.textContent = "ARTISTS BY FIELD";
          pageDescription.textContent =
            "Art field is a category that unites artworks according to materials they are made of. At the same time, it classifies artists according to techniques they used to create those artworks or according to the purpose of the artworks (as is the case with illustration or design).";
          linksList = GlobalData.mapAsObjectsArray(GlobalData.artistFieldsMap);
          break;
        case "styles":
          pageTitle.textContent = "ARTISTS BY ART STYLES";
          pageDescription.textContent =
            "Art historians employ a number of ways to group world arts into systems of classification. They subdivide the continuous flow of artworks through time and space into groupings. These groupings are defined by the perception that the artworks within them share a single quality or a set of qualities that are significant. Significant qualities reflect a specific approach of an artist; they can include the formal, stylistic, iconographic, thematic, or other aspects of art. The definition of a grouping reflects judgments about the nature of meaningful connections between artworks, and between art and its larger context. Western arts are usually structured by art movements, using mostly cultural and aesthetic criteria, while Eastern arts are subdivided into periods according to political-dynastic markers.";
          linksList = GlobalData.mapAsObjectsArray(GlobalData.artistStylesMap);
          break;
        case "nationalities":
          pageTitle.textContent = "Artists by nationality";
          pageDescription.textContent =
            "This classification may indicate artist’s belonging to a certain country, as well as point at hisher ethnicity or cultural identity.";
          linksList = GlobalData.mapAsObjectsArray(GlobalData.nationalitiesMap);
          break;
      }
    } else if (mode === "artworks-links") {
    }
    if (filter === "alphabetic") this.addLinksToDOM(linksList, false);
    else this.addLinksToDOM(linksList, true);
  }
}
