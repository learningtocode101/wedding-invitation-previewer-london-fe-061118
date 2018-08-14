document.addEventListener("DOMContentLoaded", function()  {
  formalChange();
  darkChange();
  simpleChange();
  nameUpdate();
});

function formalChange(){
  document.getElementById('formal').addEventListener("click", e => {
    document.querySelector('#imageHolder').style.backgroundImage = "url('https://wallpaperlayer.com/img/2015/9/wedding-ring-background-8163-8479-hd-wallpapers.jpg')";
    document.querySelector('#imageHolder').style.backgroundSize = "cover";
    document.querySelector('#imageHolder').style.font = "1em Allura, serif";
  });
}

function darkChange(){
   document.getElementById('dark').addEventListener("click", e =>{
    document.querySelector('#imageHolder').style.backgroundImage = "url('https://wallpaperlayer.com/img/2015/9/wedding-backgrounds-8171-8487-hd-wallpapers.jpg')";
    document.querySelector('#imageHolder').style.backgroundSize = "cover";
    document.querySelector('#imageHolder').style.font = "italic 1em Roboto, serif";
});
}

function simpleChange(){
  document.getElementById('simple').addEventListener("click", e =>{
    document.querySelector('#imageHolder').style.backgroundImage = "url('http://orderecigsjuice.info/wp-content/uploads/17-best-ideas-about-free-invitation-templates-on-pinterest-diy-38.jpg')";
    document.querySelector('#imageHolder').style.backgroundSize = "cover";
    document.querySelector('#imageHolder').style.backgroundRepeat= "no-repeat";
    document.querySelector('#imageHolder').style.font = "bold 1em Roboto, serif";
});
}

function nameUpdate(){
  document.getElementById('firstName').addEventListener("input", function(){
  document.getElementById('firstNameAdd').innerHTML = firstName.value;
  })

  document.getElementById('secondName').addEventListener("input", function(){
  document.getElementById('secondNameAdd').innerHTML = secondName.value;
  })

  document.getElementById('lastName').addEventListener("input", function(){
  document.getElementById('lastNameAdd').innerHTML = lastName.value;
  })

 document.getElementById('dateInput').addEventListener("input", function(){
    console.log(dateInput.value);
  document.getElementById('weddingDateAdd').innerHTML = dateInput.value;
  })

 document.getElementById('locationInput').addEventListener("input", function(){
  document.getElementById('weddingLocationAdd').innerHTML = locationInput.value;
  })
  
  }
  
