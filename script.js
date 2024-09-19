let mainMouseMove = document.querySelector("#main");
let crsr = document.querySelector("#cursor");


mainMouseMove.addEventListener("mousemove",function(data){
    // console.log(data.x)
    crsr.style.display = "block"
   
        crsr.style.left = data.x + "px"
    crsr.style.top = data.y + "px"
   

})

mainMouseMove.addEventListener("mouseleave",function(data){
    // console.log(data.x)
    // crsr.style.left = data.x + "px"
    // crsr.style.top = data.y + "px"
    crsr.style.display = "none" 

})









// or,


// let mainMouseMove = document.querySelector("#main");
// let crsr = document.querySelector("#cursor");


// mainMouseMove.addEventListener("mousemove",function(data){
//     // console.log(data.x)
//     crsr.style.display = "block"
   
//         crsr.style.left = data.x + "px"
//     crsr.style.top = data.y + "px"
   

// })

// mainMouseMove.addEventListener("mouseleave",function(data){
//     // console.log(data.x)
//     // crsr.style.left = data.x + "px"
//     // crsr.style.top = data.y + "px"
//     crsr.style.display = "none" 

// })