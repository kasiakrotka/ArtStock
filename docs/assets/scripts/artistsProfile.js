import { artistsData } from "./artists.js";
import {DomHelper} from "./domHelper.js"

export class ArtistsProfile {
    constructor(artistsData) {
      this.artistsData = artistsData;
      this.createProfile(); 
      DomHelper.changeView("artists-profile");
    }

    createProfile(){
      const profile = document.querySelector(".profile")
      profile.querySelector('h2').textContent = this.artistsData.name;
      profile.querySelector('h6').textContent = this.artistsData.fullName;
      profile.querySelector('img').src = this.artistsData.portrait_url; 
      profile.querySelector('img').alt = this.artistsData.name;
      profile.querySelector('#born-p').textContent = this.artistsData.born_date;
      profile.querySelector('#died-p').textContent = this.artistsData.death_date; 
      profile.querySelector('#nation-p').textContent = this.artistsData.nationality;
      profile.querySelector('#style-p').textContent = this.artistsData.styles.join(',');
      profile.querySelector('#field-p').textContent = this.artistsData.fields.join(',');
      profile.querySelector('#wiki-p').textContent = this.artistsData.wikipedia_url;
    }
  }