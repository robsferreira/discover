function toggleMode() {
  const html = document.documentElement
// Pegar a tag img
  const img = document.querySelector("#profile img")
  // Subistituir a imagem
  if(html.classList.contains('light')) {
    // Se tiver sem light mode, manter a foto normal
    img.setAttribute('src', './assets/avatar.png')
  } else {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', "Agora e uma imagem de uma pessoa com Óculos escuro")
  } 

  html.classList.toggle('light')

}