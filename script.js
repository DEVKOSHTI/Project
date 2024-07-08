function setDynamicVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--dynamic-vh', `${vh}px`);
}

// Initial call
setDynamicVH();

// Update on resize
window.addEventListener('resize', setDynamicVH);
