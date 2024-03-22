const propertyListings = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      location: "Calgary",
      price: "$450,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,100 sqft",
      imageUrl: "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/4/calgary-home--residential--house-1-6217330-1672855020133.jpg",
    },
    {
      id: 2,
      title: "Family Home in Suburbia",
      location: "Calgary",
      price: "$650,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://www.justinhavre.com/thumbs/416x284/uploads/Calgary%20Homes%2002.jpg",
    },
    {
      id: 3,
      title: "Cozy Bungalow near Parks",
      location: "Calgary",
      price: "$350,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://photos.zillowstatic.com/fp/dc0801c36da9078ae10061fa01b9488d-p_e.jpg",
    },
    {
      id: 4,
      title: "Luxury Penthouse with Views",
      location: "Calgary",
      price: "$1,200,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,500 sqft",
      imageUrl: "https://www.kirbycox.com/thumbs/800x600/r/uploads/Tuscany-Homes-For-Sale-Calgary.jpg",
    },
    {
      id: 5,
      title: "Townhouse in Trendy Neighborhood",
      location: "Calgary",
      price: "$550,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://cdn.sitephotos.sierrastatic.com/1807_hero_bigstock-luxury-house-with-beautiful-la-87727472-20200118105326.jpg",
    },
    {
      id: 6,
      title: "Riverside Cottage Retreat",
      location: "Calgary",
      price: "$800,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,000 sqft",
      imageUrl: "https://s3.us-east-2.amazonaws.com/havenlifestyles/a1232488-1.jpg",
    },
    {
      id: 7,
      title: "Modern Apartment with Balcony",
      location: "Calgary",
      price: "$300,000",
      bedrooms: 1,
      bathrooms: 1,
      area: "800 sqft",
      imageUrl: "https://www.settlersrealty.ca/src/img/post/small2464.jpg",
    },
    {
      id: 8,
      title: "Family-Friendly Home near Schools",
      location: "Calgary",
      price: "$500,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,600 sqft",
      imageUrl: "https://www.justinhavre.com/thumbs/416x284/uploads/Calgary%20Homes%2001.jpg",
    },
    {
      id: 9,
      title: "Historic Inner-City House",
      location: "Calgary",
      price: "$900,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,000 sqft",
      imageUrl: "https://www.shutterstock.com/image-photo/luxury-house-sunny-day-calgary-600nw-440051536.jpg ",
    },

    // ===========edmonton

    {
      id: 10,
      title: "Downtown High-Rise Apartment",
      location: "Edmonton",
      price: "$400,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,000 sqft",
      imageUrl: "https://www.edmonton.ca/images/Editorial/Images/WhyEdmonton/Neighbourhoods/why-yeg-edmonton-skyline-downtown.jpg",
    },
    {
      id: 11,
      title: "Spacious Family Home in Suburban",
      location: "Edmonton",
      price: "$600,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,400 sqft",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/13/06/edmonton-1845146_960_720.jpg",
    },
    {
      id: 12,
      title: "Cozy Condo in Edmonton's Historic",
      location: "Edmonton",
      price: "$350,000",
      bedrooms: 1,
      bathrooms: 1,
      area: "700 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742751510-0d766b01a6cd",
    },
    {
      id: 13,
      title: "Luxury Estate with Private Pool",
      location: "Edmonton",
      price: "$1,800,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "5,000 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742788662-1e05e0c2d4ad",
    },
    {
      id: 14,
      title: "Modern Loft in Downtown Edmonton",
      location: "Edmonton",
      price: "$700,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742749338-2e50ac0e76d5",
    },
    {
      id: 15,
      title: "Riverside Cottage with Stunning Views",
      location: "Edmonton",
      price: "$900,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742753923-2eaf8e93381e",
    },
    {
      id: 16,
      title: "Charming Townhouse",
      location: "Edmonton",
      price: "$500,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742753153-b7b42b7ebc63",
    },
    {
      id: 17,
      title: "Stylish Apartment with City Views",
      location: "Edmonton",
      price: "$300,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,000 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742750517-518cfe22e8ec",
    },
    {
      id: 18,
      title: "Family-Friendly Home near Parks",
      location: "Edmonton",
      price: "$550,000",
      bedrooms: 4,
      bathrooms: 2,
      area: "2,000 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742753966-b27d5dc98b77",
    },
    //red deer
    {
      id: 19,
      title: "Cozy Bungalow in Red Deer's Quiet Neighborhood",
      location: "Red Deer",
      price: "$320,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,200 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742750289-1bc8be4ae3a9",
    },
    {
      id: 20,
      title: "Charming Family Home with Large Yard",
      location: "Red Deer",
      price: "$450,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,000 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742750546-b2d0ce110e7e",
    },
    {
      id: 21,
      title: "Lakefront Cottage Retreat in Red Deer County",
      location: "Red Deer",
      price: "$550,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742751895-c87d3a245ae4",
    },
    {
      id: 22,
      title: "Ranch-style Home with Acreage in Red Deer",
      location: "Red Deer",
      price: "$680,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,500 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742752263-d8e66cdfdf4d",
    },
    {
      id: 23,
      title: "Modern Townhouse in Red Deer's Urban Core",
      location: "Red Deer",
      price: "$380,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742751654-7b04bba9f671",
    },
    {
      id: 24,
      title: "Country Living Retreat with Scenic Views",
      location: "Red Deer",
      price: "$590,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742751373-731dead66a19",
    },
    {
      id: 25,
      title: "Cottage-style Home with Rustic Charm",
      location: "Red Deer",
      price: "$400,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,600 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742753984-cb2734f76b17",
    },
    //canmore
    {
      id: 26,
      title: "Luxury Mountain Lodge with Panoramic Views",
      location: "Canmore",
      price: "$2,000,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "4,500 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742751802-b9c2d4c5aadd",
    },
    {
      id: 27,
      title: "Cozy Cabin Retreat in Canmore's Wilderness",
      location: "Canmore",
      price: "$500,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "900 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742753571-93d52eb3c691",
    },
    {
      id: 28,
      title: "Sleek Modern Apartment in Canmore's Downtown",
      location: "Canmore",
      price: "$650,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,700 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742752533-45cb94a03c5d",
    },
    {
      id: 29,
      title: "Rustic Mountain Chalet in Canmore",
      location: "Canmore",
      price: "$850,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,300 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742753583-1d8f06c24f9d",
    },
    {
      id: 30,
      title: "Golf Course Estate Home in Canmore",
      location: "Canmore",
      price: "$1,500,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,800 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742753362-9ddeb9e6f7be",
    },
    {
      id: 31,
      title: "Contemporary Condo",
      location: "Canmore",
      price: "$900,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,900 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742750854-cc726c63b532",
    },
    {
      id: 32,
      title: "Mountain Retreat with Hot Tub and Fire Pit",
      location: "Canmore",
      price: "$1,200,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sqft",
      imageUrl: "https://images.unsplash.com/photo-1541742752415-987f65f2b600",
    }
  ];
  
  
//******************************************************** */
  const queryString = window.location.search;
  // Parse the query string into key-value pairs
  const params = new URLSearchParams(queryString);  
  // Get the value of the 'city' parameter
  const city = params.get('city');
//******************************************************** */

  for(let i = 0; i < propertyListings.length; i++){
    const property = propertyListings[i]; // Access current property object

    if(property.location == city){

    document.getElementById("main-div").innerHTML += `
      <div class="col">
        <div class="card shadow-sm">
          <img src="${property.imageUrl}" class="bd-placeholder-img card-img-top" width="100%" height="225" aria-label="Property Image" alt="Property Image">
          <div class="card-body">
            <h5 class="card-title">${property.title}</h5>
            <p class="card-text">Location: ${property.location}</p>
            <p class="card-text">Price: ${property.price}</p>
            <p class="card-text">Bedrooms: ${property.bedrooms}</p>
            <p class="card-text">Bathrooms: ${property.bathrooms}</p>
            <p class="card-text">Area: ${property.area}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">${property.id}</small>
            </div>
          </div>
        </div>
      </div>
    `;
    }
  }
  
  