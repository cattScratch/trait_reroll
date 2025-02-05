document.addEventListener("DOMContentLoaded", () => {
  function traitReroll() {
    const rollBtn = document.getElementById("rollBtn");
    const traitshow = document.getElementById("trait");
    const numberRoll = document.getElementById("numberRoll");
    let count = 0;

    // Define the traits with their weights
    const traits = [
      { name: "Agile I", chance: 13.1 },
      { name: "Agile II", chance: 8.1 },
      { name: "Sniper I", chance: 13.1 },
      { name: "Sniper II", chance: 8.1 },
      { name: "Warrior I", chance: 13.1 },
      { name: "Warrior II", chance: 8.1 },

      { name: "Agile III", chance: 5.8 },
      { name: "Sniper III", chance: 5.8 },
      { name: "Warrior III", chance: 5.8 },

      { name: "Wealth", chance: 1.9 },
      { name: "Exploder", chance: 2 },
      { name: "Archer", chance: 4 },
      { name: "Anubis", chance: 4.5 },
      { name: "Potential", chance: 4.5 },

      { name: "Demon", chance: 0.3 },
      { name: "Ethereal", chance: 0.4 },
      { name: "Slayer", chance: 0.6 },
      { name: "Heavenly", chance: 0.5 },

      { name: "Paladin", chance: 0.2 },
      { name: "Miracle 1", chance: 0.1 },
      { name: "Miracle 2", chance: 0.1 },
      { name: "Miracle 3", chance: 0.1 },
      { name: "Miracle 4", chance: 0.1 },
    ];

    // Function to select a random trait based on chances
    function getRandomTrait() {
      const totalChance = traits.reduce((sum, trait) => sum + trait.chance, 0);
      let randomNum = Math.random() * totalChance;

      for (let trait of traits) {
        randomNum -= trait.chance;
        if (randomNum <= 0) {
          return trait.name;
        }
      }
    }

    // Event listener for button click
    rollBtn.addEventListener("click", () => {
      const selectedTrait = getRandomTrait();
      traitshow.textContent = `You rolled: ${selectedTrait}`;
      count++;
      numberRoll.textContent = `You rolled ${count} times`;
    });
  }

  traitReroll();
});
