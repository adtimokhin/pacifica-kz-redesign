gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".animate-enter__container");

containers.forEach((container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
    },
  });

  const animateElement = container.querySelector('.animate-enter');

  tl.from(animateElement, { y: "100%", duration: 0.9, ease: "power2.inOut" });
});
