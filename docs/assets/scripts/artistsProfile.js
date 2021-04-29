import { DomHelper } from "./domHelper.js";

export class ArtistsProfile {
  constructor(artistsData) {
    this.artistsData = artistsData;
    this.createProfile();
    this.addArtsToProfile();
    DomHelper.changeView("artists-profile");
  }

  createProfile() {
    const profile = document.querySelector(".profile");
    profile.querySelector("h2").textContent = this.artistsData.name;
    profile.querySelector("h6").textContent = this.artistsData.fullName;
    profile.querySelector("img").src = this.artistsData.portrait_url;
    profile.querySelector("img").alt = this.artistsData.name;
    profile.querySelector("#born-p").textContent = this.artistsData.born_date;
    profile.querySelector("#died-p").textContent = this.artistsData.death_date;
    profile.querySelector(
      "#nation-p"
    ).textContent = this.artistsData.nationality;
    profile.querySelector(
      "#style-p"
    ).textContent = this.artistsData.styles.join(", ");
    profile.querySelector(
      "#field-p"
    ).textContent = this.artistsData.fields.join(", ");
    profile.querySelector(
      "#wiki-p"
    ).textContent = this.artistsData.wikipedia_url;
  }

  addArtsToProfile() {
    const profile = document.querySelector("#artist-profile");
    const title = profile.querySelector("h1 span");
    title.textContent = `${this.artistsData.name}`;
    const artList = profile.querySelector("#art-list");
    artList.innerHTML = "";
    const artTemplate = document.querySelector("#artist-template");
    this.artistsData.arts.forEach((art, index) => {
      const linkElem = document.importNode(artTemplate.content, true);
      linkElem.querySelector(".small-profile").dataset.id = index;
      const linkElemTitle = linkElem.querySelector("h5");
      linkElemTitle.textContent = art.title;
      const linkElemArtworks = linkElem.querySelector("p");
      linkElemArtworks.textContent = art.date;
      const linkElemImg = linkElem.querySelector("img");
      linkElemImg.src = art.url ? art.url : "";
      linkElemImg.alt = art.title;
      artList.append(linkElem);
    });
  }
}
