let name = "";
let interval;

function updateTime() {
    const now = new Date();

    const hour = now.getHours();
    const h = String(hour).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerText = `${h}:${m}:${s}`;

    let greet = "";

    if (hour < 12) {
        greet = `Good Morning ${name} 🌄`;
    } else if (hour < 17) {
        greet = `Good Afternoon ${name} ☀️`;
    } else if (hour < 21) {
        greet = `Good Evening ${name} 🌃`;
    } else {
        greet = `Good Night ${name} 💤`;
    }

    document.getElementById("greeting").innerText = greet;
}

function startApp() {
    name = document.getElementById("nameinp").value.trim();

    if (name === "") {
        alert("Enter Your name");
        return;
    }

    document.getElementById("nameinp").style.display = "none";
    document.querySelector("button").style.display = "none";

    document.getElementById("clock").style.display = "block";
    document.getElementById("greeting").style.display = "block";

    updateTime();

    if (interval) clearInterval(interval);
    interval = setInterval(updateTime, 1000);
}