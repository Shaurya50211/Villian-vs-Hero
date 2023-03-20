const superheroes = require('superheroes');
// const pokemon = require('pokemon')
const supervillains = require('supervillains');

// var pokemonName = pokemon.random()
var villainName = supervillains.random()
var superheroName = superheroes.random()
var randomNumber = Math.floor(Math.random() * 2)


console.log(`As the tension in the air reached a boiling point, our hero ${superheroName} and the evilest of all ${villainName} locked eyes, both ready to unleash their full fury upon each other in a battle for the ages.`);

function getEffect() {
    setTimeout(() => {
        console.log(".");
    }, 1000);
    setTimeout(() => {
        console.log("..");
    }, 1500);
    setTimeout(() => {
        console.log("...");
    }, 2000);
    setTimeout(() => {
        console.log("....");
    }, 2500);
}

getEffect()

setTimeout(() => {
    console.log(`The sound of fists colliding and webs whizzing through the air filled the space as they're engaged in a fierce combat, each determined to come out on top.`);
}, 5000);

setTimeout(() => {
    getEffect()
}, 5200);

setTimeout(() => {
    if (randomNumber >= 1) {
        console.log(`With a final blow, ${superheroName} emerged victorious over ${villainName}, having proven once again that justice and heroism would always prevail.`)
    } else {
        console.log(`As ${superheroName} lay defeated on the ground, ${villainName} stood triumphant, a sinister grin spreading across his face as he savored his victory over the valiant hero.`)
    }
}, 10000);