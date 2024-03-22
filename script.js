
const albertaCities = [
    { name: "Calgary", image: "calgary.jpg" },
    { name: "Edmonton", image: "edmonton.jpg" },
    { name: "Red Deer", image: "red deer.jpg" },
    { name: "Canmore", image: "canmore.jpg" },
];

const ontarioCities = [
    { name: "Toronto", image: "toronto.jpg" },
    { name: "London", image: "london.jpg" },
    { name: "Ottawa", image: "ottawa.jpg" },
    { name: "Hamilton", image: "hamilton.jpg" },
];

const britishCities = [
    { name: "Vancouver", image: "vancouver.jpg" },
    { name: "Victoria", image: "victoria.jpg" },
    { name: "Surrey", image: "surrey.jpg" },
    { name: "Burnaby", image: "burnaby.jpg" },
];

let boxesGenerated = false;

function ShowingCity(cities) {

    // Get the reference to the city-div element only once outside the loop
    let cityVar = document.getElementById("city-div");
    let provContainer = document.getElementById("back-div");

    if (!boxesGenerated) {

        
        // Create a container div to hold all the city cards
        let containerDiv1 = document.createElement("div");
        containerDiv1.className = "row my-container1";

        let containerDiv2 = document.createElement("div");
        containerDiv2.className = "row my-container2";

        for (let i = 0; i < cities.length; i++) {
            // Create a new div for each city and append it to containerDiv
            let cityDiv = document.createElement("div");
            cityDiv.className = "col city-card"; // Add a specific class for styling
            cityDiv.innerHTML = `
                <a href="property.html?city=${cities[i].name}" target="_blank" class="a-city">
                <img src="${cities[i].image}" class="card-img-city" alt="${cities[i].name}">
                <div class="card-body">
                    <h5 class="card-title">${cities[i].name}</h5>
                </div>
                </a>
            `;
            
            // Append the new cityDiv to containerDiv
            if (i < cities.length /2 ){
                containerDiv1.appendChild(cityDiv);
            }else {
                containerDiv2.appendChild(cityDiv);
            }
            
        }
       
        //clear everything
        cityVar.innerHTML = '';

        // Append the containerDiv to cityVar
        cityVar.appendChild(containerDiv1);
        cityVar.appendChild(containerDiv2);

        //add back link
        provContainer.innerHTML = `<a href="index.html" class="back-div">Back</a>`;

        boxesGenerated = true;
        
    }
}