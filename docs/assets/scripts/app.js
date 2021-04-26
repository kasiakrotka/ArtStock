import {
    artistsData
} from './artists.js'
import {
    GlobalData
} from './globalData.js'

class ArtistsList{
    constructor(key, value){
        console.log(`key: ${key}, value: ${value}`);
    }
}

class ArtistsProfile {
    constructor(artistsData) {
        console.log('new artists profile was created', artistsData)
    }
}

class DomHelper {
    static mode = 'home';
    static currentFlterMode = '';
    static currentFilter = '';

    static changeView(mode) {
        const homePage = document.getElementById('home-page');
        const listPage = document.getElementById('list-page');
        switch (mode) {
            case 'home':
                listPage.classList.add('not-visible')
                homePage.classList.remove('not-visible');
                this.mode = 'home';
                break;
            case 'list':
                homePage.classList.add('not-visible');
                listPage.classList.remove('not-visible');
                this.mode = 'list';
                break;
            default:
                console.error('no such case for changeView() function');
                break;
        }
    }

    static addLinksToDOM(linksArray, showData) {
        const linksList = document.querySelector('#links-list');
        linksList.innerHTML = '';
        linksArray.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.onclick = () => {
                return false;
            }
            linkElement.href = "";
            if (showData)
                linkElement.innerHTML = `${link.name}<sup>${link.data}</sup>`;
            else
                linkElement.innerHTML = `${link.name}`
            linkElement.dataset.id = index;
            linksList.append(linkElement);
        });

        linksList.addEventListener('click', (event) => {
            const index = event.target.closest('a').dataset.id;
            if (this.currentFlterMode === 'artists-links') {
                if (this.currentFilter === 'alphabetic') {
                    new ArtistsProfile(artistsData[index]);
                } else {
                    switch (this.currentFilter) {
                        case 'fields':
                            new ArtistsList(this.currentFilter, GlobalData.getValueInMapByIndex(GlobalData.artistFieldsMap, index));
                            break;
                        case 'styles':
                            new ArtistsList(this.currentFilter, GlobalData.getValueInMapByIndex(GlobalData.artistStylesMap, index));
                            break;
                        case 'nationalities':
                            new ArtistsList(this.currentFilter, GlobalData.getValueInMapByIndex(GlobalData.nationalitiesMap, index));
                            break;
                    }
                }
            } else {

            }
        })
    }

    static renderData(mode, filter) {
        let linksList;
        this.currentFlterMode = mode;
        this.currentFilter = filter;
        if (mode === 'artists-links') {
            switch (filter) {
                case 'alphabetic':
                    linksList = artistsData.map((artist, index) => {
                        return {
                            name: artist.name,
                            data: index
                        };
                    })
                    break;
                case 'fields':
                    linksList = GlobalData.mapAsObjectsArray(GlobalData.artistFieldsMap);
                    break;
                case 'styles':
                    linksList = GlobalData.mapAsObjectsArray(GlobalData.artistStylesMap);
                    break;
                case 'nationalities':
                    linksList = GlobalData.mapAsObjectsArray(GlobalData.nationalitiesMap);
                    break;
            }
        } else if (mode === 'artworks-links') {

        }
        if (filter === 'alphabetic')
            this.addLinksToDOM(linksList, false);
        else
            this.addLinksToDOM(linksList, true);
    }
}

class Menu {
    constructor() {
        this.addMenuHeadersStyling();
        this.connectBurgerButton();
        this.connectHomeButton();
        this.connectMenuLinks();
    }

    addMenuHeadersStyling() {
        const menuHeaders = document.getElementsByClassName("a-big");
        Array.from(menuHeaders).forEach((element) => {
            element.addEventListener('click', () => {
                element.classList.toggle('active-link-menu')
            });
        });
    }

    connectHomeButton() {
        const homeButton = document.querySelector('.a-home');
        homeButton.addEventListener('click', () => {
            if (DomHelper.mode !== 'home')
                DomHelper.changeView('home');
        })
    }

    connectBurgerButton() {
        const burgerButton = document.querySelector(".btn-hamburger-menu");
        burgerButton.addEventListener('click', () => {
            console.log(this);
            const menu = document.querySelector(".menu");
            menu.classList.toggle('menu-slide');
        });
    }

    connectMenuLinks() {
        const menu = document.querySelector('.menu');
        const menuLinks = menu.querySelectorAll('.menu-links');
        menuLinks.forEach(element => {
            element.addEventListener('click', (event) => {
                const mode = element.id;
                const filter = event.target.closest('a').dataset.filter;
                console.log(filter);
                if (DomHelper.mode !== 'list') {
                    DomHelper.changeView('list');
                }
                DomHelper.renderData(mode, filter);

            })
        })
    }
}


class App {
    static init() {
        this.menu = new Menu();
    }
}

App.init();