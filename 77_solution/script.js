  function createCard(title, cName, _views, yearsOld, duration, thumbnail) {
    // finish this function
  let viewStr 
  if(_views<1000){
    viewStr = _views/1000 + "K"
  }
  else if(_views>1000000){
    viewStr = _views/1000000 + "M"
  }
  else{
    viewStr = _views/1000 + "K"
  }
  
 let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
                </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr}views . ${yearsOld}y ago</p>
            </div>
    </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
  
  }
  createCard("Installing VS code & How Websites Work | Sigma Web Development Course-Tutorial#1",
    "CodeWithHarry",
    8600000,
    3,
    "31:20",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w"
)