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
// showBubble("footer-billet", "si tu veux réserver")
// showBubble("footer-presse", "tu verras elle est sympa")
// showBubble("footer-credit", "#noFramework")
showBubble("phantom-title1", "La Bretagne ça vous gagne (ou pas)");
showBubble("bio-content-kidults", "rôle de composition: le gay");
showBubble("bio-content-videos", "on était 3 humoristes sur YouTube à l'époque");
showBubble("bio-content-mjd", "avec beaucoup de maquillage ça donne...");
showBubble("img-prof", "Je ne suis pas ventriloque.");
showBubble("billet-1", "Si t'es malin, tu peux trouver des places à moitié prix !");
showBubble("affiche-1", "Mais dis-donc... c'est pas genre la même photo?");
showBubble("affiche-2", "Humoriste est un métier solitaire. Sauf si on s'entoure d'autres humoristes!");
showBubble("img-fml", "Y'en a 200 à écouter. A raison de 5mn chacune. Je te laisse calculer le temps à passer ensemble.")
showBubble("img-prof", "Les élèves me respectent. Ils me disent 'bonjour'.");
showBubble("haha", "Attention! Un anagramme se cache quelque part. Où est-il? Qu'est-ce qu'un anagramme?");
showBubble("img-folie", "J'aime les gens qui tiennent ce lieu. Littéralement!");
showBubble("img-lloyd", "J'adore cet artiste (c'est lui qui a fait ce site).");
showBubble("img-sussiau", "Ce photographe est génial (fumer c'est... mal).");
showBubble("img-ranobrac", "Alerte créativité! (mon affiche c'est de lui)");
showBubble("img-gac", "Premier shooting depuis les photos de classe.");
showBubble("img-samourai", "Meilleur nom d'artiste... EVER");
showBubble("img-suriani", "Le plus grand collage de ma vie (et le seul aussi...)");

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
var actu2 = document.getElementById("actu2");
var actuSpectacle = document.getElementById("actu-content-spectacle");
var actuSpectacle2 = document.getElementById("actu-content-spectacle-2");
var billet1 = document.getElementById("div-billet-1");
var billet2 = document.getElementById("div-billet-2");
var title3 = document.getElementById("title3");
var radio = document.getElementById("radio");
var radioFml = document.getElementById("radio-content-fml");
var title4 = document.getElementById("title4");
var ecole = document.getElementById("ecole");
var ecoleOms = document.getElementById("ecole-content-oms");
var title5 = document.getElementById("title5");
var auteur = document.getElementById("auteur");
var auteurNavale = document.getElementById("auteur-content-navale");
var title6 = document.getElementById("title6");
var modele = document.getElementById("modele");
var modeleArtiste = document.getElementById("modele-content-artiste");
var footer = document.getElementById("footer");
var bouton0 = document.getElementById("glitter-ball-1");
var bouton1 = document.getElementById("glitter-ball-2");
var bouton3 = document.getElementById("glitter-ball-3");
var pBio = document.getElementById("p-mjd-bio");
var pProf = document.getElementById("p-mjd-prof");
var pChant = document.getElementById("p-mjd-chanteuse");
var pAmbi = document.getElementById("p-mjd-ambianceuse");  


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
    actu2.style.display="none";
    actuSpectacle.style.display = "none";
    actuSpectacle2.style.display="none";
    billet1.style.display = "none";
    billet2.style.display="none";
    title3.style.display = "none";
    radio.style.display = "none";
    radioFml.style.display="none";
    title4.style.display = "none";
    ecole.style.display = "none";
    ecoleOms.style.display="none";
    title5.style.display = "none";
    auteur.style.display = "none";
    auteurNavale.style.display="none";
    title6.style.display = "none";
    modele.style.display = "none";
    modeleArtiste.style.display="none";
    footer.style.display = "none";
    zou.setAttribute("style", "display: block; position:fixed; bottom:0; left:50%; transform: translate(-50%); z-index:200;");
    glitter.style.display = "grid";
    body.style.display = "initial";
    pBio.style.display="initial";
    pProf.style.display="none";
    pChant.style.display="none";
    pAmbi.style.display="none";
    bouton0.style.display="flex";
    bouton1.style.display="flex";
    bouton2.style.display="flex";
});

zou.addEventListener('click', function() {
    location.reload();
});

cliquette.addEventListener('mouseover', function() {
    mjdFace.style.opacity = "1";
    mjdFace.style.visibility = "initial";
})

cliquette.addEventListener('mouseout', function() {
    mjdFace.style.opacity = "0";
    mjdFace.style.visibility = "hidden";
})

var ball1 = document.getElementById("glitter-ball-1"),
    ball2 = document.getElementById("glitter-ball-2"),
    ball3 = document.getElementById("glitter-ball-3");
//liens bulles dans l'easter egg
(function() {
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


function openGlitterCat(b0, b1, b2, pbio, p0, p1, p2){
    var buttonClicked = document.getElementById(b0);
    var otherButton1 = document.getElementById(b1);
    var otherButton2 = document.getElementById(b2);
    var pOrigin = document.getElementById(pbio);
    var pContent = document.getElementById(p0);
    var otherP1 = document.getElementById(p1);
    var otherP2 = document.getElementById(p2);

    buttonClicked.addEventListener("click", function(){
        pOrigin.style.display = "none";
        pContent.style.display = "initial";
        // buttonClicked.style.display ="none";
        // otherButton1.style.display ="flex";
        // otherButton2.style.display ="flex";
        otherP1.style.display="none";
        otherP2.style.display="none";
    })
}

openGlitterCat(
    "glitter-ball-3",
    "glitter-ball-2", 
    "glitter-ball-1", 
    "p-mjd-bio", 
    "p-mjd-prof",
    "p-mjd-chanteuse",
    "p-mjd-ambianceuse"
    );

openGlitterCat(
    "glitter-ball-1",
    "glitter-ball-2", 
    "glitter-ball-3", 
    "p-mjd-bio", 
    "p-mjd-chanteuse",
    "p-mjd-prof",
    "p-mjd-ambianceuse"
    );

openGlitterCat(
    "glitter-ball-2",
    "glitter-ball-1", 
    "glitter-ball-3", 
    "p-mjd-bio", 
    "p-mjd-ambianceuse",
    "p-mjd-prof",
    "p-mjd-chanteuse"
    );
    
