let button = document.getElementById("button-random-color")
let item1 = document.getElementsByTagName("div")[1]
let item2 = document.getElementsByTagName("div")[2]
let item3 = document.getElementsByTagName("div")[3]
button.addEventListener("click", function(){
    let r = parseInt(Math.random() * 254);

    let g = parseInt(Math.random() * 254);
 
    let b = parseInt(Math.random() * 254);

    item1.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
    item2.style.backgroundColor = 'rgb('+g+','+b+','+r+')'
    item3.style.backgroundColor = 'rgb('+b+','+r+','+g+')'
    
 
 
})

