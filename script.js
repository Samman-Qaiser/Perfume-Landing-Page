function page1(){
var tl=gsap.timeline()
var p=document.querySelector(".pp")
var text=p.textContent.split("")
var clutter=""
text.forEach(function(dets){
   clutter+=`<span>${dets}</span>`
})
p.innerHTML=clutter
var h1=document.querySelector(".page1-left h1")
var texth=h1.textContent.split(" ")
var clutterh=""

    texth.forEach(function(dets){
        clutterh+=`<span>${dets}</span>`
    })

h1.innerHTML=clutterh
tl.from(".page1-left h1 span",{
    y:150,
    opacity:0,
    stagger:0.1
},"animi")

tl.from(".page1 .long",{
    y:550,
    opacity:1,
    stagger:{
        amount:2
    }
})
tl.from(".page1 .p",{
    x:-700,
    // opacity:0,
  duration:2
})
tl.from(".sakura",{
    y:440,
    opacity:0
})
tl.from(".page1-left p span",{
    stagger:0.1,
    opacity:0
},)
}

    function page_change() {
        var tl = gsap.timeline({
            scrollTrigger: {
                scroller: "body",
                trigger: ".con",
                start: "50% 50%",
                end: "100%  50%",
             
                scrub: 3,   pin:true
            }
        });
        tl.to(".page2", {
            left:"0%",
            bottom:"0%",
           borderRadius:"4rem",
          transform:"scaleX(0.7) scaleY(0.5)"
         
        });
        tl.to(".page2",{
            left:"0%",
            top:"50%",
          
          transform:"scaleX(0.9) scaleY(0.8) "
        })
        tl.to(".page2",{
            left:"0%",
            top:"0%",
            borderRadius:"0",
          transform:"scaleX(1) scaleY(1) "
        })
         tl.from(".page2-bottle1",{
            x:-100
         },"ani")
         tl.from(".page2-bottle2",{
            x:100
         },"ani")
        tl.from(".page2 .long",{
            x:-550,
            opacity:1,
            stagger:{
                amount:2
            }
        })
        tl.from(".page2 .p",{
            x:-700,
            // opacity:0,
          duration:2
        })
    
       
    }
    page_change();

page1()