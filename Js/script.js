const productAr =[
    {
       iprodt_img: 'iphone-x.jpg',
       iprodt_name: 'iPhone X',
       iprodt_link: 'product .html',
       iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
       iprodt_price: {prev:1500.00,sale:1319.00 },
       iprodt_ratings: 4.4,
       iprodt_colors: ['white','black','rose gold'],
       iprodt_storage: ['64','128','256','512'],
       
    },
    {
        iprodt_img: 'iphone xr.jpg',
        iprodt_name: 'iPhone Xr',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
        iprodt_price: {prev:1029.00,sale:799.00 },
        iprodt_colors: ['white','black','red','blue','yellow','coral'],
        iprodt_storage: ['64','128','256','512'],
        
     },
     {
        iprodt_img: 'iphone-xs.jpg',
        iprodt_name: 'iPhone Xs',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
        iprodt_price:{prev:1000.00,sale:899.00 }, 
        iprodt_ratings: 4.4,
        iprodt_colors: ['white','black','rose gold'],
        iprodt_storage: ['64','128','256','512'],
        
     },
     {
        iprodt_img: 'iphone 11.jpg',
        iprodt_name: 'iPhone 11',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
        iprodt_price: {prev:1150.00,sale:979.00 },
        iprodt_ratings: 4.4,
        iprodt_colors: ['White','Black','Lilic','Lightyellow','Lightgreen'],
        iprodt_storage: ['64','128','256','512'],
        
     },
     {
        iprodt_img: 'iphone 11pro.jpg',
        iprodt_name: 'iPhone 11pro',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
        iprodt_price:{prev:1550.00,sale:1305.00 }, 
        iprodt_ratings: 4.4,
        iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
        iprodt_storage: ['64','128','256','512'],
        
     },
     {
        iprodt_img: 'iphone 12 mini.jpg',
        iprodt_name: 'iPhone 12 mini',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
        iprodt_price: {prev:800.00,sale:699.00 },
        iprodt_colors: ['White','Black','Productred','Blue','Green'],
        iprodt_storage: ['64','128','256','512'],
        
     }
]

const Products = document.querySelector('.iproducts')

const article_pro = document.createElement('article')
// const colors = document.querySelector('#color')
// productAr.forEach(function(iproducts){
//     colors.innerHTML= `<li><label><input type="radio" name="colour" value="rose gold" id='color'>${iproducts.iprodt_colors}</label></li>`
// })
//let store=[]
//storage.forEach(function(store){
 //   store = `<li><label><input type="radio" name="colour" value="rose gold"> ${storage} </label></li>`
//})

productAr.forEach( function(iproducts) {

  const colors= iproducts.iprodt_colors
  const storages = iproducts.iprodt_storage
  
  let col=[]
  colors.forEach((cols) => {
     col += `<li><label><input type="radio" name="colour" value="rose gold"> ${cols} </label></li>`
  })

let store=[]
storages.forEach(function(storage){
  // console.log(storage)
  store += `<li><label><input type="radio" name="storage" value="512">${storage}  gb</label></li>`
})

  


    const article_pro = document.createElement('article')
   
    article_pro.classList.add('product')

    article_pro.innerHTML = 
    `<img src="img/${iproducts.iprodt_img}" alt="${iproducts.iprodt_name}">
    <div class="prod-details">
      <h3><a href="${iproducts.iprodt_link}">${iproducts.iprodt_name}</a></h3>
      <data value="39"><del>$${iproducts.iprodt_price.prev}</del> <ins>${iproducts.iprodt_price.sale}</ins></data>
      <p>"${iproducts.iprodt_descrip}."</p>
     <dl>
       <dt>Rating</dt>
       <dd>${iproducts.iprodt_ratings} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
     </dl>
      <a href="#"style="color: lightseagreen; text-decoration: underline;">see more</a>
  
      <form class="product-prop">
        <fieldset>
          <legend>Colours</legend>
          <ul class= "radio-btn" id = "radio-color">
              ${col}
          </ul>
          </fieldset>
        <fieldset>
         <legend>Storage</legend>
         <ol class= "radio-btn">
              ${store}
         </ol>
       </fieldset>
     </form>
     <div class="prodcut-list-cart">
       <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
       <button type="button"><span class="material-icons">favorite</span></button>
     </div>
     </div>
`
Products.appendChild(article_pro)
})