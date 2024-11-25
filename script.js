container = document.getElementById('gridContainer')
container.classList.add("grid-container")
//16x16 square grid of divs

function createGrid(){
    for(i=0;i!=16;i++){
        for(j=0;j!=16;j++){
            const cell = document.createElement("div");
            cell.classList.add("grid-item"); // Add a class to the cell
            cell.textContent = ``; // Optional: Add coordinates as content
            container.appendChild(cell);
        }
    }
}
createGrid()

let mousedown = false

const gridContainer = document.querySelector('.grid-container')

gridContainer.addEventListener("mousedown", function() {
    mousedown = !mousedown;
    if(mousedown){
        console.log('mousedown')
    }
    else{
        console.log('mouseup')
    }
});

const gridItems = document.querySelectorAll(".grid-item");



gridItems.forEach(function(item) {
    item.addEventListener("mousemove", function(){
        if(mousedown){
            console.log('hovered')
        }
        
    })
});

