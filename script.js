function toggleMode() {
    const html = document.documentElement
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }
    html.classList.toggle('light'); //o método toggle() de alguma maneira executa a condição a cima

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem com uma condição
    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light/Obs.: o setAttribute define o atributo.
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        // se tiver sem light mode, manter a imagem nornal
        img.setAttribute('src', './assets/Avatar.png')

    }


}