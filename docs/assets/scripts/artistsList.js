import {filterArtistsArray} from "./artists.js"

export class ArtistsList {
  constructor(key, value) {
    this.ArtistsArray = filterArtistsArray(key, value)
    this.displayArtistsArrayInDOM();
    console.log(this.ArtistsArray);
    console.log(`key: ${key}, value: ${value}`);
  }

  displayArtistsArrayInDOM(){
    const listElem = document.querySelector('#links-list');
    const ArtistTemplate = document.querySelector('#artist-template');
    this.ArtistsArray.forEach(artist => {
      const linkElem = document.importNode(ArtistTemplate.content, true);
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
}
