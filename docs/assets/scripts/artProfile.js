import { DomHelper } from "./domHelper.js";

export class ArtProfile {
  constructor(artData, artist) {
    this.artData = artData;
    this.artist = artist;
    DomHelper.changeView("art-profile");
    this.createProfile();
  }

  createProfile() {
    const profile = document.querySelector("#art-profile .profile");
    profile.querySelector("h2").textContent = this.artData.title;
    profile.querySelector("h6").textContent = this.artist;
    profile.querySelector("img").src = this.artData.url;
    profile.querySelector("img").alt = this.artData.title;
    profile.querySelector("#date-a").textContent = this.artData.date;
    profile.querySelector("#style-a").textContent = this.artData.style;
    profile.querySelector("#media-a").textContent = this.artData.media ? this.artData.media.join(", ") : "";
    profile.querySelector("#location-a").textContent = this.artData.location;
    profile.querySelector("#dimension-a").textContent = this.artData.dimension;
  }
}
