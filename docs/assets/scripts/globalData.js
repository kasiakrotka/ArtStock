export class GlobalData{
    static nationalitiesMap = new Map(); 
    static artistStylesMap = new Map();
    static artistFieldsMap = new Map();

    static mapAsObjectsArray(map){
        const newArray = new Array();
        for(const [key, value] of map.entries()){
            newArray.push({
                name: key,
                data: value
            });
        }
        return newArray;
    }

    static getValueInMapByIndex(map, idx){
        return Array.from(map)[idx][0];
    }

}

