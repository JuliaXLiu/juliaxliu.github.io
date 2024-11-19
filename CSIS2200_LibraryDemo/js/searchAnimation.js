function accordion(event){
    let e = event.target
    e.classList.toggle("active");
    var panel = e.nextElementSibling;
    
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.padding = "0px 20px";
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.padding = "10px 20px";
    }

}

window.onload = function() {
    let eles = document.getElementsByTagName("button");
    eles[1].click();
    eles[2].click();
    eles[3].click();
};