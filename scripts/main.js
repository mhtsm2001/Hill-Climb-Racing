// list van alle cars titles/names in de spel
let carNames = ["Hill Climber", "Motocross Bike", "Monster Truck", "Tractor", "Hippie Van", "Onewheeler", "Quad Bike", "Trophy Truck", "Tourist Bus", "Race Car", "Finger Screw", "Police Car", "Ambulance", "Electric Car", "Super Diesel 4x4", "Rally Car", "Dragster", "Fire Truck", "Chopper", "Lowrider", "Tank", "Snow Mobile", "Super Offroad", "Truck", "Dune Buggy", "Hovercraft", "Minibike", "Big Finger", "Kiddie Express", "Moonlander", "Hot Rdd", "The Rocket", "Mutant", "Luxury Car", "Carantula", "Fast Car", "Sleigh"];

// list van alle map titles/names in de spel
let stageNames = ["Countryside", "Seasons", "Desert", "Arctic", "Highway", "Cave", "Moon", "Boot Camp", "Mars", "Xmas", "Alien Planet", "Arctic Cave", "Forest", "Mountain", "Ragnardk", "Mudpool", "Volcand", "Beach", "Factory", "Roller Coaster", "Night", "Rooftops", "Junkyard", "Construction", "Rainbow", "Haunted", "Northpole", "Nuclear Plant", "Arena", "Jungle", "Neon", "Prognosis", "Bogland", "Suburbs", "Action Hero", "Space Mission"];


// define elementen
let carObject = document.getElementById("car");
let stageObject = document.getElementById("stage");
let titleObject = document.querySelector(".title");

let leftArrow = document.getElementById("back");
let rightArrow = document.getElementById("forward")

// variabels
let numCar = 1;
let numStage = 1;
let Pagelocation = window.location.href;


// Default displaying car
if (carObject != null) {
    let CarTags = "/resources/drawable/car/car" + numCar + ".png"
    carObject.src = CarTags;
}




// Movement using arrow keys || < left arrow | right arrow > || detect wich page is using this functionaliteit
window.addEventListener('keydown', function (e) {
    if (Pagelocation.includes("skins")) {
        if (e.key == "ArrowRight") {
            carForward();
        } else {
            if (e.key == "ArrowLeft") {
                carBack();
            }
        }
    } else {
        if (Pagelocation.includes("maps")) {
            if (e.key == "ArrowRight") {
                stageForward();
            } else {
                if (e.key == "ArrowLeft") {
                    stageBack();
                }
            }
        }
    }
}, false);


// Movement Car Skins || Forward | Backword | Update Title
function carForward() {
    if (numCar < 37) {
        numCar = numCar + 1;
        leftArrow.style.color = "#599308";
        if (numCar == 37) {
            rightArrow.style.color = "#bdbdbd";
        }
    } else {
        rightArrow.style.color = "#bdbdbd";
    }
    CarTags = "/resources/drawable/car/car" + numCar + ".png"
    carObject.src = CarTags;
    updateCarTitle();
}

function carBack() {
    if (numCar > 1) {
        numCar = numCar - 1;
        rightArrow.style.color = "#599308";
        if (numCar == 1) {
            leftArrow.style.color = "#b5b5b5";
        }
    }
    CarTags = "/resources/drawable/car/car" + numCar + ".png"
    carObject.src = CarTags;
    updateCarTitle();
}

function updateCarTitle() {
    titleObject.innerHTML = carNames[numCar - 1];
}

// grey color >> betekent je kan niet meer naar links (Movement Cars Skins)
leftArrow.style.color = "#b5b5b5";



// Default displaying map
if (stageObject != null) {
    let stageTags = "/resources/drawable/stage/stage" + numStage + ".png"
    stageObject.src = stageTags;
}


// Movement Map Skins || Forward | Backword | Update Title
function stageForward() {
    if (numStage < 36) {
        numStage = numStage + 1;
        leftArrow.style.color = "#599308";
        if (numStage == 36) {
            rightArrow.style.color = "#bdbdbd";
        }
    } else {
        rightArrow.style.color = "#bdbdbd";
    }
    stageTags = "/resources/drawable/stage/stage" + numStage + ".png"
    stageObject.src = stageTags;
    updateStageTitle();
}

function stageBack() {
    if (numStage > 1) {
        numStage = numStage - 1;
        rightArrow.style.color = "#599308";
        if (numStage == 1) {
            leftArrow.style.color = "#b5b5b5";
        }
    }
    stageTags = "/resources/drawable/stage/stage" + numStage + ".png"
    stageObject.src = stageTags;
    updateStageTitle();
}

function updateStageTitle() {
    titleObject.innerHTML = stageNames[numStage - 1];
}

// grey color >> betekent je kan niet meer naar links (Movement Cars Skins)
leftArrow.style.color = "#b5b5b5";


// Mute | Unmute   Functionaliteit
function muteMainAudio() {
    let mute = document.getElementById("main_audio");
    let muteIcon = document.getElementById("muted");
    let unmuteIcon = document.getElementById("unmuted");
    unmuteIcon.style.display = "inline-block";
    muteIcon.style.display = "none";
    mute.pause();
}

function unmuteMainAudio() {
    let unmute = document.getElementById("main_audio");
    let muteIcon = document.getElementById("muted");
    let unmuteIcon = document.getElementById("unmuted");
    muteIcon.style.display = "inline-block";
    unmuteIcon.style.display = "none";
    unmute.play();
}


// Scroll to trailer video
function videoOnLoad() {
    scroll(0, 520);
}




