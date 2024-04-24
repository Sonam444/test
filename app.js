let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.slider .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');
thumbnail.appendChild(thumbnailItems[0]);

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');

    if(direction === 'next'){
        let lastItem = sliderItems[sliderItems.length - 1].cloneNode(true);
        sliderList.insertBefore(lastItem, sliderItems[0]);
        sliderList.removeChild(sliderItems[sliderItems.length - 1]);
        
        let lastThumbnail = thumbnailItems[thumbnailItems.length - 1].cloneNode(true);
        thumbnail.insertBefore(lastThumbnail, thumbnailItems[0]);
        thumbnail.removeChild(thumbnailItems[thumbnailItems.length - 1]);
        
        sliderList.style.transition = 'none';
        sliderList.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            sliderList.style.transition = 'transform 0.5s ease-in-out';
            sliderList.style.transform = 'translateX(0)';
        });
    } else {
        let firstItem = sliderItems[0].cloneNode(true);
        sliderList.appendChild(firstItem);
        sliderList.removeChild(sliderItems[0]);
        
        let firstThumbnail = thumbnailItems[0].cloneNode(true);
        thumbnail.appendChild(firstThumbnail);
        thumbnail.removeChild(thumbnailItems[0]);
        
        sliderList.style.transition = 'none';
        sliderList.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            sliderList.style.transition = 'transform 0.5s ease-in-out';
            sliderList.style.transform = 'translateX(0)';
        });
    }
}
