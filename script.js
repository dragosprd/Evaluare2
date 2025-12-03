var imagini = ["cpu.png", "memory.png", "ethernet.png", "gpu.png"];
var index = 0;
var ruleaza = false;
var timer = null;

var container = document.getElementById("container-img");
var info = document.getElementById("info-text");
var butonStop = document.getElementById("btn-stop");
var htmlOriginal = container.innerHTML;

function schimbaPoza() {
    container.innerHTML = '<img src="' + imagini[index] + '" class="slide-mare">';
    index++;
    if (index >= imagini.length) {
        index = 0;
    }
}

document.getElementById("zona-monitor").addEventListener("dblclick", function() {
    if (ruleaza) return;
    
    ruleaza = true;
    info.innerText = "Monitorizare Activa - Slideshow";
    info.style.color = "#764ba2";
    
    butonStop.style.display = "inline-block";

    schimbaPoza();
    timer = setInterval(schimbaPoza, 3000);
});

butonStop.addEventListener("click", function(e) {
    e.stopPropagation(); 

    clearInterval(timer);
    ruleaza = false;

    butonStop.style.display = "none";
    
    info.innerText = "Dublu-click pentru Slideshow";
    info.style.color = "black";

    container.innerHTML = htmlOriginal;
});