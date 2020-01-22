const Y = document.getElementById("Y");
const O = document.getElementById("O");
const H = document.getElementById("H");
const A = document.getElementById("A");
const N = document.getElementById("N");
const N2 = document.getElementById("N2");
const VOID = document.getElementById("VOID");
const L = document.getElementById("L");
const A2 = document.getElementById("A2");
const V = document.getElementById("V");
const E = document.getElementById("E");
const A3 = document.getElementById("A3");
const N3 = document.getElementById("N3");
const T = document.getElementById("T");
const SUBWRAPPER = document.getElementById("subWrapper");

let YLtoAN = document.getElementById("YLvl");
let ANtoYL = document.getElementById("ANvl");

(function YL_AN() {
    // SUBWRAPPER.style.animation = "glow 1s ease-in-out infinite alternate;"
    YLtoAN.addEventListener("click", function() {
        YLtoAN.style.display = "none";
        ANtoYL.style.display = "block";

        setTimeout(function() {
            A.style.animationName = "an_A";
            A.style.animationDuration = "1s";
            A.style.animationFillMode = "forwards";
        }, 100);

        setTimeout(function() {
            N.style.animationName = "an_N";
            N.style.animationDuration = "1s";
            N.style.animationFillMode = "forwards";
        }, 700);

        setTimeout(function() {
            T.style.animationName = "an_T";
            T.style.animationDuration = "1s";
            T.style.animationFillMode = "forwards";
        }, 1200);

        setTimeout(function() {
            H.style.animationName = "an_H";
            H.style.animationDuration = "1s";
            H.style.animationFillMode = "forwards";
        }, 1300);

        setTimeout(function() {
            O.style.animationName = "an_O";
            O.style.animationDuration = "1s";
            O.style.animationFillMode = "forwards";
        }, 600);

        setTimeout(function() {
            N2.style.animationName = "an_N2";
            N2.style.animationDuration = "1s";
            N2.style.animationFillMode = "forwards";
        }, 1000);

        setTimeout(function() {
            Y.style.animationName = "an_Y";
            Y.style.animationDuration = "1.5s";
            Y.style.animationFillMode = "forwards";
        }, 200);

        setTimeout(function() {
            VOID.style.animationName = "an_VOID";
            VOID.style.animationDuration = "1s";
            VOID.style.animationFillMode = "forwards";
        }, 300);

        setTimeout(function() {
            N3.style.animationName = "an_N3";
            N3.style.animationDuration = "1s";
            N3.style.animationFillMode = "forwards";
        }, 500);

        setTimeout(function() {
            A2.style.animationName = "an_A2";
            A2.style.animationDuration = "1s";
            A2.style.animationFillMode = "forwards";
        }, 800);

        setTimeout(function() {
            V.style.animationName = "an_V";
            V.style.animationDuration = "1s";
            V.style.animationFillMode = "forwards";
        }, 1000);

        setTimeout(function() {
            A3.style.animationName = "an_A3";
            A3.style.animationDuration = "1s";
            A3.style.animationFillMode = "forwards";
        }, 900);

        setTimeout(function() {
            L.style.animationName = "an_L";
            L.style.animationDuration = "1s";
            L.style.animationFillMode = "forwards";
        }, 400);

        setTimeout(function() {
            E.style.animationName = "an_E";
            E.style.animationDuration = "1s";
            E.style.animationFillMode = "forwards";
        }, 1100);
    });
}());

(function AN_YL() {
    // SUBWRAPPER.style.animation = "glow 1s ease-in-out infinite alternate;"
    ANtoYL.addEventListener("click", function() {
        ANtoYL.style.display = "none";
        YLtoAN.style.display = "block";

        setTimeout(function() {
            A.style.animationName = "an_Aback";
            A.style.animationDuration = "1s";
            A.style.animationFillMode = "forwards";
        }, 100);

        setTimeout(function() {
            N.style.animationName = "an_Nback";
            N.style.animationDuration = "1s";
            N.style.animationFillMode = "forwards";
        }, 700);

        setTimeout(function() {
            T.style.animationName = "an_Tback";
            T.style.animationDuration = "1s";
            T.style.animationFillMode = "forwards";
        }, 1200);

        setTimeout(function() {
            H.style.animationName = "an_Hback";
            H.style.animationDuration = "1s";
            H.style.animationFillMode = "forwards";
        }, 1300);

        setTimeout(function() {
            O.style.animationName = "an_Oback";
            O.style.animationDuration = "1s";
            O.style.animationFillMode = "forwards";
        }, 600);

        setTimeout(function() {
            N2.style.animationName = "an_N2back";
            N2.style.animationDuration = "1s";
            N2.style.animationFillMode = "forwards";
        }, 1000);

        setTimeout(function() {
            Y.style.animationName = "an_Yback";
            Y.style.animationDuration = "1.5s";
            Y.style.animationFillMode = "forwards";
        }, 200);

        setTimeout(function() {
            VOID.style.animationName = "an_VOIDback";
            VOID.style.animationDuration = "1s";
            VOID.style.animationFillMode = "forwards";
        }, 300);

        setTimeout(function() {
            N3.style.animationName = "an_N3back";
            N3.style.animationDuration = "1s";
            N3.style.animationFillMode = "forwards";
        }, 500);

        setTimeout(function() {
            A2.style.animationName = "an_A2back";
            A2.style.animationDuration = "1s";
            A2.style.animationFillMode = "forwards";
        }, 800);

        setTimeout(function() {
            V.style.animationName = "an_Vback";
            V.style.animationDuration = "1s";
            V.style.animationFillMode = "forwards";
        }, 1000);

        setTimeout(function() {
            A3.style.animationName = "an_A3back";
            A3.style.animationDuration = "1s";
            A3.style.animationFillMode = "forwards";
        }, 900);

        setTimeout(function() {
            L.style.animationName = "an_Lback";
            L.style.animationDuration = "1s";
            L.style.animationFillMode = "forwards";
        }, 400);

        setTimeout(function() {
            E.style.animationName = "an_Eback";
            E.style.animationDuration = "1s";
            E.style.animationFillMode = "forwards";
        }, 1100);
    });
}());