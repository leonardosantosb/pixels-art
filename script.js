window.onload = function () {
  const button = document.getElementById('button-random-color');
  const item1 = document.getElementsByClassName('color')[1];
  const item2 = document.getElementsByClassName('color')[2];
  const item3 = document.getElementsByClassName('color')[3];

  button.addEventListener('click', () => {
    const r = parseInt(Math.random() * 254);
    const g = parseInt(Math.random() * 254);
    const b = parseInt(Math.random() * 254);

    localStorage.setItem('colorPalette', 'rgb(0,255,0');
    localStorage.setItem('rgb2', 'rgb(255,0,0');
    localStorage.setItem('rgb3', 'rgb(0,0,255');

    item1.style.backgroundColor = `rgb(${r},${g},${b})`;
    localStorage.setItem('colorPalette', `rgb(${r},${g},${b})`);
    item2.style.backgroundColor = `rgb(${g},${b},${r})`;
    localStorage.setItem('rgb2', `rgb(${g},${b},${r})`);
    item3.style.backgroundColor = `rgb(${b},${r},${g})`;
    localStorage.setItem('rgb3', `rgb(${b},${r},${g})`);
  });
  const valorrgb1 = localStorage.getItem('colorPalette');
  item1.style.backgroundColor = valorrgb1;
  const valorrgb2 = localStorage.getItem('rgb2');
  item2.style.backgroundColor = valorrgb2;
  const valorrgb3 = localStorage.getItem('rgb3');
  item3.style.backgroundColor = valorrgb3;

  const corBrancaQuadrado = document.getElementById('pixel-board');
  corBrancaQuadrado.style.backgroundColor = 'rgb(255,255,255';

  document.getElementsByClassName('color')[0].classList.add('selected');
  document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0';
  item1.style.backgroundColor = 'rgb(0,255,0';
  item2.style.backgroundColor = 'rgb(255,0,0';
  item3.style.backgroundColor = 'rgb(0,0,255';

  const conjuntoDeCores = document.getElementById('color-palette');

  const corr = 'black';
  const quadroDePixels = document.getElementById('pixel-board');
  quadroDePixels.addEventListener('click', (event) => {
    event.target.style.backgroundColor = corr;
  });

  conjuntoDeCores.addEventListener('click', (event) => {
    const excluir = document.querySelector('.selected');
    excluir.classList.remove('selected');
    event.target.classList.add('selected');

    const corr = event.target.style.backgroundColor;
    const quadroDePixels = document.getElementById('pixel-board');
    quadroDePixels.addEventListener('click', (event) => {
      event.target.style.backgroundColor = corr;
    });
  });

  const button2 = document.getElementById('clear-board');
  button2.addEventListener('click', () => {
    const classePixel = document.getElementsByClassName('pixel')[0];
    const classePixel2 = document.getElementsByClassName('pixel')[1];
    const classePixel3 = document.getElementsByClassName('pixel')[2];
    const classePixel4 = document.getElementsByClassName('pixel')[3];
    const classePixel5 = document.getElementsByClassName('pixel')[4];
    const classePixel6 = document.getElementsByClassName('pixel')[5];
    const classePixel7 = document.getElementsByClassName('pixel')[6];
    const classePixel8 = document.getElementsByClassName('pixel')[7];
    const classePixel9 = document.getElementsByClassName('pixel')[8];
    const classePixel10 = document.getElementsByClassName('pixel')[9];
    const classePixel11 = document.getElementsByClassName('pixel')[10];
    const classePixel12 = document.getElementsByClassName('pixel')[11];
    const classePixel13 = document.getElementsByClassName('pixel')[12];
    const classePixel14 = document.getElementsByClassName('pixel')[13];
    const classePixel15 = document.getElementsByClassName('pixel')[14];
    const classePixel16 = document.getElementsByClassName('pixel')[15];
    const classePixel17 = document.getElementsByClassName('pixel')[16];
    const classePixel18 = document.getElementsByClassName('pixel')[17];
    const classePixel19 = document.getElementsByClassName('pixel')[18];
    const classePixel20 = document.getElementsByClassName('pixel')[19];
    const classePixel21 = document.getElementsByClassName('pixel')[20];
    const classePixel22 = document.getElementsByClassName('pixel')[21];
    const classePixel23 = document.getElementsByClassName('pixel')[22];
    const classePixel24 = document.getElementsByClassName('pixel')[23];
    const classePixel25 = document.getElementsByClassName('pixel')[24];
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
  });
};
