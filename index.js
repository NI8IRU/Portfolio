const startTime = new Date()

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

function measureSecPassed() {
    const endTime = new Date()
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000
  
    // get seconds 
    let seconds = Math.round(timeDiff)
    return seconds
  }

function navbarSvgWorkFlow(direction) {
    let svgName = document.getElementById("name")

    //Imposto un animazione infinità se il mouse e sopra la navbar
    //Il testo viene resettato se il mouse si sposta fuori
    if (measureSecPassed() > 4) {
        if (direction === "in") {
            svgName.style.animation = "name-work-flow 3s cubic-bezier(0.1, 0.2, 0.1, 0.3) infinite"
            svgName.style.stroke = getTema() === "light" ? "black" : "#E0E1DD"
            svgName.style.strokeDasharray = "80"
        } else if (direction === "out") {
            const fadeOut = getTema() === "light" ? "fade-out-light 1.5s forwards" : "fade-out-dark 1.5s forwards"
            svgName.style.animation = "name-work-flow 3s cubic-bezier(0.1, 0.2, 0.1, 0.3) infinite, " + fadeOut
            setTimeout(() => {
                svgName.style.animation = null
                svgName.style.strokeDasharray = null
            }, 1500);
        }
    }
}

function hamburgerMenuWorkFlow(action) {

    switch (action) {
        case "click":
            hamburgerMenuHoverClick()
            break;

        case "in":
            hamburgerMenuHoverIn()
            break;

        case "out":
            hamburgerMenuHoverOut()
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

function hamburgerMenuHoverClick() {

    // // Ottengo il tema della pagina
    // let tema
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     tema = "dark"
    // } else {
    //     tema = "light"
    // }

    // let btn = document.getElementById("hamburgerMenuBtn")
    // let hamburgerMenu = document.getElementById("hamburgerMenu")
    // let isAreaExpanded = btn.getAttribute("aria-expanded")
    // console.log(isAreaExpanded)

    // //Cambio il colore in base al tema
    // switch (tema) {
    //     case "light":
    //         if (isAreaExpanded) {
    //             hamburgerMenu.style.color = "#E0E1DD";
    //             btn.style.backgroundColor = "#181B19";
    //         } else {
    //             hamburgerMenu.style.color = "#181B19";
    //             btn.style.backgroundColor = "#E0E1DD";
    //         }
    //         break;

    //     case "dark":
    //         if (isAreaExpanded) {
    //             hamburgerMenu.style.color = "#181B19";
    //             btn.style.backgroundColor = "#E0E1DD";
    //         } else {
    //             hamburgerMenu.style.color = "#E0E1DD";
    //             btn.style.backgroundColor = "#181B19";
    //         }
    //         break;

    //     default:
    //         console.error(`Tema sconosciuto: ${tema}`);
    //         break;
    // }
}