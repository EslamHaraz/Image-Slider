// Get Slider Items | Array.from[ES6]
let sliderImages = Array.from(document.querySelectorAll(".slider-Container img"));
// Get Length Of Images
let numberImages = sliderImages.length;
// Set Current slide
let currentslide = 1;
// Slide number string element
let slideNumber = document.getElementById("slide-number");
// Next and Previous Button
let next = document.getElementById("next");
let prev = document.getElementById("prev");
// Create The Main UL Element for Pagination
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
// Create List items Based On Slide Count
for (let i = 1; i <= numberImages; i++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
// Add The Created Ul Element to the indicators container
document.getElementById("indicators").appendChild(paginationElement);
// Get The Created UL
let paginationCreatedUl = document.getElementById("pagination-ul");
// Get Pagination items in array
let paginationItems = Array.from(document.querySelectorAll("#pagination-ul li"));
// Loop On All Pagination Items to Add Click Event
paginationItems.forEach(item => {
    item.addEventListener("click", function () {
        // Update currentslide to the clicked bullet index
        currentslide = parseInt(this.getAttribute("data-index"));
        updateSlider();
    });
});
// Function to Handle Next Slide
function nextSlide() {
    if (currentslide < numberImages) {
        currentslide++;
        updateSlider();
    }
}
// Function to Handle Previous Slide
function prevSlide() {
    if (currentslide > 1) {
        currentslide--;
        updateSlider();
    }
}
const handler = setInterval(() => {
    if (currentslide < numberImages) {
        nextSlide();
    } else {
        reverseHandler();
    }
}, 4000);
function reverseHandler() {
    let reverseInterval = setInterval(() => {
        if (currentslide > 1) {
            prevSlide();
        } else {
            clearInterval(reverseInterval);

            startForward();
        }
    }, 4000);
}
function startForward() {
    setInterval(() => {
        if (currentslide < numberImages) {
            nextSlide();
        } else {
            reverseHandler();
        }
    }, 4000);
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
function updateSlider() {
    slideNumber.textContent = `Slide #${currentslide} of ${numberImages}`;
    removeActive(sliderImages);
    removeActive(paginationItems);
    sliderImages[currentslide - 1].classList.add("active");
    paginationItems[currentslide - 1].classList.add("active");
    prev.classList.toggle("disabled", currentslide === 1);
    next.classList.toggle("disabled", currentslide === numberImages);
}
function removeActive(elements) {
    elements.forEach(element => {
        element.classList.remove("active");
    });
}
updateSlider();
let projectTitle = document.querySelector('.project-name');
let projectTitleContnet = 'Image Slider JS Pure';
let index = 0;
let typeWriter = setInterval(() => {
    projectTitle.textContent += projectTitleContnet[index];
    index++;
    index >= projectTitleContnet.length ? clearInterval(typeWriter) : '';
}, 100);
