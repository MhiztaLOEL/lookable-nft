// Animate script
let home = document.getElementsByClassName("about")[0];
let about = document.getElementsByClassName("about")[0];
let lookifesto = document.getElementsByClassName("lookifesto")[0];
let faq = document.getElementsByClassName("faq")[0];
let team = document.getElementsByClassName("team")[0];
let contact = document.getElementsByClassName("contact")[0];

function animateToHome() {
    home.scrollIntoView({
        behavior: "smooth",
        block: "end",
    });
}

function animateToAbout() {
    about.scrollIntoView({
        behavior: "smooth",
        block: "end",
    });
}

function animateToLookifesto() {
    lookifesto.scrollIntoView({
        behavior: "smooth",
        block: "end",
    });
}

function animateToFaq() {
    faq.scrollIntoView({
        behavior: "smooth",
        block: "end",
    });
}

function animateToContact() {
    contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function animateToTeam() {
    team.scrollIntoView({
        behavior: "smooth",
        block: "end",
    });
}