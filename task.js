const kill = document.getElementById("dead");
const missed = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`)
}

for (let index = 0; index < 9; index++) {
    const element = getHole(index + 1);
    element.onclick = () => {
        if (element.classList.contains("hole_has-mole")) {
            if (element.dataset.killed) return;
            element.dataset.killed = "1";            
            kill.innerText = Number(kill.innerText) + 1;            
        } else {
            if (element.dataset.missed) return;
            element.dataset.missed = "1";            
            missed.innerText = Number(missed.innerText) + 1;
        } 
    if (kill.innerText === "10") {
        alert("Вы победили!");
        kill.innerText = 0;
        missed.innerText = 0;
    } else if (missed.innerText === "5") {
        alert ("Вы проиграли!");
        kill.innerText = 0;
        missed.innerText = 0;
    }

    }
}
