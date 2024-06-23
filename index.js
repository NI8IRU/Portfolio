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