const data = [
  {
    name: "Creators #1",
    description: "Remember to replace this description",
    image: "ipfs://NewUriToReplace/1.png",
    dna: "1b0cbba33efd021b5b6f86e8fdc2c01a2005bc62",
    edition: 1,
    date: 1708596008204,
    attributes: [
      {
        trait_type: "Background",
        value: "yellow",
      },
      {
        trait_type: "Galactic_Reach",
        value: "continental_wave",
      },
      {
        trait_type: "Harmony_Slots",
        value: "dual_harmony",
      },
      {
        trait_type: "Cipher_Turner",
        value: "advanced_cipher",
      },
      {
        trait_type: "Aura_Skin",
        value: "golden_blast",
      },
      {
        trait_type: "Eco_Power_Mode",
        value: "standard_efficiency",
      },
      {
        trait_type: "Echo Amplifier",
        value: "buzz creator",
      },
      {
        trait_type: "Craftsmanship",
        value: "luxury_legacy",
      },
      {
        trait_type: "Alliance",
        value: "choir_coalition",
      },
      {
        trait_type: "Base",
        value: "gold",
      },
      {
        trait_type: "Front_Pane",
        value: "gold",
      },
      {
        trait_type: "Bezels",
        value: "gold",
      },
      {
        trait_type: "Speakers",
        value: "white",
      },
      {
        trait_type: "Buttons",
        value: "gold",
      },
      {
        trait_type: "Info_Board",
        value: "black",
      },
      {
        trait_type: "Title",
        value: "platinum",
      },
      {
        trait_type: "Album_Cover",
        value: "blue",
      },
      {
        trait_type: "Radio_App",
        value: "normal",
      },
    ],
    compiler: "Jamit",
  },
];

// console.log(data, "old");

function updateData() {
  data.forEach((item) => {
    item.attributes.forEach((attribute) => {
      //convert traits and value to arr removing _ from strings
      const traitsArr = attribute.trait_type.split("_");
      const valueArr = attribute.value.split("_");

      //capitalize first letter of each words on traits and value
      const newTraitTypeArr = traitsArr.map(
        (traitType) => traitType[0].toUpperCase() + traitType.slice(1)
      );
      const newValueArr = valueArr.map(
        (traitValue) => traitValue[0].toUpperCase() + traitValue.slice(1)
      );

      //reassign traits and value
      attribute.trait_type = newTraitTypeArr.join(" ");
      attribute.value = newValueArr.join(" ");
    });

    //   fs.writeFileSync(
    //     `${basePath}/build/json/${item.edition}.json`,
    //     JSON.stringify(item, null, 2)
    //   );
  });
}

updateData();
