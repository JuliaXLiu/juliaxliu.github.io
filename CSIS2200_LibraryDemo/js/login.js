function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        console.log("admin login");
        window.location.href = "itemManagement.html"; 
    } else if (username === "user" && password === "user") {
        console.log("user login");
        window.location.href = "userDashboard.html";
    } else {
        alert("Invalid username or password!");
    }
}

function logout(){
    window.location.href = "login.html";
}