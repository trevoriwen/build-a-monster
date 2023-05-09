
// Run getInputValues Function when Create Monster Button is clicked on the dashboard
function getInputValues(){
    // Pull input values from HTML when button is clicked
    var newType = document.getElementById("type").value;
    console.log(`Type : ${(newType)}`);

    var newSize = document.getElementById("size").value;
    console.log(`Size : ${(size)}`);

    var ac = document.getElementById("armor-class").value;
    console.log(`Armor Class : ${(ac)}`);

    var hp = document.getElementById("hit-points").value;
    console.log(`Hit Points : ${(hp)}`);

    var str = document.getElementById("strength").value;
    console.log(`Str : ${(str)}`);

    var dex = document.getElementById("dexterity").value;
    console.log(`Dex : ${(dex)}`);

    var con = document.getElementById("constitution").value;
    console.log(`Con : ${(con)}`);

    var int = document.getElementById("intelligence").value;
    console.log(`Int : ${(int)}`);

    var wis = document.getElementById("wisdom").value;
    console.log(`Wis : ${(wis)}`);

    var cha = document.getElementById("charisma").value;
    console.log(`Cha : ${(cha)}`);

    var newFly = document.getElementById("fly").value;
    console.log(`Fly : ${(newFly)}`);

    var newSwim = document.getElementById("swim").value;
    console.log(`Swim : ${(newSwim)}`);

    var newLegendary = document.getElementById("legendary").value;
    console.log(`Legendary : ${(newLegendary)}`);

    var number_players = document.getElementById("number-players").value;
    console.log(`# of players : ${(number_players)}`);

    var average_party_level = document.getElementById("average-party-level").value;
    console.log(`apl : ${(average_party_level)}`);

    // Input stated for testing
    // var newType = "Humanoid";
    // var newSize = "Medium";
    // var ac = 6;
    // var hp = 100;
    // var str = 2;
    // var dex = 13;
    // var con = 10;
    // var int = 3;
    // var wis = 16;
    // var cha = 4;
    // var newFly = "Yes";
    // var newSwim = "No";
    // var newLegendary = "No";
    // var number_players = 5;
    // var average_party_level = "10";


    // Encoding type input to fit the linear regression model
    if (newType = "Aberration") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Beast") {
        var type_beast = 1;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Celestial") {
        var type_beast = 0;
        var type_celestial = 1;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Construct") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 1;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Dragon") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 1;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Elemental") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 1;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Fey") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 1;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Fiend") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 1;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Giant") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 1;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Monstrosity") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 1;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Plant") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 1;
        var type_swarmofTinybeasts = 0;
        var type_undead = 0;
     } else if (newType = "Swarm of Tiny Beasts") {
        var type_beast = 0;
        var type_celestial = 0;
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 1;
        var type_undead = 0;
     } else if (newType = "Undead") {
        var type_beast = 0;
        var type_celestial = 0; 
        var type_construct = 0;
        var type_dragon = 0;
        var type_elemental = 0;
        var type_fey = 0;
        var type_fiend = 0;
        var type_giant = 0;
        var type_humanoid = 0;
        var type_monstrosity = 0;
        var type_ooze = 0;
        var type_plant = 0;
        var type_swarmofTinybeasts = 0;
        var type_undead = 1;
     } else {
        var type_beast = 1;
        var type_celestial = 1;
        var type_construct = 1;
        var type_dragon = 1;
        var type_elemental = 1;
        var type_fey = 1;
        var type_fiend = 1;
        var type_giant = 1;
        var type_humanoid = 1;
        var type_monstrosity = 1;
        var type_ooze = 1;
        var type_plant = 1;
        var type_swarmofTinybeasts = 1;
        var type_undead = 1;
     };

    // Encoding size input to fit the linear regression model
    if (newSize = "Tiny") {
        var size = 1;
     } else if (newSize = "Small") {
        var size = 2;
     } else if (newSize = "Medium") {
        var size = 3;
     } else if (newSize = "Large") {
        var size = 4;
     } else if (newSize = "Huge") {
        var size = 5;
     } else if (newSize = "Gargantuan") {
        var size = 6;
     } else {
        var size = 100;
     };

    // Encoding legendary inout to fit the linear regression model
    if (newLegendary = "Yes") {
        var legendary_nan = 0;
     } else if (newLegendary = "No") {
        var legendary_nan = 1;
     } else {
        var legendary_nan = 100;
     };

    // Encoding fly input to fit the linear regression model
    if (newFly = "Yes") {
        var flyYes = 1;
     } else if (newFly = "No") {
        var flyYes = 0;
     } else {
        var flyYes = 100;
     };

    // Encoding swim input to fit the linear regression model
    if (newSwim = "Yes") {
        var swimYes = 1;
     } else if (newSwim = "No") {
        var swimYes = 0;
     } else {
        var swimYes = 100;
     };

    // Print variables to console for testing
    console.log(`Size : ${(size)}`);
    console.log(`ac : ${(ac)}`);
    console.log(`hp : ${(hp)}`);
    console.log(`str : ${(str)}`);
    console.log(`dex : ${(dex)}`);
    console.log(`con : ${(con)}`);
    console.log(`int : ${(int)}`);
    console.log(`wis : ${(wis)}`);
    console.log(`cha : ${(cha)}`);
    console.log(`legendary_nan : ${(legendary_nan)}`);
    console.log(`flyYes : ${(flyYes)}`);
    console.log(`swimYes : ${(swimYes)}`);
    console.log(`type_beast : ${(type_beast)}`);
    console.log(`type_celestial : ${(type_celestial)}`);
    console.log(`type_construct : ${(type_construct)}`);
    console.log(`type_dragon : ${(type_dragon)}`);
    console.log(`type_elemental : ${(type_elemental)}`);
    console.log(`type_fey : ${(type_fey)}`);
    console.log(`type_fiend : ${(type_fiend)}`);
    console.log(`type_giant : ${(type_giant)}`);
    console.log(`type_humanoid : ${(type_humanoid)}`);
    console.log(`type_monstrosity : ${(type_monstrosity)}`);
    console.log(`type_ooze : ${(type_ooze)}`);
    console.log(`type_plant : ${(type_plant)}`);
    console.log(`type_swarmofTinybeasts : ${(type_swarmofTinybeasts)}`);
    console.log(`type_undead : ${(type_undead)}`);
    console.log(`number of players : ${(number_players)}`);
    console.log(`apl : ${(average_party_level)}`);

    // Call Formulas Function and pass variables
    formulas(size, ac, hp, str, dex, con, int, wis, cha, legendary_nan, flyYes, swimYes, type_beast, type_celestial, type_construct, type_dragon, type_elemental, type_fey, type_fiend, type_giant, type_humanoid, type_monstrosity, type_ooze, type_plant, type_swarmofTinybeasts, type_undead, number_players, average_party_level)
}

// Formulas Function will take input and encoded values and run the CR linear regression, Monster XP linear regression, and 
function formulas(size, ac, hp, str, dex, con, int, wis, cha, legendary_nan, flyYes, swimYes, type_beast, type_celestial, type_construct, type_dragon, type_elemental, type_fey, type_fiend, type_giant, type_humanoid, type_monstrosity, type_ooze, type_plant, type_swarmofTinybeasts, type_undead, number_players, average_party_level){
    
    // Coefficents from CR linear regression
    var sizeCoef = 0.07909636;
    var acCoef = 0.18098322;
    var hpCoef = 0.03810668;
    var strCoef = -0.05702636;
    var dexCoef = -0.03802873;
    var conCoef = 0.12440479;
    var intCoef = 0.14611386;
    var wisCoef = 0.14004083;
    var chaCoef = 0.05820986;
    var legendary_nanCoef = -3.02979347;
    var fly_YesCoef = -0.32659132;
    var swim_YesCoef = -0.43662237;
    var type_beastCoef = 1.20509042;
    var type_celestialCoef = -0.24721319;
    var type_constructCoef = 2.58533629;
    var type_dragonCoef = -0.32959655;
    var type_elementalCoef = 0.47856361;
    var type_feyCoef = -1.49799827;
    var type_fiendCoef = 1.71708598;
    var type_giantCoef = 0.90638153;
    var type_humanoidCoef = -0.0469929;
    var type_monstrosityCoef = 0.782792;
    var type_oozeCoef = 1.6085642;
    var type_plantCoef = 0.92353568;
    var type_swarmofTinybeastsCoef = 1.68812587;
    var type_undeadCoef = 1.27772706;
    var intercept = -3.0885579750289986;

    // Multiplying all CR linear regression variables with their respective coefficent
    var sizeCombo = size*sizeCoef;
    var acCombo = ac*acCoef;
    var hpCombo = hp*hpCoef;
    var strCombo = str*strCoef;
    var dexCombo = dex*dexCoef;
    var conCombo = con*conCoef;
    var intCombo = int*intCoef;
    var wisCombo = wis*wisCoef;
    var chaCombo = cha*chaCoef;
    var legendaryCombo = legendary_nan*legendary_nanCoef;
    var flyCombo = flyYes*fly_YesCoef;
    var swimCombo = swimYes*swim_YesCoef;
    var beastCombo = type_beast*type_beastCoef;
    var celestialCombo = type_celestial*type_celestialCoef;
    var constructCombo = type_construct*type_constructCoef;
    var dragonCombo = type_dragon*type_dragonCoef;
    var elementalCombo = type_elemental*type_elementalCoef;
    var feyCombo = type_fey*type_feyCoef;
    var fiendCombo = type_fiend*type_fiendCoef;
    var giantCombo = type_giant*type_giantCoef;
    var humanoidCombo = type_humanoid*type_humanoidCoef;
    var monstrosityCombo = type_monstrosity*type_monstrosityCoef;
    var oozeCombo = type_ooze*type_oozeCoef;
    var plantCombo = type_plant*type_plantCoef;
    var swarmofTinybeastsCombo = type_swarmofTinybeasts*type_swarmofTinybeastsCoef;
    var undeadCombo = type_undead*type_undeadCoef;

    // Calculate CR rounded to the hundredth decimal with CR linear regression learning model
    var cr = sizeCombo + acCombo + hpCombo + strCombo + dexCombo + conCombo + intCombo + wisCombo + chaCombo + legendaryCombo + flyCombo + swimCombo + beastCombo + celestialCombo + constructCombo + dragonCombo + elementalCombo + feyCombo + fiendCombo + giantCombo + humanoidCombo + monstrosityCombo + oozeCombo + plantCombo + swarmofTinybeastsCombo + undeadCombo + intercept
    var crRounded = Math.round(cr * 100) / 100
    var crInteger = Math.round(cr)

    // Print CR to console for testing
    console.log(`CR : ${(crRounded)}`);
    console.log(`CR Int : ${(crInteger)}`);

    // CR Adjustment for party size and rounded to the hundredth decimal
    if (number_players <= 2) {
        ajustedCR = (cr * 1.5);
     } else if (number_players >= 6) {
        ajustedCR = (cr * .5);
     } else {
        ajustedCR = cr;
     };

    var ajustedCRRounded = Math.round(ajustedCR * 100) / 100
    var ajustedCRInteger = Math.round(ajustedCR)

    // Print Adjusted CR to console for testing
    console.log(`Adjusted CR : ${(ajustedCRRounded)}`);
    console.log(`Adjusted CR Int : ${(ajustedCRInteger)}`);

    // Converting Monster CR to Monster XP using the intercept and coefficient from the Monster XP linear regression
    var monsterxpCoef = 977.720588224;
    var monsterxpIntercept = -2726.25;

    var monsterXP = monsterxpCoef*ajustedCR + monsterxpIntercept
    var monsterXPRounded = Math.round(monsterXP)

    // Print Monster XP to console for testing
    console.log(`monsterXP rounded : ${(monsterXPRounded)}`);
    console.log(`apl : ${(average_party_level)}`);
    console.log(`number of players : ${(number_players)}`);
    console.log(`monsterXP : ${(monsterXP)}`);

    // Calcualte party's difficulty defeating the monster based on number of players and average party level inputed and the set character XP for each player level and difficulty.
    if (average_party_level == 1) {
        console.log("ENTERED APL 1");
        if (50*number_players > monsterXP) {
            var difficulty = "easy";
            console.log("ASSIGNED EASY");
        } else if ((50*number_players <= monsterXP) && (75*number_players > monsterXP)) {
            var difficulty = "medium";
            console.log("ASSIGNED MEDIUM");
        } else if ((75*number_players <= monsterXP) && (100*number_players > monsterXP)) {
            var difficulty = "hard";
            console.log("ASSIGNED HARD");
        } else if (100*number_players <= monsterXP) {
            var difficulty = "deadly";
            console.log("ASSIGNED DEADLY");
        } else {
            var difficulty = "unpredictable";
            console.log("ASSIGNED UPREDICTABLE");
        }
     } else if (average_party_level == 2) {
        console.log("ENTERED APL 2");
        if (100*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((100*number_players <= monsterXP) && (150*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((150*number_players <= monsterXP) && (200*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (200*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 3) {
        console.log("ENTERED APL 3");
        if (150*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((150*number_players <= monsterXP) && (225*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((225*number_players <= monsterXP) && (400*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (400*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 4) {
        console.log("ENTERED APL 4");
        if (250*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((250*number_players <= monsterXP) && (375*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((375*number_players <= monsterXP) && (500*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (500*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 5) {
        console.log("ENTERED APL 5");
        if (500*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((500*number_players <= monsterXP) && (750*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((750*number_players <= monsterXP) && (1100*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (1100*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 6) {
        console.log("ENTERED APL 6");
        if (600*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((600*number_players <= monsterXP) && (900*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((900*number_players <= monsterXP) && (1400*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (1400*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 7) {
        console.log("ENTERED APL 7");
        if (750*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((750*number_players <= monsterXP) && (1100*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((1100*number_players <= monsterXP) && (1700*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (1700*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 8) {
        console.log("ENTERED APL 8");
        if (900*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((900*number_players <= monsterXP) && (1400*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((1400*number_players <= monsterXP) && (2100*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (2100*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 9) {
        console.log("ENTERED APL 9");
        if (1100*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((1100*number_players <= monsterXP) && (1600*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((1600*number_players <= monsterXP) && (2400*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (2400*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 10) {
        console.log("ENTERED APL 10");
        if (1200*number_players > monsterXP) {
            var difficulty = "easy";
            console.log("ASSIGNED EASY");
        } else if ((1200*number_players <= monsterXP) && (1900*number_players > monsterXP)) {
            var difficulty = "medium";
            console.log("ASSIGNED MEDIUM");
        } else if ((1900*number_players <= monsterXP) && (2800*number_players > monsterXP)) {
            var difficulty = "hard";
            console.log("ASSIGNED HARD");
        } else if (2800*number_players <= monsterXP) {
            var difficulty = "deadly";
            console.log("ASSIGNED DEADLY");
        } else {
            var difficulty = "unpredictable";
            console.log("ASSIGNED UNPREDICTABLE");
        }
     } else if (average_party_level == 11) {
        console.log("ENTERED APL 11");
        if (1600*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((1600*number_players <= monsterXP) && (2400*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((2400*number_players <= monsterXP) && (3600*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (3600*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 12) {
        console.log("ENTERED APL 12");
        if (2000*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((2000*number_players <= monsterXP) && (3000*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((3000*number_players <= monsterXP) && (4500*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (4500*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 13) {
        console.log("ENTERED APL 13");
        if (2200*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((2200*number_players <= monsterXP) && (3400*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((3400*number_players <= monsterXP) && (5100*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (5100*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 14) {
        console.log("ENTERED APL 14");
        if (2500*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((2500*number_players <= monsterXP) && (3800*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((3800*number_players <= monsterXP) && (5700*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (5700*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 15) {
        console.log("ENTERED APL 15");
        if (2800*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((2800*number_players <= monsterXP) && (4300*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((4300*number_players <= monsterXP) && (6400*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (6400*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 16) {
        console.log("ENTERED APL 16");
        if (3200*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((3200*number_players <= monsterXP) && (4800*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((4800*number_players <= monsterXP) && (7200*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (7200*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        }
     } else if (average_party_level == 17) {
        console.log("ENTERED APL 17");
        if (3900*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((3900*number_players <= monsterXP) && (5900*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((5900*number_players <= monsterXP) && (8800*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (8800*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        };
     } else if (average_party_level == 18) {
        console.log("ENTERED APL 18");
        if (4200*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((4200*number_players <= monsterXP) && (6300*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((6300*number_players <= monsterXP) && (9500*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (9500*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        };
     } else if (average_party_level == 19) {
        console.log("ENTERED APL 19");
        if (4900*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((4900*number_players <= monsterXP) && (7300*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((7300*number_players <= monsterXP) && (10900*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (10900*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        };
     } else {
        console.log("ENTERED APL 20");
        if (5700*number_players > monsterXP) {
            var difficulty = "easy";
        } else if ((5700*number_players <= monsterXP) && (8500*number_players > monsterXP)) {
            var difficulty = "medium";
        } else if ((8500*number_players <= monsterXP) && (12700*number_players > monsterXP)) {
            var difficulty = "hard";
        } else if (12700*number_players <= monsterXP) {
            var difficulty = "deadly";
        } else {
            var difficulty = "unpredictable";
        };
     };

    // Print difficulty to console for testing
    console.log(`difficulty : ${(difficulty)}`);
    
    // Calling function to add results back to HTML
    addtoHTML(crInteger, ajustedCRInteger, difficulty, number_players)

}

// Function that will add back to HTML
function addtoHTML(crInteger, ajustedCRInteger, difficulty, number_players) {
    
    // Assigning HTML content for difficulty section
    if (difficulty == "easy") {
        var formattedDifficulty = "EASY";
        var formatteddescription = "Your party should make it past an encounter with this monster.";
    } else if (difficulty == "medium") {
        var formattedDifficulty = "MEDIUM";
        var formatteddescription = "An encounter with this monster is a a good match for your party.";
    } else if (difficulty == "hard") {
        var formattedDifficulty = "HARD";
        var formatteddescription = "An encounter with this monster will be difficult for your party.";
    } else if (difficulty == "deadly") {
        var formattedDifficulty = "DEADLY";
        var formatteddescription = "An encounter with this monster should be avoided";
    } else {
        var formattedDifficulty = "UNPREDICTABLE";
        var formatteddescription = "Difficulty of encounter is unknown";
    };

    // Writing values back into HTML
    document.getElementById("new-monster-cr").innerHTML = crInteger;
    document.getElementById("new-monster-adjusted-cr").innerHTML = ajustedCRInteger;
    document.getElementById("new-monster-adj-cr-description").innerHTML = `Challenge rating based on a party of ${(number_players)}.`;
    document.getElementById("new-monster-difficulty").innerHTML = formattedDifficulty;
    document.getElementById("new-monster-difficulty-description").innerHTML = formatteddescription;

}