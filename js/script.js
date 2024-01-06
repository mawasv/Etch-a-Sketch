const container = document.querySelector(".container");

for (let i = 0; i <= 100; i++) {
    const row = document.createElement("div");
    row.classList.add("row");   
    for (let j = 0; j <= 100; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener('mouseover', 
        e => e.target.classList.add('hover')
        )

        row.appendChild(cell);
    }
    container.appendChild(row);
}





