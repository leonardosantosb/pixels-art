window.onload = function () {
  let button = document.getElementById("button-random-color");
  let item1 = document.getElementsByClassName("color")[1];
  let item2 = document.getElementsByClassName("color")[2];
  let item3 = document.getElementsByClassName("color")[3];

  button.addEventListener("click", function () {

    let r = parseInt(Math.random() * 254);

    let g = parseInt(Math.random() * 254);

    let b = parseInt(Math.random() * 254);

    localStorage.setItem("colorPalette", 'rgb(0,255,0' );
    localStorage.setItem("rgb2", 'rgb(255,0,0');
    localStorage.setItem("rgb3", 'rgb(0,0,255');

    item1.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    localStorage.setItem("colorPalette", 'rgb(' + r + ',' + g + ',' + b + ')');
    item2.style.backgroundColor = 'rgb(' + g + ',' + b + ',' + r + ')';
    localStorage.setItem("rgb2", 'rgb(' + g + ',' + b + ',' + r + ')');
    item3.style.backgroundColor = 'rgb(' + b + ',' + r + ',' + g + ')';
    localStorage.setItem("rgb3", 'rgb(' + b + ',' + r + ',' + g + ')');

  })
  let valorrgb1 = localStorage.getItem("colorPalette");
  item1.style.backgroundColor = valorrgb1;
  let valorrgb2 = localStorage.getItem("rgb2");
  item2.style.backgroundColor = valorrgb2;
  let valorrgb3 = localStorage.getItem("rgb3");
  item3.style.backgroundColor = valorrgb3;

  let corBrancaQuadrado = document.getElementById("pixel-board");
  corBrancaQuadrado.style.backgroundColor = "rgb(255,255,255";

  document.getElementsByClassName('color')[0].classList.add('selected');
  document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0';
  item1.style.backgroundColor = 'rgb(0,255,0';
  item2.style.backgroundColor = 'rgb(255,0,0';
  item3.style.backgroundColor = 'rgb(0,0,255';

  let conjuntoDeCores = document.getElementById("color-palette");

  let corr = 'black';
  let quadroDePixels = document.getElementById('pixel-board');
  quadroDePixels.addEventListener("click", function (event) {
    event.target.style.backgroundColor = corr;
  })

  conjuntoDeCores.addEventListener("click", function (event) {
    let excluir = document.querySelector('.selected');
    excluir.classList.remove('selected');
    event.target.classList.add("selected");

    let corr = event.target.style.backgroundColor;
    let quadroDePixels = document.getElementById('pixel-board');
    quadroDePixels.addEventListener("click", function (event) {
      event.target.style.backgroundColor = corr;
    })

  })


  let button2 = document.getElementById('clear-board');
  button2.addEventListener('click', function () {
    let classePixel = document.getElementsByClassName('pixel')[0];
    let classePixel2 = document.getElementsByClassName('pixel')[1];
    let classePixel3 = document.getElementsByClassName('pixel')[2];
    let classePixel4 = document.getElementsByClassName('pixel')[3];
    let classePixel5 = document.getElementsByClassName('pixel')[4];
    let classePixel6 = document.getElementsByClassName('pixel')[5];
    let classePixel7 = document.getElementsByClassName('pixel')[6];
    let classePixel8 = document.getElementsByClassName('pixel')[7];
    let classePixel9 = document.getElementsByClassName('pixel')[8];
    let classePixel10 = document.getElementsByClassName('pixel')[9];
    let classePixel11 = document.getElementsByClassName('pixel')[10];
    let classePixel12 = document.getElementsByClassName('pixel')[11];
    let classePixel13 = document.getElementsByClassName('pixel')[12];
    let classePixel14 = document.getElementsByClassName('pixel')[13];
    let classePixel15 = document.getElementsByClassName('pixel')[14];
    let classePixel16 = document.getElementsByClassName('pixel')[15];
    let classePixel17 = document.getElementsByClassName('pixel')[16];
    let classePixel18 = document.getElementsByClassName('pixel')[17];
    let classePixel19 = document.getElementsByClassName('pixel')[18];
    let classePixel20 = document.getElementsByClassName('pixel')[19];
    let classePixel21 = document.getElementsByClassName('pixel')[20];
    let classePixel22 = document.getElementsByClassName('pixel')[21];
    let classePixel23 = document.getElementsByClassName('pixel')[22];
    let classePixel24 = document.getElementsByClassName('pixel')[23];
    let classePixel25 = document.getElementsByClassName('pixel')[24];
    classePixel.style.backgroundColor = 'rgb(255,255,255)';
    classePixel2.style.backgroundColor = 'rgb(255,255,255)';
    classePixel3.style.backgroundColor = 'rgb(255,255,255)';
    classePixel4.style.backgroundColor = 'rgb(255,255,255)';
    classePixel5.style.backgroundColor = 'rgb(255,255,255)';
    classePixel6.style.backgroundColor = 'rgb(255,255,255)';
    classePixel7.style.backgroundColor = 'rgb(255,255,255)';
    classePixel8.style.backgroundColor = 'rgb(255,255,255)';
    classePixel9.style.backgroundColor = 'rgb(255,255,255)';
    classePixel10.style.backgroundColor = 'rgb(255,255,255)';
    classePixel11.style.backgroundColor = 'rgb(255,255,255)';
    classePixel12.style.backgroundColor = 'rgb(255,255,255)';
    classePixel13.style.backgroundColor = 'rgb(255,255,255)';
    classePixel14.style.backgroundColor = 'rgb(255,255,255)';
    classePixel15.style.backgroundColor = 'rgb(255,255,255)';
    classePixel16.style.backgroundColor = 'rgb(255,255,255)';
    classePixel17.style.backgroundColor = 'rgb(255,255,255)';
    classePixel18.style.backgroundColor = 'rgb(255,255,255)';
    classePixel19.style.backgroundColor = 'rgb(255,255,255)';
    classePixel20.style.backgroundColor = 'rgb(255,255,255)';
    classePixel21.style.backgroundColor = 'rgb(255,255,255)';
    classePixel22.style.backgroundColor = 'rgb(255,255,255)';
    classePixel23.style.backgroundColor = 'rgb(255,255,255)';
    classePixel24.style.backgroundColor = 'rgb(255,255,255)';
    classePixel25.style.backgroundColor = 'rgb(255,255,255)';

  })






}

