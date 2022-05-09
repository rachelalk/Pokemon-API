// USING POKEMON API: https://pokeapi.co/api/v2/pokemon/1

// GET FULL LIST OF POKEMONS BY EACH TYPE
let grassData = [];
let fireData = [];
let waterData = [];

// EXTRACTING POKEMON NAMES FROM FULL DATA SET
let grassNames = [];
let fireNames = [];
let waterNames = [];

// LOCATING ELEMENTS ON THE PAGE 
let resultsLoc = document.querySelector('.results');
let buGrass = document.querySelector('#grassButton');
let buFire = document.querySelector('#fireButton');
let buWater = document.querySelector('#waterButton');
let buKeep = document.querySelector('#keep');
let buRel = document.querySelector('#release');
let pokeDex = document.querySelector('#pokeDex');
let userInput = document.querySelector("#userName");
let submit = document.querySelector("#submit");
let chooseTitle = document.querySelector("#chooseTitle");

// LABELLING BUTTONS
buGrass.innerText = "GRASS POKEMON";
buWater.innerText = "WATER POKEMON";
buFire.innerText = "FIRE POKEMON";
buKeep.innerText = "Keep in Pokedex!";
buRel.innerText = "Release to wild!";

function createUsername () {
  let trainerName = userInput.value;
  chooseTitle.innerText = `${trainerName}, choose a Pokemon type below!`
} 

function clearInput() {
document.getElementById('userName').value=null;
}

submit.addEventListener("click", createUsername);
submit.addEventListener("click", clearInput);


// USING THE 'TYPE' VALUE TO SELECT GRASS, FIRE AND WATER POKEMON
async function getGrass(){
    // get the response from the api and put it7inside a constant
    const response = await fetch('https://pokeapi.co/api/v2/type/12');
    // jsoning the response file, so it can be used
    const data = await response.json();
    // adding the returned pokemon to our Grass Pokemons array
    grassData.push(data.pokemon) 
    grassNames.push(data.pokemon[0].pokemon.name); 
    console.log(grassNames);
  // using this method to add all the relevant pokemon
    for(i=0; i<125; i++){
      grassNames.push(data.pokemon[i].pokemon.name);
    }
  } 
  getGrass()

  // WAIT FOR THE API TO RESOLVE AND GET A RANDOM GRASS POKEMON
setTimeout(async function printGrass(){
   randomGrass = grassNames[Math.floor(Math.random() * grassNames.length)];
  console.log(randomGrass);
  }, 1500);

 async function getFire(){
    const response = await fetch('https://pokeapi.co/api/v2/type/10');
    const data = await response.json();
    fireData.push(data.pokemon);
    fireNames.push(data.pokemon[0].pokemon.name); 
    console.log(fireNames);
    for(i=0; i<125; i++){
      fireNames.push(data.pokemon[i].pokemon.name);
      }
    console.log(fireNames);
  } 
  getFire()

  
// WAIT FOR THE API TO RESOLVE AND GET A RANDOM fire POKEMON
setTimeout(async function printFire(){
  const randomFire = fireNames[Math.floor(Math.random() * fireNames.length)];
  console.log(randomFire);
}, 1500);

  
async function getWater(){
   const response = await fetch('https://pokeapi.co/api/v2/type/11');
   const data = await response.json();
   waterData.push(data.pokemon);
   waterNames.push(data.pokemon[0].pokemon.name); 
   console.log(waterNames);
   for(i=0; i<125; i++){
     waterNames.push(data.pokemon[i].pokemon.name);
     }
 } 
 getWater()

 // WAIT FOR THE API TO RESOLVE AND GET A RANDOM water POKEMON
setTimeout(async function printWater(){
  const randomWater = waterNames[Math.floor(Math.random() * waterNames.length)];
  console.log(randomWater);
}, 1500);

///////////////////////////

/// ADD USERNAME INPUT

/////////// BUTTON FUNCTIONALITY
// FUNCTIONS + EVENT LISTENERS TO CONNECT THESE BUTTONS TO OUR LISTS OF POKEMON

// IF: GRASS CLICKED
function handleClickGrass(){
  let playGrass = grassNames[Math.floor(Math.random() * grassNames.length)];
  resultsLoc.innerText = playGrass;
  let chosenPoke = document.createElement('li');
  chosenPoke.innerText = playGrass;
  function addToDex(){
    pokeDex.append(chosenPoke);
    resultsLoc.innerText = null;
  }
  buKeep.addEventListener("click", addToDex);
}
buGrass.addEventListener("click", handleClickGrass);


// IF: FIRE CLICKED
function handleClickFire(){
  let playFire = fireNames[Math.floor(Math.random() * fireNames.length)];
  resultsLoc.innerText = playFire;
  let chosenPoke = document.createElement('li');
  chosenPoke.innerText = playFire;
  function addToDex(){
    pokeDex.append(chosenPoke);
    resultsLoc.innerText = null;
  }
  buKeep.addEventListener("click", addToDex);
}
buFire.addEventListener("click", handleClickFire);


// if: WATER CLICKED
function handleClickWater(){
  let playWater = waterNames[Math.floor(Math.random() * waterNames.length)];
  resultsLoc.innerText = playWater;
  let chosenPoke = document.createElement('li');
  chosenPoke.innerText = playWater;
  function addToDex(){
    pokeDex.append(chosenPoke);
    resultsLoc.innerText = null;
  }
  buKeep.addEventListener("click", addToDex);
}

buWater.addEventListener("click", handleClickWater);

function clearPokemon() {
  resultsLoc.innerText = null;
}

buRel.addEventListener("click", clearPokemon);

// IF: KEEP CLICKED

// Create function which turns the random pokemon into a list item
// Append that list item to the archive
// Event listener on keep button

// IF: RELEASE CLICKED
// Create function which displays text acknowledging the discard
// Event listener on release button
  
//FILEPATH: grassData[0].pokemon[0].pokemon.name
/////////////////////
// SELECTING RANDOM POKEMON
// grassNames.push(grassData[0].pokemon[0].pokemon.name);
// console.log(grassNames);
// const randomGrass = grassData[Math.floor(Math.random() * grassData.length)];
// console.log(data.types[0].type.name);
 


//## Pokesquad Assemble! - TO DO LIST

//add name to title ✅
// select pokemon type - grass etc ✅
    //Create buttons to press
        // createElement('button') ✅
    //Assign buttons colours ✅
    //Link buttons to species type ✅

//generate random pokemon of that type ✅

//keep or release?

//if keep play voice clip?

//if release sad team rocket