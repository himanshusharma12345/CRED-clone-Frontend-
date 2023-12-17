let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".part-2",
    start: "0% 50%", 
    end: "50% 50%", 
    markers:true,
    scrub:1,
  },
});


// add animations and labels to the timeline
tl.to("#imgthree", 
{ 
  bottom:"-5vh",  
})
.to("#imgtwo,#imgfour",
{
  bottom: "-10vh",  
})
.to("#imgone,#imgfive",
{
  bottom: "-20vh",  
});