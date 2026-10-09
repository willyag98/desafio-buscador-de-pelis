const fs = require("fs");

function leerPelis() {
  const raw = fs.readFileSync(__dirname + "/pelis.json");
  return JSON.parse(raw)   
}

function sortBy(prop) {
  const pelis = leerPelis();
  return pelis.sort((a,b) => {
    if(a[prop] > b[prop]) return 1;
    if(a[prop] < b[prop]) return -1;
    return 0;    
  });    

}

function search(text) {
  const pelis = leerPelis();
  return pelis.filter(p => p.title.toLowerCase().includes(text.toLowerCase()));    
}

function filterByTag(tag) {
  const pelis = leerPelis();
  return pelis.filter(p => p.tags.includes(tag));    
}

module.exports = {
    leerPelis,
    sortBy,
    search,
    filterByTag
};