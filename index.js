

const lightbox = document.querySelector('.lightbox')
const imgLightbox = document.querySelector('.lightbox-img')
const lightboxClose = document.querySelector('.lightbox-close')
const gallery = document.querySelector('.gallery')

const url = 'https://nekos.best/api/v2/husbando';






async function exibirAnime(url){
    fetch(url).then(response => response.json())
    .then(data => {
        console.log(data)
        data.results.forEach((anime) => {
            const div = document.createElement('div')
            div.classList.add('item')
            const items = document.querySelectorAll('.item')
        const urlImg = anime.url;
        div.innerHTML = `<img src= "${urlImg}" alt = "img" class="img-gallery"> `
        gallery.appendChild(div)

        items.forEach((item) => {
            item.addEventListener('click',() => {
                const imageUrl = item.querySelector('.img-gallery').getAttribute('src')
                imgLightbox.setAttribute('src',imageUrl)
                lightbox.style.display = 'flex'
            })
        })
        lightboxClose.addEventListener('click',() => {
            lightbox.style.display = 'none'
        })


    })
})

}
for(let i = 0; i<48; i++){

    await exibirAnime(url)
}

  
   

