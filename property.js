const propertyListings = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      location: "Calgary, Alberta",
      price: "$450,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,100 sqft",
      imageUrl: "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/4/calgary-home--residential--house-1-6217330-1672855020133.jpg",
    },
    {
      id: 2,
      title: "Family Home in Suburbia",
      location: "Calgary, Alberta",
      price: "$650,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://www.justinhavre.com/thumbs/416x284/uploads/Calgary%20Homes%2002.jpg",
    },
    {
      id: 3,
      title: "Cozy Bungalow near Parks",
      location: "Calgary, Alberta",
      price: "$350,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://photos.zillowstatic.com/fp/dc0801c36da9078ae10061fa01b9488d-p_e.jpg",
    },
    {
      id: 4,
      title: "Luxury Penthouse with Views",
      location: "Calgary, Alberta",
      price: "$1,200,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,500 sqft",
      imageUrl: "https://www.kirbycox.com/thumbs/800x600/r/uploads/Tuscany-Homes-For-Sale-Calgary.jpg",
    },
    {
      id: 5,
      title: "Townhouse in Trendy Neighborhood",
      location: "Calgary, Alberta",
      price: "$550,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://cdn.sitephotos.sierrastatic.com/1807_hero_bigstock-luxury-house-with-beautiful-la-87727472-20200118105326.jpg",
    },
    {
      id: 6,
      title: "Riverside Cottage Retreat",
      location: "Calgary, Alberta",
      price: "$800,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,000 sqft",
      imageUrl: "https://s3.us-east-2.amazonaws.com/havenlifestyles/a1232488-1.jpg",
    },
    {
      id: 7,
      title: "Modern Apartment with Balcony",
      location: "Calgary, Alberta",
      price: "$300,000",
      bedrooms: 1,
      bathrooms: 1,
      area: "800 sqft",
      imageUrl: "https://www.settlersrealty.ca/src/img/post/small2464.jpg",
    },
    {
      id: 8,
      title: "Family-Friendly Home near Schools",
      location: "Calgary, Alberta",
      price: "$500,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,600 sqft",
      imageUrl: "https://www.justinhavre.com/thumbs/416x284/uploads/Calgary%20Homes%2001.jpg",
    },
    {
      id: 9,
      title: "Historic Inner-City House",
      location: "Calgary, Alberta",
      price: "$900,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,000 sqft",
      imageUrl: "https://www.shutterstock.com/image-photo/luxury-house-sunny-day-calgary-600nw-440051536.jpg ",
    }
  ];
  
  

  for(let i = 0; i < propertyListings.length; i++){
    const property = propertyListings[i]; // Access current property object
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
  
  