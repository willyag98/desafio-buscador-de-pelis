const pelis = require("./pelis");

function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};

for(let i = 0; i < args.length; i += 2) {
    const key = args[i];
    const value = args[i + 1];
    params[key] = value;
  }
 return params; 

}

function main() {
const params = parseArgs();

if(params["--sort"]) {
  const ordenadas = pelis.sortBy(params["--sort"]);
  console.log(ordenadas);
  return;
}

if(params["--search"]) {
  const buscadas = pelis.search(params["--search"]);
  console.log(buscadas);
  return;
}

if(params["--tag"]) {
   const filtradas = pelis.filterByTag(params["--tag"]);
   console.log(filtradas);
   return;
 }
 console.table(pelis.leerPelis()) 

}

main();

