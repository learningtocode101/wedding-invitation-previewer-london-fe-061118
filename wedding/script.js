document.addEventListener("DOMContentLoaded", e =>  {
  formalChange();
  darkChange();
  simpleChange();
  nameUpdate();
  initialsUpdate();
});

function formalChange(){
  document.getElementById('formal').addEventListener("click", e => {
    document.querySelector('#imageHolder').style.backgroundImage = "url('https://wallpaperlayer.com/img/2015/9/wedding-ring-background-8163-8479-hd-wallpapers.jpg')";
    document.querySelector('#imageHolder').style.backgroundSize = "cover";
    document.querySelector('#imageHolder').style.font = "1.2em Allura, serif";
    document.querySelector('#imageHolder').style.textShadow = "2px 1px 1px #fefefe";
    document.querySelector('#imageHolder').style.color = "#ff0a68";
    document.querySelector('#imageHolder').style.border = "none";
  });
}

function darkChange(){
   document.getElementById('dark').addEventListener("click", e =>{
    document.querySelector('#imageHolder').style.backgroundImage = "url('https://wallpaperlayer.com/img/2015/9/wedding-backgrounds-8171-8487-hd-wallpapers.jpg')";
    document.querySelector('#imageHolder').style.backgroundSize = "cover";
    document.querySelector('#imageHolder').style.font = "1em 'Modern Antiqua', serif";
    document.querySelector('#imageHolder').style.textShadow = "1px 2px 1px #000000";
    document.querySelector('#imageHolder').style.color = "#ffffff";
    document.querySelector('#imageHolder').style.border = "none";
});
}

function simpleChange(){
  document.getElementById('simple').addEventListener("click", e =>{
    document.querySelector('#imageHolder').style.backgroundImage = "url('http://orderecigsjuice.info/wp-content/uploads/17-best-ideas-about-free-invitation-templates-on-pinterest-diy-38.jpg')";
    document.querySelector('#imageHolder').style.backgroundSize = "cover";
    document.querySelector('#imageHolder').style.backgroundRepeat= "no-repeat";
    document.querySelector('#imageHolder').style.font = "bold 1em Coming Soon, serif";
    document.querySelector('#imageHolder').style.textShadow = "1px 1px 1px #ffffff";
    document.querySelector('#imageHolder').style.color = "#262e1f";
    document.querySelector('#imageHolder').style.border = "none";
});
}

function nameUpdate(){
  document.getElementById('firstName').addEventListener("input", e => {
  document.getElementById('firstNameAdd').innerHTML = firstName.value;
  })

  document.getElementById('secondName').addEventListener("input", e =>{
    document.getElementById('secondNameAdd').innerHTML = secondName.value;
  })

  document.getElementById('lastName').addEventListener("input", e =>{
    document.getElementById('lastNameAdd').innerHTML = lastName.value;
  })

 document.getElementById('dateInput').addEventListener("input", e =>{
    document.getElementById('weddingDateAdd').innerHTML = dateInput.value;
  })

 document.getElementById('locationInput').addEventListener("input", e =>{
    document.getElementById('weddingLocationAdd').innerHTML = locationInput.value;
  })
  
  }
  
function initialsUpdate(){
  document.getElementById('firstName').addEventListener("input", e =>{
    document.getElementById('firstInitials').innerHTML = firstName.value[0];
  })
  document.getElementById('lastName').addEventListener("input", e =>{
    document.getElementById('secondInitials').innerHTML = secondName.value[0];
  })
}
  
