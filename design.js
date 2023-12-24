var tl= gsap.timeline()
tl.from("#nav",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0.3,
    stagger:0.2,

})
tl.from("#body #images",{
    opacity:0,
    duration:0.5,
})
tl.from("#body h1",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
})
tl.from("#foot h3",{
    y:30,
    opacity:0,
    repeat:-1,
    yoyo:true,
})
tl.from("#foot img",{
    opacity:0,
    duration:0.3,
})