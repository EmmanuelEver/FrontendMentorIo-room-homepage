
let menu_toggler = document.getElementById("menu-icon");
let backrop = document.getElementById("backdrop")
let menu_icon = menu_toggler.firstElementChild;
let nav_items = document.getElementById("nav");
let slides = document.getElementById("product__image__slides")
let slide_next = document.getElementById("slide-next");
let slide_prev = document.getElementById("slide-prev");
let translateX = 0;
let currentSlide = 1;
let productHeader = document.getElementById("product__content__title");
let productBody = document.getElementById("product__content__body");
const productHeaders = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];
const productBodies = [
 `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
  `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`
]

menu_toggler.addEventListener("click", (e) => {
	nav_items.style.transform == "translateY(0px)" ? show_navItems() : hide_navItems()

})
slide_next.addEventListener("click", (e) => {
	if(currentSlide < 3){
		currentSlide++
		productHeader.innerHTML = productHeaders[currentSlide - 1];
		productBody.innerHTML = productBodies[currentSlide - 1];
		translateX = translateX + 100;
		slides.style.transform = `translateX(-${translateX}%)`
	}else{
		return
	}
})

slide_prev.addEventListener("click", (e) => {
	if(currentSlide > 1){
		currentSlide--
		productHeader.innerHTML = productHeaders[currentSlide - 1];
		productBody.innerHTML = productBodies[currentSlide - 1];
		translateX = translateX - 100
		slides.style.transform = `translateX(-${translateX}%)`
	}else{
		return
	}
})

const show_navItems = () => {
	nav_items.style.transform = "translateY(130px)";
	menu_icon.setAttribute("src", "./images/icon-close.svg");
	backrop.style.display = "block";
}

const hide_navItems = () => {
	nav_items.style.transform = "translateY(0px)";
	menu_icon.setAttribute("src", "./images/icon-hamburger.svg");
	backrop.style.display = "none";
}


