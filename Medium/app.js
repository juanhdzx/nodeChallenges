const data = require("./planets.json");

const allData = data.planets;

for(let i = 0; i < allData.length; i++){
    console.log(`${allData[i].planetName}`);
}