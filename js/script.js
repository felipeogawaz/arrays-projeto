var ClassificadosUcl  = ["Napoli", "Liverpool", "Club Brugge", "Porto", "Bayern de Munique", "Inter de Milão", 
"Chelsea", "Real Madrid", "Manchester City", "Borussia Dortmund", "Psg", "Benfica", "Eintrach Frankfurt", "Tottenham", "Milan", "RB leipzing"];


var ClassificadosUel = ["Manchester United", "Bayer LeverKusen", " Feyenoord", "Sevilla", "Juventus", "Roma", "Sporting", "Barcelona"];

function corucl1(){
    document.getElementById("sectionucle").style.backgroundColor='#2d81c6';
}

function corucll1(){
    document.getElementById("sectionucle").style.backgroundColor='#2d81c6';
}

function button1(){
    var ucl = document.getElementById("ucl");
    ucl.innerHTML = ClassificadosUcl;
}

function corucl2(){
    document.getElementById("sectioncomp").style.backgroundColor='#da630e';
}

function corucll2(){
    document.getElementById("sectioncomp").style.backgroundColor='#da630e';
}

function button2(){
    var uel = document.getElementById("uel");
    uel.innerHTML = ClassificadosUel;
}