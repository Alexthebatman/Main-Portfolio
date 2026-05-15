const fs = require('fs');

// Allows for command line arguments

const charactername = process.argv[2];
const weapon = process.argv[3];

// Validates the arguments

if(!charactername || !weapon) {
    console.log("Error! Please pass a character name and a weapon.");
    console.log("Usage: node info.js <character name> <weapon>");
    console.log("Names: David, Merlin, Michael, Emily");
    console.log("Weapons: Sword, Staff, Bow, Shield");
    process.exit(1);
}

// Reads the character data from the json file and finds the character

const data = fs.readFileSync('./characters.json', 'utf8');
const characters = JSON.parse(data)
const character = characters.find(c => c.name.toLowerCase() === charactername.toLowerCase());

// In case the character is not found, it logs this error.

if (!character) {
    console.log(`Error! "${charactername}" is not a valid character.`);
    process.exit(1);
}

// Weapon data

const weapons = {
    sword: { attack: 8, magic: 2, defense: 4 },
    staff: { attack: 4, magic: 8, defense: 2 },
    bow: { attack: 6, magic: 4, defense: 3 },
    shield: { attack: 2, magic: 3, defense: 9 }
}

const weaponStats = weapons[weapon.toLowerCase()];
if (!weaponStats) {
    console.log(`Error! "${weapon}" is not a valid weapon.`);
    process.exit(1);
}

// Class multipliers (Makes it so the weapon choice matters)

const classMultipliers = {
    david: { attack: 1.5, magic: 0.5, defense: 1.0 },
    merlin: { attack: 0.5, magic: 2.0, defense: 0.5 },
    michael: { attack: 1.2, magic: 0.5, defense: 1.5 },
    emily: { attack: 1.3, magic: 1.0, defense: 0.8 }
};

// Stories

const stories = {
    david: {
        sword: "A sword appears in front of David. He happily picks it up, he would much rather prefer a bow though. He can be indecisive at times. He raises the sword and swings it a few times, not with the precision you'd in training but rather the kind experience gives. He swings it so hard that he hits a tree. The sword gets stuck in it and will not budge. David sighs and walks away defeated by the local flora.",
        bow: "David on one of his scouting ahead missions finds a bow hung upon a tree. He approaches it and grips the wooden material, finding it extremely well crafted. He draws one of his own arrows and attempts to knock it, strangely, it won't attach to the bow string, as if it takes a special arrow. Suddenly one of said special arrows strikes the ground next to him, he glances around and sees a sign that says \"Elven territory\", along with an eleven scout knocking another arrow on their bow. He suddenly realizes that he is holding an elf bow and drops it and runs.",
        staff: "A staff materializes in the clearing where David has just entered. He sees that it has magical properties and decides to leave it alone, as that is the responsible decisi.. nevermind he has picked it up and is swinging it yelling \"fireball\" like an idiot. Miraculously, the \"spell\" works and David gets thrown back from the recoil, the fireball ignites the field around him and he decides to flee before he can be properly convicted of arson.",
        shield: "David while in the woods comes across a majestic shield on the ground. It has ancient carvings and laced with the most valuable jewels and.. he ignores all of this. In fact, David lifts the shield, complains that it's useless without a sword. He throws the shield to the ground with a clang in frustration and incidentally alerts a bear to his exact location. David has now gained 20+ stamina fleeing from the bear. He also wishes that he now had a shield. Ironic indeed."
    },
    merlin: {
        sword: "While traversing the hills, hundreds of feet away from his incompetent party, Merlin comes across a sword. Instead of picking it up like a normal person. He proceeds to track down a hobbit, along with other party members, and bring them on a quest involving a magic ring. As one does.",
        bow: "A bow appears in front of Merlin, he recognizes that it is magic that has brought it to him, and in response to this, he scoffs and says \"I could do far better!\". He then proceeds to summon two bows and send them back to whence it came. So in conclusion, I now have two bows in my living room. Real life duplication glitch.",
        staff: "A staff appears in front of Merlin. He picks it up and for a single moment, he becomes the most powerful in the world. The wind howls, the clouds gather. His eyes go black as he conjures the most unimaginable, the most violent, the most uncontrollable.. Merlin? Merlin are you there? Oh, it seems he fell asleep before he could finish the spell. Old age is a bummer.",
        shield: "A shield appears in front of Merlin, like the hobbit scenario, he proceeds to track down a main character who's name isn't in the title of the game that they are in and provide him with the shield so that he can go save a princess who somehow keeps getting trapped by an ancient entity despite her apparently being a \"Legend of\". Classic Nintendo."
    },
    michael: {
        sword: "Michael draws the sword from the ground with military precision. He inspects the blade, checks its balance, and gives a single satisfied nod. He then proceeds to perform a flawless combat drill, every swing calculated, every step deliberate. A nearby squirrel watches in terror. Michael finishes, sheathes the sword, and salutes the squirrel. The squirrel does not salute back. Michael considers this disrespectful.",
        bow: "A bow appears before Michael. He picks it up, immediately holds it incorrectly, and refuses to be corrected. 'I was a soldier, not an archer,' he mutters, before firing an arrow sideways into the dirt three feet in front of him. He tries again. This time it goes backwards. Michael puts the bow down, picks up a rock, and throws it at the target instead. Bullseye. He walks away satisfied.",
        staff: "Michael finds a staff leaning against a boulder. He picks it up and immediately uses it as a battering ram against a locked door that nobody asked him to open. The door was, in fact, unlocked and opened inward. Michael and the staff crash through, startling a family of raccoons who were living peacefully inside. Michael apologizes to no one and declares the building 'secured.'",
        shield: "A shield materializes on the battlefield. Michael's eyes light up, this is what he was born for. He straps it on and charges forward screaming a war cry into the empty field. There is no enemy. There has never been an enemy. Michael doesn't care. He is having the time of his life. The rest of the party watches from a distance, concerned but also slightly inspired."
    },
    emily: {
        sword: "She sees the sword and is overcome with joy. She picks it up and suddenly realizes it's 30 pounds. Regardless of this she uses all of her strength and spins in a circle with it until she tosses it. It strikes a bird! Excellent!",
        bow: "Emily knocks the arrow onto the bow string. She pulls it back, awaiting a target to come.. which it never does. Eventually she becomes tired from holding the bow at full draw and it accidentally slips. The arrow flies straight and true.. into someone's window. Emily flees the scene!",
        staff: "Emily finds the staff and picks it up. She looks at the runes in awe. She, not knowing magic, then spends the next three hours trying to pry them out for jewelry purposes. Eventually the original mage comes looking for it to find their ancient runes gone, probably now being used as a cool necklace.",
        shield: "A shield spawns on the ground. Emily picks it up, she thinks of the cool shield throws by the soldiers back home. She prepares to throw it with a stance that has no technique but looks incredible. Upon throwing it, it tumbles across the ground and hits a rock, the rock makes a spark from the metal contact. Emily now believes in fire aspect shields."
    }
};

// Get the correct story

const story = stories[character.name.toLowerCase()][weapon.toLowerCase()];

// Data constants

const multiplier = classMultipliers[character.name.toLowerCase()];
const basepower = character.age + (character.name.length * 5);
const attackscore = (weaponStats.attack * multiplier.attack).toFixed(2);
const magicscore = (weaponStats.magic * multiplier.magic).toFixed(2);
const defensescore = (weaponStats.defense * multiplier.defense).toFixed(2);
const totalpower = basepower + parseFloat(attackscore) + parseFloat(magicscore) + parseFloat(defensescore);

// If else statement for rating the character based on their total power

const rating = totalpower > 130 ? "S-Tier" : totalpower > 80 ? "A-Tier" : totalpower > 60 ? "B-Tier" : "C-Tier";

// Logs the result

fs.writeFileSync('result.txt', `Character: ${character.name}\nWeapon: ${weapon}\nBase Power: ${basepower}\nAttack Score: ${attackscore}\nMagic Score: ${magicscore}\nDefense Score: ${defensescore}\nTotal Power: ${totalpower}\nRating: ${rating}\n\nStory:\n${story}`);

// Logs result to the console

const result = fs.readFileSync('./result.txt', 'utf8');
console.log(result);