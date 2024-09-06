gsap.registerPlugin(ScrollTrigger);

// Sample data
const data = [
  {
    title: "Нак Газпром",
    subtitleOne: "30 тысяч",
    descriptionOne: "Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки.",
    subtitleTwo: "20 млн ₸",
    descriptionTwo: "Совместно с компанией ПАЦИФИКА внедрена система управления информационной безопасности",
  },
  {
    title: "Казахстан темир жолы",
    subtitleOne: "20 киска",
    descriptionOne: "Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки.",
    subtitleTwo: "10 лимонов",
    descriptionTwo: "Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки.",
  },
  {
    title: "Halyk Bank",
    subtitleOne: "20 волор",
    descriptionOne: "Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки.",
    subtitleTwo: "10 лимонов",
    descriptionTwo: "Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки.",
  },
];

// Containers
const titleContainer = document.querySelector("#cards__side-display__title__container");
const subtitleOneContainer = document.querySelector("#cards__side-display__subtitle-one__container");
const descriptionOneContainer = document.querySelector("#cards__side-display__description-one__container");
const subtitleTwoContainer = document.querySelector("#cards__side-display__subtitle-two__container");
const descriptionTwoContainer = document.querySelector("#cards__side-display__description-two__container");

// Adding invisible elements for the effect
function createInvisibleText(type,text) {
    const Element = document.createElement(type);
    Element.textContent = text;
    Element.style.opacity = '0'; // Keeps it in the layout but invisible
    return Element;
}

// prepopulating the container with data
titleContainer.appendChild(createInvisibleText("h2","НАК Казатомпром"));    
subtitleOneContainer.appendChild(createInvisibleText("h2","НАК Казатомпром"));
subtitleTwoContainer.appendChild(createInvisibleText("h2","НАК Казатомпром"));
descriptionOneContainer.appendChild(createInvisibleText("p","Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки."));
descriptionTwoContainer.appendChild(createInvisibleText("p","Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки."));
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // title
    const title = document.createElement("h2");
    title.textContent = element.title;

    // subtitle one
    const subtitleOne = document.createElement("h2");
    subtitleOne.textContent = element.subtitleOne;

    // subtitle two
    const subtitleTwo = document.createElement("h2");
    subtitleTwo.textContent = element.subtitleTwo;

    // description one
    const descriptionOne = document.createElement("p");
    descriptionOne.textContent = element.descriptionOne;
    
    // description one
    const descriptionTwo = document.createElement("p");
    descriptionTwo.textContent = element.descriptionTwo;

    titleContainer.appendChild(title);    
    subtitleOneContainer.appendChild(subtitleOne);
    subtitleTwoContainer.appendChild(subtitleTwo);
    descriptionOneContainer.appendChild(descriptionOne);
    descriptionTwoContainer.appendChild(descriptionTwo);
}
titleContainer.appendChild(createInvisibleText("h2","НАК Казатомпром"));    
subtitleOneContainer.appendChild(createInvisibleText("h2","НАК Казатомпром"));
subtitleTwoContainer.appendChild(createInvisibleText("h2","НАК Казатомпром"));
descriptionOneContainer.appendChild(createInvisibleText("p","Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки."));
descriptionTwoContainer.appendChild(createInvisibleText("p","Сотрудников компании было обучено использавонию самового важного инструмента дантиста - зубной щетки."));


/**
 * Animating the transitions
 * @param {*} container 
 * @param {*} newIndex 
 */
function animateContainerData(container, newIndex){
    const children = container.children; // Get all children of the container
    const childrenArray = Array.from(children);
    childrenArray.forEach((child)=>{
        gsap.to(child, {y: `-${(newIndex+1) * 100}%`})
    })
}

function setData(index){
    animateContainerData(titleContainer, index);
    animateContainerData(subtitleOneContainer, index);
    animateContainerData(subtitleTwoContainer, index);
    animateContainerData(descriptionOneContainer, index);
    animateContainerData(descriptionTwoContainer, index);
}

// Keeps track when to play which animation
const parents = gsap.utils.toArray(".cards__parent");
parents.forEach((parent, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: parent,
      start: "center center",
      end: "bottom center",
      onEnter: () => {
        setData(index);
      },
      onEnterBack: () => {
        setData(index);
      },
      onLeave: () => {
        if(index == 2){
            setData(3);
        }
      },
    },
  });
});
