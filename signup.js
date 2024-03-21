let landlordEl = document.getElementById("landlord");
let tenentEl = document.getElementById("tenent");
let signupBtn = document.getElementById("signUpBtn");
let landlord;
let tenent;


landlordEl.addEventListener("change", ()=>{
  if (landlordEl.checked) {
    console.log('Landlord selected');
    landlord = true;
    tenent = false;
  }
  else{
    landlord = false;
  }
})

tenentEl.addEventListener('change', () => {
  if (tenentEl.checked) {
    console.log('Tenant selected');
    tenent = true;
    landlord = false;
  }
  else{
    tenent = false;
  }
});

signupBtn.addEventListener("click", ()=>{
  if(landlord == true){
    window.location.href = 'landlord.html';
  }
  else if(tenent == true){
    window.location.href = 'index.html'
  }
})
