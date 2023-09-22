gsap.to("#nav",{
    backgroundColor :"#ff770000",
    height:"100px",
    duration : 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})