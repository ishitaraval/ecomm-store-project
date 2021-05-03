const mainImage = document.querySelector('#main-product-image');
const prodGallery = document.querySelector('#prod-images');


const setThumb = function (event){
     const whichOne = event.target

     if(whichOne.matches('.alternate-color')) {

       let imgSrc = whichOne.getAttribute('src')
       let imgAlt = whichOne.getAttribute('alt')
   
        mainImage.setAttribute('src',imgSrc)
        mainImage.setAttribute('alt',imgAlt)

    }
}
prodGallery.addEventListener('click', setThumb)

