const MENUS = document.getElementsByClassName("menu");
const SECTIONS = document.getElementsByClassName("sectionTitle");
const BUBBLE = document.getElementById("bubble");
const ANGEL = document.getElementById("angel");
const BUBBLEWRAP = document.getElementById("bubbleWrap");
const KIDULTS = document.getElementById("kidults");
const YOUTUBE = document.getElementById("youTube");
const CLIQUETTE = document.getElementById("cliquette");
const MJDFACE = document.getElementById("picMjd");
const AFFICHE0 = document.getElementById("afficheACTU0");
const RESERVATION0 = document.getElementById("reservation0");
const AFFICHE1 = document.getElementById("afficheACTU1");
const RADIO0 = document.getElementById("picFml");
const RADIO1 = document.getElementById("picCmp");
const ECOLE = document.getElementById("picProf");
const ANAGRAMME = document.getElementById("haha");
const FOLIE = document.getElementById("picFolie");
const SUSSIAU = document.getElementById("picSussiau");
const LLOYD = document.getElementById("picLloyd");
const RANOBRAC = document.getElementById("picRanobrac");
const SURIANI = document.getElementById("picSuriani");
const GAC = document.getElementById("picGac");
const SAMOURAI = document.getElementById("picSamourai");

const TEXTMENUS = [
   "Hello Bitches!<br>(coucou les plages)",
   "Alors en ce moment je suis là",
   "Concentrez-vous sur ma voix...",
   "Je peux aussi t'apprendre des choses...",
   "J'écris aussi, parce que bon j'en faisais pas assez",
   "Là on m'entend pas..."
];

const TEXTSECTIONS = [
  "La Bretagne ça vous gagne<br>(ou pas)"
];

function ohMyBalls(target, text){

   target.addEventListener("mouseover", function(){
    BUBBLE.innerHTML = text;
    BUBBLEWRAP.style.transition = "all 0.3s ease";
    BUBBLEWRAP.style.display = "initial";
   });

   target.addEventListener("mouseout", function(){
     BUBBLEWRAP.style.display = "none";
     BUBBLE.innerHTML = "";
   });

 }

ohMyBalls(MENUS[0], TEXTMENUS[0]);
ohMyBalls(MENUS[1], TEXTMENUS[1]);
ohMyBalls(MENUS[2], TEXTMENUS[2]);
ohMyBalls(MENUS[3], TEXTMENUS[3]);
ohMyBalls(MENUS[4], TEXTMENUS[4]);
ohMyBalls(MENUS[5], TEXTMENUS[5]);

ohMyBalls(SECTIONS[0], TEXTSECTIONS[0]);

ohMyBalls(KIDULTS, "Rôle de composition:<br>le gay");
ohMyBalls(YOUTUBE, "On était 3 humoristes sur YouTube à l'époque...");

ohMyBalls(CLIQUETTE, "Avec beaucoup de maquillage, ça donne...");
ohMyBalls(AFFICHE0, "Mais dis-donc... c'est pas genre la même  photo ?");
ohMyBalls(AFFICHE1, "Humoriste est un métier solitaire. Sauf si on s'entoure d'autres humoristes !");
ohMyBalls(RADIO0,  "Y'en a 200 à écouter. A raison de 5mn chacune. Je te laisse calculer le temps à passer ensemble.");
ohMyBalls(RESERVATION0, "Si t'es malin, tu peux trouver des places à moitié prix");
ohMyBalls(ANAGRAMME, "Attention ! Un anagramme se cache quelque part. Où est-il? Qu'est-ce qu'un nanagramme?");
ohMyBalls(FOLIE, "J'aime les gens qui tiennent ce lieu. Littéralement !");
ohMyBalls(SUSSIAU, "Ce photographe est génial !<br>(fumer c'est...mal)");
ohMyBalls(LLOYD, "J'adore cet artiste (et c'est lui qui a fait ce site).");
ohMyBalls(RANOBRAC, "Alerte créativité ! (mon affiche c'est de lui");
ohMyBalls(SURIANI, "Le plus grand collage de ma vie (et le seul aussi...");
ohMyBalls(GAC, "Premier shooting depuis les photos de classe.");
ohMyBalls(SAMOURAI, "Meilleur nom d'artiste... EVER");

function ohMyAngel(target, text){

  target.addEventListener("mouseover", function(){
   BUBBLE.innerHTML = text;
   ANGEL.style.display = "initial";
   BUBBLEWRAP.style.transition = "all 0.3s ease";
   BUBBLEWRAP.style.display = "initial";
  });

  target.addEventListener("mouseout", function(){
    BUBBLEWRAP.style.display = "none";
    ANGEL.style.display = "none";
    BUBBLE.innerHTML = "";
  });
}

ohMyAngel(ECOLE, "Les élèves me respectent. Ils me disent 'bonjour'.");


(function cliquette(){
  CLIQUETTE.addEventListener("mouseover", function(){
    MJDFACE.style.visibility = "initial";
  });
  CLIQUETTE.addEventListener("mouseout", function(){
    MJDFACE.style.visibility = "hidden";
  })
}());

(function cliquetteCliquee(){
  const HEADER = document.getElementById("header");
  const YL = document.getElementById("YL");
  const DUMMY = document.getElementById("dummy");
  const BIO = document.getElementById("BIO");
  const ACTU = document.getElementById("ACTU");
  const RADIO = document.getElementById("RADIO");
  const ECOL = document.getElementById("ECOLE");
  const AUTEUR = document.getElementById("AUTEUR");
  const MODELE = document.getElementById("MODELE");
  const FOOTER = document.getElementById("footer");

  const FIXEDMJD = document.getElementById("fixed-mjd");
  const GLITT = document.getElementById("glitter");
  const ZOU = document.getElementById("zou");

  CLIQUETTE.addEventListener("click", function(){
    HEADER.style.display = "none";
    YL.style.display = "none";
    DUMMY.style.display = "none";
    BIO.style.display = "none";
    ACTU.style.display = "none";
    RADIO.style.display = "none";
    ECOL.style.display = "none";
    AUTEUR.style.display = "none";
    MODELE.style.display = "none";
    FOOTER.style.display = "none";

    FIXEDMJD.style.display="block";
    GLITT.style.display = "grid";
    ZOU.style.display = "block";
  });

  ZOU.addEventListener("click", function(){
    HEADER.style.display = "initial";
    YL.style.display = "grid";
    DUMMY.style.display = "initial";
    BIO.style.display = "grid";
    ACTU.style.display = "grid";
    RADIO.style.display="grid";
    ECOL.style.display = "grid";
    AUTEUR.style.display = "grid";
    MODELE.style.display = "grid";
    FOOTER.style.display = "grid";

    FIXEDMJD.style.display = "none";
    GLITT.style.display = "none";
    ZOU.style.display = "none";
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


}());