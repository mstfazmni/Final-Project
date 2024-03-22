const city = ["Calgary", "Edmonton", "Red Deer", "Canmore"];
const cityLinks = ["calgary.jpg", "edmonton.jpg", "red deer.jpg", "canmore.jpg"];
let boxesGenerated = false;

function ShowingCity() {

    // Get the reference to the city-div element only once outside the loop
    let cityVar = document.getElementById("city-div");

    if (!boxesGenerated) {
        // Create a container div to hold all the city cards
        let containerDiv1 = document.createElement("div");
        containerDiv1.className = "row my-container1";

        let containerDiv2 = document.createElement("div");
        containerDiv2.className = "row my-container2";

        for (let i = 0; i < city.length; i++) {
            // Create a new div for each city and append it to containerDiv
            let cityDiv = document.createElement("div");
            cityDiv.className = "col city-card"; // Add a specific class for styling
            cityDiv.innerHTML = `
                <a href="property.html?city=${city[i]}" target="_blank" class="a-city">
                <img src="${cityLinks[i]}" class="card-img-city" alt="${city[i]}">
                <div class="card-body">
                    <h5 class="card-title">${city[i]}</h5>
                </div>
                </a>
            `;

            // Append the new cityDiv to containerDiv
            if (i < city.length /2 ){
                containerDiv1.appendChild(cityDiv);
            }else {
                containerDiv2.appendChild(cityDiv);
            }
            
            
            //containerDiv.appendChild(cityDiv);

        }
        // Append the containerDiv to cityVar
        cityVar.appendChild(containerDiv1);
        cityVar.appendChild(containerDiv2);
        boxesGenerated = true;
        
    }
}