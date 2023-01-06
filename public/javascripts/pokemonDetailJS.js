document.addEventListener("DOMContentLoaded", () => {
    const tdTypes = document.querySelector(".tdTypes");
    let children = tdTypes.children;
    const thStats = document.querySelector(".th-stats");
    const thChildren = thStats.children;
    
    for (let i = 0; i < children.length; i++) {
        if (children[i].textContent.trim() == "normal") {
            children[i].classList.add("badge", "text-uppercase", "normal");
        } else if (children[i].textContent.trim() == "fighting") {
            children[i].classList.add("badge", "text-uppercase", "fighting");
        } else if (children[i].textContent.trim() == "flying") {
            children[i].classList.add("badge", "text-uppercase", "flying");
        } else if (children[i].textContent.trim() == "poison") {
            children[i].classList.add("badge", "text-uppercase", "poison");
        } else if (children[i].textContent.trim() == "ground") {
            children[i].classList.add("badge", "text-uppercase", "ground");
        } else if (children[i].textContent.trim() == "rock") {
            children[i].classList.add("badge", "text-uppercase", "rock");
        } else if (children[i].textContent.trim() == "bug") {
            children[i].classList.add("badge", "text-uppercase", "bug");
        } else if (children[i].textContent.trim() == "ghost") {
            children[i].classList.add("badge", "text-uppercase", "ghost");
        } else if (children[i].textContent.trim() == "steel") {
            children[i].classList.add("badge", "text-uppercase", "steel");
        } else if (children[i].textContent.trim() == "fire") {
            children[i].classList.add("badge", "text-uppercase", "fire");
        } else if (children[i].textContent.trim() == "water") {
            children[i].classList.add("badge", "text-uppercase", "water");
        } else if (children[i].textContent.trim() == "grass") {
            children[i].classList.add("badge", "text-uppercase", "grass");
        } else if (children[i].textContent.trim() == "electric") {
            children[i].classList.add("badge", "text-uppercase", "electric");
        } else if (children[i].textContent.trim() == "psychic") {
            children[i].classList.add("badge", "text-uppercase", "psychic");
        } else if (children[i].textContent.trim() == "ice") {
            children[i].classList.add("badge", "text-uppercase", "ice");
        } else if (children[i].textContent.trim() == "dragon") {
            children[i].classList.add("badge", "text-uppercase", "dragon");
        } else if (children[i].textContent.trim() == "dark") {
            children[i].classList.add("badge", "text-uppercase", "dark");
        } else if (children[i].textContent.trim() == "fairy") {
            children[i].classList.add("badge", "text-uppercase", "fairy");
        } else {
            children[i].textContent = "???";
        }
    }

    




    /*Array.from(tdTypes.elements).forEach(element => {
        console.log(element);
        element.style.color = "red";
    })*/
});