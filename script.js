function setDynamicVH() {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--dynamic-vh', `${vh}px`);
}

// Initial call
setDynamicVH();

// Update on resize
window.addEventListener('resize', setDynamicVH);
