console.log("hey")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "yellow"

// // let box = document.getElementById("brown")
// // console.log(box)
// // box.style.backgroundColor = "brown"

// document.getElementById("brown").getElementsByClassName.backgroundColor = "pink"
// document.querySelector(".box").style.backgroundColor = "red"

console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e =>{

    e.style.backgroundColor = "pink"
})

e = document.getElementsByName("div")
e[4].matches("brown")