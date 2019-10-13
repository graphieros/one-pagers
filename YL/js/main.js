// afficher les bulles sur passage souris dans le menu

function showBubble(a, text) {
    var select = document.getElementById(a);
    var bubble = document.getElementById("bubble");
    select.addEventListener("mouseover", function() {
        bubble.style.opacity = "1";
        bubble.innerHTML = text;
    })
    select.addEventListener("mouseout", function() {
        bubble.style.opacity = "0";
        bubble.innerHTML = "";
    })
}

showBubble("cat1", "Hello Bitchies ! (coucou les plages)");
showBubble("cat2", "alors en ce moment je suis là");
showBubble("cat3", "concentrez vous sur ma voix");
showBubble("cat4", "je peux aussi t'apprendre des choses");
showBubble("cat5", "j'écris aussi, parce que bon j'en faisais pas assez");
showBubble("cat6", "là on m'entend pas...");
showBubble("pic-Yo", "ça pique");
showBubble("footer-billet", "si tu veux réserver")
showBubble("footer-presse", "tu verras elle est sympa")
showBubble("footer-credit", "#noFramework")
showBubble("phantom-title1", "La Bretagne ça vous gagne (ou pas)");
showBubble("bio-content-kidults", "rôle de composition: le gay");
showBubble("bio-content-videos", "on était 3 humoristes sur YouTube à l'époque");
showBubble("bio-content-mjd", "avec beaucoup de maquillage ça donne...");

//clique-moi la cliquette : easter egg
var cliquette = document.getElementById("cliquette");
var zou = document.getElementById("zou");
var mjdFace = document.getElementById("logo-mjd");
var mjd = document.getElementById("pic-mjd");
var yo = document.getElementById("pic-Yo");
var bubble = document.getElementById("bubble");
var body = document.body;
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var page1 = document.getElementById("page1");
var title1 = document.getElementById("title1");
var bio = document.getElementById("bio");
var glitter = document.getElementById("glitter");
var title2 = document.getElementById("title2");
var actu = document.getElementById("actu");
var actuSpectacle = document.getElementById("actu-content-spectacle");
var billet1 = document.getElementById("div-billet-1");
var title3 = document.getElementById("title3");
var radio = document.getElementById("radio");
var title4 = document.getElementById("title4");
var ecole = document.getElementById("ecole");
var title5 = document.getElementById("title5");
var auteur = document.getElementById("auteur");
var title6 = document.getElementById("title6");
var modele = document.getElementById("modele");
var footer = document.getElementById("footer");

cliquette.addEventListener('click', function() {
    cliquette.style.display = "none";
    yo.style.opacity = "0";
    mjd.style.opacity = "1";
    bubble.style.display = "none";
    header.style.display = "none";
    logo.style.display = "none";
    page1.style.display = "none";
    title1.style.display = "none";
    bio.style.display = "none";
    title2.style.display = "none";
    actu.style.display = "none";
    actuSpectacle.style.display = "none";
    billet1.style.display = "none";
    title3.style.display = "none";
    radio.style.display = "none";
    title4.style.display = "none";
    ecole.style.display = "none";
    title5.style.display = "none";
    auteur.style.display = "none";
    title6.style.display = "none";
    modele.style.display = "none";
    footer.style.display = "none";
    zou.setAttribute("style", "display: block; position:fixed; bottom:0; left:50%; transform: translate(-50%); z-index:200;");
    glitter.style.display = "grid";
    body.style.display = "initial";
});

zou.addEventListener('click', function() {
    zou.style.opacity = "0";
    yo.style.opacity = "1";
    mjd.style.opacity = "0";
    bubble.style.display = "flex";
    cliquette.style.display = "initial";
    body.style.background = "black";
    header.style.display = "flex";
    logo.style.display = "flex";
    page1.style.display = "grid";
    title1.style.display = "flex";
    bio.style.display = "grid";
    title2.style.display = "flex";
    actu.style.display = "grid";
    actuSpectacle.style.display = "flex";
    billet1.style.display = "flex";
    title3.style.display = "flex";
    radio.style.display = "grid";
    title4.style.display = "flex";
    ecole.style.display = "grid";
    title5.style.display = "flex";
    auteur.style.display = "grid";
    title6.style.display = "flex";
    modele.style.display = "grid";
    footer.style.display = "grid";
    glitter.style.display = "none";
    body.style.display = "grid";
});

cliquette.addEventListener('mouseover', function() {
    mjdFace.style.opacity = "1";
    mjdFace.style.visibility = "initial";
})

cliquette.addEventListener('mouseout', function() {
    mjdFace.style.opacity = "0";
    mjdFace.style.visibility = "hidden";
})

(function() {
    var ball1 = document.getElementById("glitter-ball-1");
    var ball2 = document.getElementById("glitter-ball-2");
    var ball3 = document.getElementById("glitter-ball-3");

    function fade(x, y, z) {
        x.addEventListener('mouseover', function() {
            y.style.opacity = "0.3";
            z.style.opacity = "0.3";
        })
        x.addEventListener('mouseout', function() {
            y.style.opacity = "1";
            z.style.opacity = "1";
        })
    };
    fade(ball1, ball2, ball3);
    fade(ball2, ball3, ball1);
    fade(ball3, ball1, ball2);
}());