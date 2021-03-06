
function increment() {
    let current_number = document.getElementById("number").textContent;
    console.log(current_number);
    document.getElementById("number").textContent = Number(current_number) + 1;

}

function decrement() {
    let current_number = document.getElementById("number").textContent;
    console.log(current_number);
    document.getElementById("number").textContent = Number(current_number) - 1;

    if (current_number <= 0) {
        alert("Errore!");
        document.getElementById("number").textContent = Number(0);
    }

}