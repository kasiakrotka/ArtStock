import { GlobalData } from "./globalData.js";
import { vanGoghsArt, andyWarholArt, picassoArt, daVinciArt, munchArt, monetArt, hopperArt, beksinskiArt} from "./art.js";

class Artist {
  active_years;
  arts = [];
  wikipedia_article;
  wikipedia_url;
  portrait_url;

  set fields(fieldsdArray) {
    this._fields = [...fieldsdArray];
    this._fields.forEach((_field) => {
      const key = _field.toLowerCase();
      if (GlobalData.artistFieldsMap.has(key)) {
        GlobalData.artistFieldsMap.set(
          key,
          GlobalData.artistFieldsMap.get(key) + 1
        );
      } else {
        GlobalData.artistFieldsMap.set(key, 1);
      }
    });
  }

  get fields() {
    return this._fields;
  }

  set styles(stylesArray) {
    this._styles = [...stylesArray];
    this._styles.forEach((_style) => {
      const key = _style.toLowerCase();
      if (GlobalData.artistStylesMap.has(key)) {
        GlobalData.artistStylesMap.set(
          key,
          GlobalData.artistStylesMap.get(key) + 1
        );
      } else {
        GlobalData.artistStylesMap.set(key, 1);
      }
    });
  }

  get styles() {
    return this._styles;
  }

  constructor(
    name,
    active_years,
    born_date,
    death_date,
    nationality,
    fullName = undefined
  ) {
    this.name = name;
    this.active_years = active_years;
    this.born_date = born_date;
    this.death_date = death_date;
    this.nationality = nationality;
    this.fullName = fullName;

    const key = nationality;
    if (GlobalData.nationalitiesMap.has(key)) {
      GlobalData.nationalitiesMap.set(
        key,
        GlobalData.nationalitiesMap.get(key) + 1
      );
    } else {
      GlobalData.nationalitiesMap.set(key, 1);
    }
  }
}

export const artistsData = [
  new Artist(
    "Andy Warhol",
    "1954 - 1987",
    "06.08.1928",
    "22.02.1987",
    "American",
    "Andrew Warhola Jr."
  ),
  new Artist(
    "Pablo Picasso",
    "1895 - 1973",
    "25.10.1881",
    "8.04.1973",
    "Spanish",
    "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso"
  ),
  new Artist(
    "Vincent van Gogh",
    "1880 - 1890",
    "30.03.1853",
    "29.07.1890",
    "Dutch",
    "Vincent Willem van Gogh"
  ),
  new Artist(
    "Leonardo da Vinci",
    "1472 - 1519",
    "15.04.1452",
    "02.05.1519",
    "Italian",
    "Leonardo di ser Piero da Vinci"
  ),
  new Artist("Edvard Munch", "", "12.12.1863", "23.01.1944", "Norwegian"),
  new Artist(
    "Claude Monet",
    "",
    "4.11.1840",
    "05.12.1926",
    "French",
    "Oscar Claude Monet"
  ),
  new Artist("Edward Hopper", "", "22.07.1882", "15.05.1967", "American"),
  new Artist(
    "Zdzislaw Beksinski",
    "1955 - 2005",
    "24.02.1929",
    "21.02.2005",
    "Polish",
    "Zdzisław Beksiński"
  ),
];


artistsData[0].arts = andyWarholArt;
artistsData[1].arts = picassoArt;
artistsData[2].arts = vanGoghsArt;
artistsData[3].arts = daVinciArt;
artistsData[4].arts = munchArt;
artistsData[5].arts = monetArt;
artistsData[6].arts = hopperArt;
artistsData[7].arts = beksinskiArt;

artistsData[0].portrait_url = "https://upload.wikimedia.org/wikipedia/commons/4/42/Andy_Warhol_1975.jpg";
artistsData[1].portrait_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg";
artistsData[2].portrait_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/VanGogh_1887_Selbstbildnis.jpg/800px-VanGogh_1887_Selbstbildnis.jpg";
artistsData[3].portrait_url = "https://upload.wikimedia.org/wikipedia/commons/b/ba/Leonardo_self.jpg";
artistsData[4].portrait_url = "https://upload.wikimedia.org/wikipedia/commons/6/67/Edvard_Munch_1921.jpg";
artistsData[5].portrait_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Claude_Monet_1899_Nadar.jpg/800px-Claude_Monet_1899_Nadar.jpg";
artistsData[6].portrait_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg/800px-Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg";
artistsData[7].portrait_url = "https://api.culture.pl/sites/default/files/styles/260_auto_aspect/public/images/imported/sztuki%20wizualne/galeria/gl%20beksinski%20zdzislaw%20prace%20z%20albumu%20foto%20beksinski/beksinski%20zdzislaw%20foto%20album%204_5976727.jpg";

artistsData[0].fields = ["painting", "printmaking", "sculpture", "photography"];
artistsData[1].fields = [
  "painting",
  "sculpture",
  "drawing",
  "graphics",
  "litography",
];
artistsData[2].fields = ["painting"];
artistsData[3].fields = ["painting", "sculpture", "architecture"];
artistsData[4].fields = ["painting"];
artistsData[5].fields = ["painting"];
artistsData[6].fields = ["painting"];
artistsData[7].fields = [
  "painting",
  "sculpture",
  "pohotography",
  "drawing",
  "digital art",
  "graphics",
];

artistsData[0].styles = ["pop art"];
artistsData[1].styles = [
  "cubism",
  "post-impressionism",
  "neoclassicism",
  "surrealism",
];
artistsData[2].styles = ["post-impressionism"];
artistsData[3].styles = ["high renaissance"];
artistsData[4].styles = ["symbolism", "expressionism"];
artistsData[5].styles = ["impressionism"];
artistsData[6].styles = ["new realism"];
artistsData[7].styles = ["surrealism", "magic realism", "avat-garde"];


export function filterArtistsArray(key, value) {
    if (key === "nationalities") {
      return artistsData.filter((artist) => {
        return artist.nationality === value;
      });
    } else {
      return artistsData.filter((artist) => {
        return artist[key].includes(value);
      });
    }
  }