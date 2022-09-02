let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".aventure-se", 4, { y: 850, duration: 4 }, "-=4")

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "120%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);