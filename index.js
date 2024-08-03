let startTime = new Date(),
pinTime,
navbarPosition = "outside",
navbarWfActivationBeforeAnimEnding = false

function getTema() {
    // // Ottengo il tema della pagina
    let tema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        tema = "dark"
    } else {
        tema = "light"
    }

    return tema
}

function measureSecPassed(startTime, endTime = new Date()) {
    return (endTime - startTime) / 1000; // Calcola il tempo passato in secondi
}


  function navbarSvgWorkFlow(direction) {
    let svgName = document.getElementById("name"),
    svgProfession = document.getElementById("profession")

    // Controlla se sono passati più di 4 secondi dall'inizio
    if (measureSecPassed(startTime) > 4) {
        if (direction === "in" && navbarPosition === "outside" && !navbarWfActivationBeforeAnimEnding) {
            navbarPosition = "inside"

            // Avvia l'animazione inversa
            svgName.style.animation = "stroke-draw-name-reverse 1.5s forwards";
            svgName.style.strokeDashoffset = "0";
            svgName.style.stroke = getTema() === "light" ? "black" : "#E0E1DD";
            svgProfession.style.animation = "stroke-draw-name-reverse 1.5s forwards";
            svgProfession.style.strokeDashoffset = "0";
            svgProfession.style.stroke = getTema() === "light" ? "black" : "#E0E1DD";

            pinTime = new Date();

            setTimeout(() => {
                // Cambia il testo e avvia l'animazione di disegno
                svgName.textContent = "Where to go?";
                svgName.style.strokeDashoffset = "300";
                svgName.style.animation = "stroke-draw-name 3s forwards";
            }, 2000);
        } else if (direction === "out" && navbarPosition === "inside" && !navbarWfActivationBeforeAnimEnding) {
            navbarPosition = "outside"

            let endingAnimationTime = new Date(pinTime.getTime() + 4500);

            let timePassed = measureSecPassed(pinTime, endingAnimationTime);
            let timeoutTime = 3 - timePassed < 0 ? 0 : (3 - timePassed) * 1000;

            setTimeout(() => {
                const fadeOut = getTema() === "light" ? "fade-out-light 1.5s forwards" : "fade-out-dark 1.5s forwards";
                
                // Avvia l'animazione inversa
                svgName.style.animation = "stroke-draw-name-reverse 1.5s forwards";
                svgName.style.strokeDashoffset = "0";
                startTime = new Date(new Date().getTime() + 2000);

                setTimeout(() => {
                    // Ripristina il testo originale e rimuove le animazioni
                    svgName.textContent = "Francesco Tornambè";
                    svgName.style.animation = null;
                    svgName.style.strokeDasharray = null;
                    svgName.style.strokeDashoffset = null;
                    svgProfession.style.animation = null;
                    svgProfession.style.strokeDasharray = null;
                    svgProfession.style.strokeDashoffset = null;
                }, 2000);
            }, timeoutTime);
        }
        navbarWfActivationBeforeAnimEnding = false
    } else {
        navbarWfActivationBeforeAnimEnding = true
    }
}


function hamburgerMenuWorkFlow(action) {

    switch (action) {
        case "in":
            hamburgerMenuHoverIn()
            break;

        case "out":
            hamburgerMenuHoverOut()
            break;

        default:
            break;
    }
}

function hamburgerMenuHoverIn() {

    // Ottengo il tema della pagina
    let tema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        tema = "dark"
    } else {
        tema = "light"
    }

    let hamburgerMenu = document.getElementById("hamburgerMenu")

    //Cambio il colore in base al tema
    switch (tema) {
        case "light":
            hamburgerMenu.style.color = "#E0E1DD"
            break;

        case "dark":
            hamburgerMenu.style.color = "#181B19"
            break;
    }
}

function hamburgerMenuHoverOut() {

    // Ottengo il tema della pagina
    let tema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        tema = "dark"
    } else {
        tema = "light"
    }

    let hamburgerMenu = document.getElementById("hamburgerMenu")

    //Cambio il colore in base al tema
    switch (tema) {
        case "light":
            hamburgerMenu.style.color = "#181B19"
            break;

        case "dark":
            hamburgerMenu.style.color = "#E0E1DD"
            break;
    }
}