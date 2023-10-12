const constellations=[
    {
        name: "secretivename",
        supporterofdokja: true,
        qualities: ["Secretive Plotter", "more than one", "the most ancient dream", "1683", "outer"],
    },
    {
        name: "Persephone",
        supporterofdokja:true,
        qualities: ["Queen of the Darkest Spring", "kind", "dried up","queen", "mother figure"],
    },
    {
        name: "extremelylongnamethatwasneverrevealed",
        supporterofdokja: true,
        qualities: ["Black Abyssal Dragon", "kindhearted", "chuuni", "kindbutdoesntshow", "cute"],
    },
    {
        name: "Sun Wukong",
        supporterofdokja: true,
        qualities: ["Prisoner of the Golden Headband", "golden hair", "receiving end of dokja's admiration", "monkey", "proud"],
    },
    {
        name: "???",
        supportofdokja: false,
        qualities: ["Most Ancient Dream", "who?",  "?", "??", "???", ":(("],
    },
    {
        name: "---",
        supporterofdokja: true,
        qualities: ["Demon King of Salvation", "weirdo", "epilogue", "eternity", "dontsayyourdreamoutloudoritllnotcometrueidiot"],
    },
];

constellations.forEach((el)=> console.log(el.name));
constellations.forEach((el)=> console.log(el.qualities[0]));
constellations.forEach((el)=> console.log(el.qualities[1]));
constellations.forEach((el)=> console.log(el.qualities[2]));
constellations.forEach((el)=> console.log(el.qualities[3]));
constellations.forEach((el)=> console.log(el.qualities[4]));


const supporter = constellations.filter((constellations)=> constellations.supporterofdokja === true);
console.log(supporter);