const containers = document.querySelectorAll(".service-card__conatiner");

let selectedContainer = 3; // Index of the selected container
let prevSelectedContainer = 3;

containers.forEach((container, selectedIndex) => {
  container.addEventListener("mouseenter", () => {
    // updating variables
    prevSelectedContainer = selectedContainer;
    selectedContainer = selectedIndex;

    containers.forEach((unselectedContainer, index) => {
      if (index != selectedContainer) {
        if (index > selectedContainer) {
            gsap.to(unselectedContainer, {left: `${17.5 * index + 27}%`});
        }else if (index <= selectedContainer) {
            gsap.to(unselectedContainer, {left: `${17.5 * index}%`});
        }
      }
    });

    

    gsap.to(container, {left: `${17.5 * selectedIndex}%`})

    // if (prevSelectedContainer > selectedContainer) {
    //   gsap.fromTo(
    //     container,
    //     { clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" },
    //     { y: 100, clipPath: "circle(100%)" }
    //   );
    // }

  });
});
