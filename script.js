const city = ["Calgary", "Edmonton", "Red Deer", "Canmore"];
const cityLinks = ["calgary.jpg", "edmonton.jpg", "red deer.jpg", "canmore.jpg"];
let boxesGenerated = false;

function ShowingCity() {
    // Get the reference to the city-div element only once outside the loop
    let cityVar = document.getElementById("city-div");

    if(!boxesGenerated){
    // Create a container div to hold all the city cards
        let containerDiv = document.createElement("div");
        containerDiv.className = "row";

        for (let i = 0; i < city.length; i++) {
            // Create a new div for each city and append it to containerDiv
            let cityDiv = document.createElement("div");
            cityDiv.className = "col";
            cityDiv.innerHTML = `
                <a href="property.html" target="_blank" class="a-city">
                <img src="${cityLinks[i]}" class="card-img-city" alt="${city[i]}">
                <div class="card-body">
                    <h5 class="card-title">${city[i]}</h5>
                </div>
                </a>
            `;
            // alert(cityLinks[i]);

            // Append the new cityDiv to containerDiv
            containerDiv.appendChild(cityDiv);
        }
    // Append the containerDiv to cityVar
    cityVar.appendChild(containerDiv);
    boxesGenerated = true;
    }
}
