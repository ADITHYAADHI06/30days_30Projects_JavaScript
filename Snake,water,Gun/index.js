let btn = document.getElementById("btn");

let options = ["snake", "gun", "water"];
let result = document.getElementById("result");

btn.addEventListener("click", () => {
    let userC = document.getElementById("type").value;
    let computerC = options[Math.floor(Math.random() * 3)];

    if (userC === computerC) {
        result.innerText = `Macth Tied...!`
    } else if (userC === "snake" && computerC === "gun") {
        result.innerText = `Computer Won`
    } else if (userC === "snake" && computerC === "water") {
        result.innerText = `You Won`
    } else if (userC === "gun" && computerC === "water") {
        result.innerText = `Computer Won`
    } else if (userC === "gun" && computerC === "snake") {
        result.innerText = `user Won`
    } else if (userC === "water" && computerC === "snake") {
        result.innerText = `computer Won`
    } else if (userC === "water" && computerC === "gun") {
        result.innerText = `You Won`
    } else {
        result.innerText = `Select a Valid Choice`
    }

})


