function page1anime(){
    var tl=gsap.timeline()
tl.from("nav h1 , nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.6,
    stagger:0.15
})
tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.6

})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.5

})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4

})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
},"-=1.1")
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}
function page2anime(){
    var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end:"top -10",
        scrub:2,
    }
})

 tl2.from(".services",{
    y:40,
    opacity:0,
    duration:0.5
 })
 tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
 },"anime")
 tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
 },"anime")
 tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1,
 },"slide")
 tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
 },"slide")
}
page1anime()
page2anime()