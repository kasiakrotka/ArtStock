import {
    GlobalData
} from './globalData.js';

class Artist {
    active_years;
    arts = [];
    wikipedia_article;
    wikipedia_url;
    portrait_url;

    set fields(fieldsdArray) {
        this._fields = [...fieldsdArray];
        this._fields.forEach(_field => {
            const key = _field.toLowerCase()
            if(GlobalData.artistFieldsMap.has(key)){
                GlobalData.artistFieldsMap.set(key, (GlobalData.artistFieldsMap.get(key))+1);
            }else{
                GlobalData.artistFieldsMap.set(key,1);
            }
        })
    }

    get fields() {
        return this._fields;
    }

    set style(stylesArray) {
        this._styles = [...stylesArray];
        this._styles.forEach(_style => {
            const key = _style.toLowerCase()
            if(GlobalData.artistStylesMap.has(key)){
                GlobalData.artistStylesMap.set(key, (GlobalData.artistStylesMap.get(key))+1);
            }else{
                GlobalData.artistStylesMap.set(key,1);
            }
        })
    }

    get style() {
        return this._styles;
    }

    constructor(name, active_years, born_date, death_date, nationality, fullName = undefined) {
        this.name = name;
        this.active_years = active_years;
        this.born_date = born_date;
        this.death_date = death_date;
        this.nationality = nationality;
        this.fullName = fullName;

        const key = nationality;
        if(GlobalData.nationalitiesMap.has(key)){
            GlobalData.nationalitiesMap.set(key, (GlobalData.nationalitiesMap.get(key))+1);
        }else{
            GlobalData.nationalitiesMap.set(key,1);
        }
    }
}

export const artistsData = [
    new Artist('Andy Warhol', '1954 - 1987', '06.08.1928', '22.02.1987', 'American', 'Andrew Warhola Jr.'),
    new Artist('Pablo Picasso', '1895 - 1973', '25.10.1881', '8.04.1973', 'Spanish', 'Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso'),
    new Artist('Vincent van Gogh', '1880 - 1890', '30.03.1853', '29.07.1890', 'Dutch', 'Vincent Willem van Gogh'),
    new Artist('Leonardo da Vinci', '1472 - 1519', '15.04.1452', '02.05.1519', 'Italian', 'Leonardo di ser Piero da Vinci'),
    new Artist('Edvard Munch', '', '12.12.1863', '23.01.1944', 'Norwegian'),
    new Artist('Claude Monet', '', '4.11.1840', '05.12.1926', 'French', 'Oscar Claude Monet'),
    new Artist('Edward Hopper', '', '22.07.1882', '15.05.1967', 'American'),
    new Artist('Zdzislaw Beksinski', '1955 - 2005', '24.02.1929', '21.02.2005', 'Polish', 'Zdzisław Beksiński')
]


artistsData[0].fields = ['painting', 'printmaking', 'sculpture', 'photography'];
artistsData[1].fields = ['painting', 'sculpture', 'drawing', 'graphics', 'litography'];
artistsData[2].fields = ['painting'];
artistsData[3].fields = ['painting', 'sculpture', 'architecture'];
artistsData[4].fields = ['painting'];
artistsData[5].fields = ['painting'];
artistsData[6].fields = ['painting'];
artistsData[7].fields = ['painting', 'sculpture', 'pohotography', 'drawing', 'digital art', 'graphics'];

artistsData[0].style = ['pop art'];
artistsData[1].style = ['cubism', 'post-impressionism', 'neoclassicism', 'surrealism'];
artistsData[2].style = ['post-impressionism'];
artistsData[3].style = ['high renaissance'];
artistsData[4].style = ['symbolism', 'expressionism'];
artistsData[5].style = ['impressionism'];
artistsData[6].style = ['new realism'];
artistsData[7].style = ['surrealism', 'magic realism', 'avat-garde'];