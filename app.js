const constellations=[
    {
        name: "secretivename",
        supporterofdokja: true,
        qualities: ["Secretive Plotter", "confusing", "the most ancient dream"],
    },
    {
        name: "Persephone",
        supporterofdokja:true,
        qualities: ["kind", "dried up",],
    },
    {
        name: "extremelylongnamethatwasneverrevealed",
        supporterofdokja: true,
        qualities: ["Black Abyssal Dragon", "kindhearted",],
    },
    {
        name: "Sun Wukong",
        supporterofdokja: true,
        qualities: ["prisoner of the golden headband", "golden hair"],
    },
    {
        name: "???",
        supportofdokja: false,
        qualities: ["most ancient dream", "eternity", "epilogue",],
    },
];

constellations.forEach((el)=> console.log(el.name));
constellations.forEach((el)=> console.log(el.qualities));

const supporter = constellations.filter((constellations)=> constellations.supporterofdokja === true);
console.log(supporter);