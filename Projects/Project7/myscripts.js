/* Preload images */
function preloadImages() {
    let images = [
        'Images/EHLogo1.jpg',
        'Images/EHLogo2.jpg', // hover logo
        'Images/CoupleCampingLg.jpg',
        'Images/CoupleHikingLg.jpg',
        'Images/CoupleBike1Lg.jpg'
    ];

    for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];
    }
}

/* Logo rollover */
function swapLogo() {
    document.getElementById("logo").src = "Images/EHLogo2.jpg";
}

function restoreLogo() {
    document.getElementById("logo").src = "Images/EHLogo1.jpg";
}

/* Swap full size gallery image */
function swapImage(imgPath) {
    document.getElementById("fullImg").src = imgPath;
}

