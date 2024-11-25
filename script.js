container = document.getElementById('gridContainer')
container.classList.add("grid-container")
//16x16 square grid of divs

gridPrompt = document.getElementById('gridPrompt')
const promptButton = document.createElement('button');
promptButton.style.width = '32vw'
promptButton.style.height = '2vw'
promptButton.textContent = 'Change Grid Size'
promptButton.style.textAlign = 'center'
promptButton.style.marginBottom = '1vw'
gridPrompt.appendChild(promptButton)

gridPrompt.addEventListener("click", function(){
    var size = prompt("Choose your grid height and width (one value between 0 and 100)")
    console.log(size)
    createGrid(size)
})

createGrid(15)

function createGrid(size){
    for(i=0;i!=size;i++){
        for(j=0;j!=size;j++){
            const cell = document.createElement("div");
            cell.classList.add("grid-item"); // Add a class to the cell
            cell.textContent = ``; // Optional: Add coordinates as content
            container.appendChild(cell);
        }
    }
    const gridItems = document.querySelectorAll(".grid-item");



    gridItems.forEach(function(item) {
        item.addEventListener("mousemove", function(){
            if(mousedown){
                console.log('hovered')
                item.style.backgroundColor = "black"
            }
            
        })
    });
}

//createGrid()

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



