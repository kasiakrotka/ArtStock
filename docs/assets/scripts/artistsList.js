import {filterArtistsArray} from "./artists.js"
import {ArtistsProfile} from "./artistsProfile.js"

export class ArtistsList {
  constructor(key, value) {
    this.artistsArray = filterArtistsArray(key, value)
    this.displayArtistsArrayInDOM();
    this.addEventListenersToProfiles();
  }

  displayArtistsArrayInDOM(){
    const listElem = document.querySelector('#links-list');
    const ArtistTemplate = document.querySelector('#artist-template');
    this.artistsArray.forEach((artist, index) => {
      const linkElem = document.importNode(ArtistTemplate.content, true);
      linkElem.querySelector(".small-profile").dataset.id = index; 
      const linkElemTitle = linkElem.querySelector('h5');
      linkElemTitle.textContent = artist.name;
      const linkElemArtworks = linkElem.querySelector('p');
      linkElemArtworks.textContent = `${artist.arts.length} artworks`;
      const linkElemImg = linkElem.querySelector('img');
      linkElemImg.src = artist.portrait_url ? artist.portrait_url  : ""; 
      linkElemImg.alt = artist.name;
      listElem.append(linkElem);
    })
  }

  addEventListenersToProfiles(){
    const listElem = document.querySelector('#links-list');
    listElem.addEventListener('click', (event)=>{
      event.stopImmediatePropagation();
      const index = event.target.closest('.small-profile').dataset.id;
      new ArtistsProfile(this.artistsArray[index]);
    })
  }
}
