window.onload = function(){
    let button = document.getElementById("button-random-color")
    let item1 = document.getElementsByClassName("color")[1]
    let item2 = document.getElementsByClassName("color")[2]
    let item3 = document.getElementsByClassName("color")[3]
    
    button.addEventListener("click", function(){

    let r = parseInt(Math.random() * 254);

    let g = parseInt(Math.random() * 254);
 
    let b = parseInt(Math.random() * 254);

    item1.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
    localStorage.setItem("colorPalette", 'rgb('+r+','+g+','+b+')')
    item2.style.backgroundColor = 'rgb('+g+','+b+','+r+')'
    localStorage.setItem("rgb2", 'rgb('+g+','+b+','+r+')')
    item3.style.backgroundColor = 'rgb('+b+','+r+','+g+')'
    localStorage.setItem("rgb3", 'rgb('+b+','+r+','+g+')')

    })
    let valorrgb1 = localStorage.getItem("colorPalette")
    item1.style.backgroundColor = valorrgb1
    let valorrgb2 = localStorage.getItem("rgb2")
    item2.style.backgroundColor = valorrgb2
    let valorrgb3 = localStorage.getItem("rgb3")
    item3.style.backgroundColor = valorrgb3
    
    let corBrancaQuadrado = document.getElementById("pixel-board")
    corBrancaQuadrado.style.backgroundColor = "rgb(255,255,255";
      
    let cores = document.getElementById ('color-Pallet');
    cores.addEventListener('click', function (event) {
    let selectedColor = document.getElementsByClassName('selected') 
    selectedColor.classList.remove('selected')
    event.target.classList.add('selected');
    
    })

    
}

