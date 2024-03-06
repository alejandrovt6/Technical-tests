/*
Given an array or object of Marvel superheroes, create a program that can:
- Display the information of a single superhero.
- Add the ability to search for the information of multiple superheroes at once.

Example 1:
showSuperheroInfo('Spiderman');

Output:
Real name: Peter Parker
Abilities: Web-swinging', 'Sticky webs', 'Spider-sense
Team: The Avengers

Example 2:
showSuperheroesInfo('names array');

Output:
Displays the information of all superheroes 
*/

/* EXERCISE */
const superheroesInfo = {
    'Iron Man': {
        realName: 'Tony Stark', 
        abilities: ['Tecnología avanzada', 'Movilidad aérea'], 
        team: 'Los vengadores'
      },
      'Captain America': {
        realName: 'Steve Rogers', 
        abilities: ['Superhuman strength', 'Agility and reflexes'], 
        team: 'The Avengers'
      },
      'Thor': {
        realName: 'Thor Odinson', 
        abilities: ['Mjolnir', 'Wind and thunder'], 
        team: 'The Avengers'
      },
      'Spider-Man': {
        realName: 'Peter Parker', 
        abilities: ['Web-swinging', 'Sticky webs', 'Spider-sense'], 
        team: 'The Avengers'
      },
      'Hulk': {
        realName: 'Bruce Banner', 
        abilities: ['Superhuman strength', 'Invulnerability'], 
        team: 'The Avengers'
      }
};

function showSuperheroInfo(aka) {
    // Superheroe name
    console.log(`########## ${aka} ##########`);
    // Check if superhero exits
    if(aka in superheroesInfo) {
        // Get info
        const info = superheroesInfo[aka];
        // Display info
        console.log(`Real name: ${info.realName}`);
        console.log(`Abilities: ${info.abilities.join(', ')}`);
        console.log(`Team: ${info.team}`);
        console.log(` `);

    } else {
        console.log(`${aka} doesn't exits in the provided array.`);
    }
}

showSuperheroInfo('Spider-Man');

function showSuperheroesInfo(akas) {
    // Traverse the array
    akas.forEach(aka => {
        // Display info
        showSuperheroInfo(aka);
    })
}

showSuperheroesInfo(['Iron Man', 'Spider-Man', 'Joker']);