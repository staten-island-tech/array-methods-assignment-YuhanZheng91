const constellations=[
    {
        name: "secretivename",
        supporterofdokja: true,
        qualities: ["Secretive Plotter", "more than one", "the most ancient dream"],
    },
    {
        name: "Persephone",
        supporterofdokja:true,
        qualities: ["Queen of the Darkest Spring", "kind", "dried up",],
    },
    {
        name: "extremelylongnamethatwasneverrevealed",
        supporterofdokja: true,
        qualities: ["Black Abyssal Dragon", "kindhearted",],
    },
    {
        name: "Sun Wukong",
        supporterofdokja: true,
        qualities: ["Prisoner of the Golden Headband", "golden hair"],
    },
    {
        name: "???",
        supportofdokja: false,
        qualities: ["Most Ancient Dream", "who?",],
    },
    {
        name: "---",
        supporterofdokja: true,
        qualities: ["Demon King of Salvation", "weirdo", "epilogue", "eternity"],
    },
];

constellations.forEach((el)=> console.log(el.name));
constellations.forEach((el)=> console.log(el.qualities));



const supporter = constellations.filter((constellations)=> constellations.supporterofdokja === true);
console.log(supporter);