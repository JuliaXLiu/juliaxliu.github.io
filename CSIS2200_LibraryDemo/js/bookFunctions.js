var counter = 0;
function borrowBook(){
    let bBtn = document.getElementById("borrowBtn");
    let rBtn = document.getElementById("returnBtn");
    let uText = document.getElementById("useridText");
    let bText = document.getElementById("bookidText");
    let submitBtn = document.getElementById("submit-btn");

    if(!bBtn.classList.contains("brFocus")){
        bBtn.classList += " brFocus";
        uText.classList.remove("hidden");
        // bText.classList += "hidden";
        // submitBtn.classList += "hidden";
    }
    console.log(rBtn.classList)
    rBtn.classList.remove("brFocus");
}

function returnBook(){
    let bBtn = document.getElementById("borrowBtn");
    let rBtn = document.getElementById("returnBtn");
    let uText = document.getElementById("useridText");
    let bText = document.getElementById("bookidText");
    let submitBtn = document.getElementById("submit-btn");

    if(!rBtn.classList.contains("brFocus")){
        rBtn.classList += " brFocus";
        bText.classList.remove("hidden");
        submitBtn.classList.remove("hidden");
    }
    console.log(bBtn.classList)
    bBtn.classList.remove("brFocus");
    counter=0;
}

function show(){
    
    event.preventDefault();
    let uText = document.getElementById("userid");
    let bText = document.getElementById("bookidText");
    let submitBtn = document.getElementById("submit-btn");
    let panel = document.getElementById("result");
    bText.classList.remove("hidden");
    submitBtn.classList.remove("hidden");
    panel.innerText += "User ID: " + uText.value;
    uText.disabled=true;
    event.target.disabled=true;
    counter=0;
}

function addBook(){
    event.preventDefault();
    let bText = document.getElementById("bookid");
    let panel = document.getElementById("result");
    if (counter==0){
        panel.innerText += "\nBook(s):\n"
    }
    counter += 1;
    panel.innerText += counter + ": " + bText.value+"\n";
    bText.value = "";
}
