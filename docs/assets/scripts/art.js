class Art{
    constructor(title, date, style, media, location, dimension, url){
        this.title = title; 
        this.date = date; 
        this.style = style; 
        this.media = media; 
        this.location = location;
        this.dimension = dimension; 
        this.url = url;
    }
}

export const vanGoghsArt = [
    new Art("Still Life - Vase with Fifteen Sunflowers", "1888", "post-impressionism", ["oil", "canvas"], "National Gallery, London, UK", "92.1 x 73 cm", "https://uploads8.wikiart.org/images/vincent-van-gogh/still-life-vase-with-fifteen-sunflowers-1888-1.jpg!HalfHD.jpg"), 
    new Art("Sower with Setting Sun", "1888", "post-impressionism", ["oil", "canvas"], "E.G. Bührle Foundation, Zürich, Switzerland", "73.5 x 93 cm",  "https://uploads0.wikiart.org/images/vincent-van-gogh/sower-with-setting-sun-1888-3.jpg!HalfHD.jpg"), 
    new Art("Self Portrait with Bandaged Ear", "1889", "post-impressionism", ["oil", "canvas"], "Curtland Institute of Art, London, UK", "60.5 x 50 cm", "https://uploads7.wikiart.org/images/vincent-van-gogh/self-portrait-with-bandaged-ear-1889.jpg!HalfHD.jpg")
]

export const andyWarholArt = [
    new Art("Big Campbell's Soup Can 19c (Beef Noodle)", "1962", "pop art", null, null, null, "https://uploads6.wikiart.org/images/andy-warhol/campbell-s-soup-can-beef.jpg"), 
    new Art("Cow", "1966", "pop art", null, null, null, "https://uploads5.wikiart.org/images/andy-warhol/cow-2.jpg"), 
    new Art("Amos", "1976", "pop art", null, null, null, "https://uploads0.wikiart.org/images/andy-warhol/amos-1976.jpg")
]

export const picassoArt = [
    new Art("Figures at the Seaside", "1931", "surrealism", ["oil", "canvas"], "Musée Picasso, Paris, France", null, "https://uploads2.wikiart.org/images/pablo-picasso/figures-at-the-seaside-1931.jpg"), 
    new Art("The girls of Avignon", "1907", "cubism", ["oil", "canvas"], "Museum of Modern Art (MoMA), New York City, NY, US", "243.9 x 233.7 cm", "https://uploads0.wikiart.org/images/pablo-picasso/the-girls-of-avignon-1907.jpg")
]

export const daVinciArt = [
    new Art("Mona Lisa", " c.1503 - c.1519", "high renaissance", ["oil", "panel", "wood", "poplar"], "Louvre, Paris, France", "77 x 53 cm", "https://uploads6.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg"), 
    new Art("The Lady with an Ermine (Cecilia Gallerani)", "1489 - 1490", "high renaissance", ["oil", "painting"], "Czartoryski Museum, Kraków, Poland", "40.3 x 54.8 cm", "https://uploads1.wikiart.org/00180/images/leonardo-da-vinci/dama-z-gronostajem.jpg")
]


export const munchArt = [
    new Art("The Scream", "1893", "expressionism", ["oil", "pasterl"], "National Gallery, Oslo, Norway", "91 x 73.5 cm", "https://uploads1.wikiart.org/images/edvard-munch/the-scream-1893(2).jpg"), 
    new Art("Spring Day on Karl Johan Street", "1890", "impressionism", ["oil", "canvas"], "Bergen Billedgalleri, Bergen, Norway", "80 x 100 cm", "https://uploads1.wikiart.org/images/edvard-munch/spring-day-on-karl-johan-street-1890.jpg")
]

export const monetArt = [
    new Art("Impression, sunrise", "1872", "impressionism", ["oil", "canvas"], "Musée Marmottan Monet, Paris, France", "63 x 48 cm", "https://uploads8.wikiart.org/00129/images/claude-monet/impression-sunrise.jpg"), 
    new Art("Haystacks at Giverny", "1884", "impressionism", null, null, null,  "https://uploads3.wikiart.org/images/claude-monet/haystacks-at-giverny.jpg"), 
    new Art("Women in the garden", "1866", "impressionism", ["oil", "canvas"], "Musée d'Orsay, Paris, France", "205 x 255 cm", "https://uploads2.wikiart.org/images/claude-monet/women-in-the-garden.jpg")
]

export const hopperArt = [
    new Art("Office in a Small City", "1953", "new realism", ["oil", "canvas"], "Metropolitan Museum of Art (Met), New York City, NY, US", "71.1 x 101.6 cm", "https://uploads3.wikiart.org/images/edward-hopper/not_detected_235610.jpg"), 
    new Art("Automat", "1927", "new realism", ["oil", "canvas"], "Des Moines Art Center, Des Moines, IA, US", "91.4 x 71.4 cm", "https://uploads5.wikiart.org/images/edward-hopper/automat-1927.jpg"), 
    new Art("Chop Suey", "1929", "social realism", ["oil", "canvas"], "Private Collection", "96.5 x 81 cm", "https://uploads7.wikiart.org/images/edward-hopper/chop-suey-1929.jpg" ), 
    new Art("Nighthawks", "1942", "social realism", ["oil", "camvas"], "Art Institute of Chicago, Chicago, IL, US", "84.1 x 152.4", "https://uploads1.wikiart.org/00129/images/edward-hopper/nighthawks.jpg")
]

export const beksinskiArt = [
    new Art("Untitled", "1957", "surrealism", ["photomontage"], null, null, "https://uploads1.wikiart.org/images/zdislav-beksinski/untitled-1957.jpg"), 
    new Art("Untitled", "1972", "surrealism", null, "The Historical Museum in Sanok, Poland", "122 x 98 cm", "https://uploads0.wikiart.org/images/zdislav-beksinski/untitled-106.jpg"), 
    new Art("Untitled", "1975", "surrealism", null, "The Historical Museum in Sanok, Poland", "87 x 73 cm", "https://uploads8.wikiart.org/images/zdislav-beksinski/untitled-36.jpg")
]