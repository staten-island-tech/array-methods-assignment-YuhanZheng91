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

constellations.forEach((constellations)=> 
    constellations.qualities.forEach((qualities)=> console.log(qualities))
);

const notsupporter = constellations.filter((constellations)=> constellations.supporterofdokja !== true);
console.log(notsupporter);