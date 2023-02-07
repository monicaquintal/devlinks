// 

function toggleMode() {
  // light/dark mode
  const html = document.documentElement;
  html.classList.toggle('light'); // equivale à lógica abaixo:

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light');
  // } else {
  //   html.classList.add('light');
  // }

  
  // alterando o avatar
  const img = document.querySelector("#profile img");

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Foto da Monica sorrindo e segurando sua gata');
  } else {
    img.setAttribute('src', './assets/avatar-dark.png');
    img.setAttribute('alt', 'Foto da Monica sorrindo');
  }

}

