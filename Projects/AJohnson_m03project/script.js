const characters = [
    {
        name: "David",
        age: 28,
        gender: "male",
        personality: "Adventurous",
        background: "David traveled the world as a hunter. He would typically hunt rabbits and other small game. But he is now in for a wild ride as he enters the world of Wisteria.",
        image: "David.png"
    },
    {
        name: "Merlin",
        age: 84,
        gender: "female",
        personality: "Intelligent",
        background: "Merlin is a scholar who has spent her life reading about the world of Wisteria. She knows a lot about magic and other mystical creatures within the world. She is excited to get to study the animals on this adventure!",
        image: "Merlin.png"
    },
    {
        name: "Michael",
        age: 45,
        gender: "male",
        personality: "Brave",
        background: "Michael is a former soldier who has always been known to charge straight into danger. He has rescued several of his comrades from the battlefield. He is ready to stand till the very end to protect his comrades.",
        image: "Michael.png"
    },
    {
        name: "Emily",
        age: 21,
        gender: "female",
        personality: "Bold",
        background: "Emily is the classic princess. She wants to explore the world, and is determined to go out despite the dangers. While the group feels the need to keep her safe, she is more than willing to hold her own. Unlike normal royalty, she has studied swordplay in her free time, as well as how to handle a bow. Her skills may come in useful this adventure.",
        image: "Emily.png"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const characterList = document.getElementById("character-list");
            
            //Loop for creating buttons for each character

            characters.forEach(character => {
            const button = document.createElement("button");
            button.classList.add("character-button");

            //Image for character

            const img = document.createElement("img");
            img.src = character.image;
            img.alt = character.name;
            button.appendChild(img);

            // Set the button text to the character's name
            
            const charactername = document.createElement("p");
            charactername.textContent = character.name;
            button.appendChild(charactername);
            
            // Listens for the click to show the background 
            button.addEventListener("click", function() {
                alert(character.background);
            });
                characterList.appendChild(button);
            });
                    
            document.getElementById("copybutton").addEventListener("click", function() {
            const code = document.getElementById("copycode").textContent;
            navigator.clipboard.writeText(code);
            console.log("You copied my code! Darn you!");
            this.textContent = "Code Copied!";
            setTimeout(() => {
                this.textContent = "Copy Code";
            }, 2000);
            });
        });