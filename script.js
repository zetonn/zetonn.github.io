data = [
  {
    img1: "assets/seni projek-01.jpg",
    title: "poster E-commerce",
    subtitle: "Zetoonik",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.Lorem, ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    img1: "assets/seni projek-01.jpg",
    title: "poster E-commerce",
    subtitle: "Zetoonik",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.Lorem, ipsum dolor sit amet consectetur adipisicing.",
  },
];

var container = document.querySelector(".container-project");

data.forEach((element) => {
  container.innerHTML +=
    `<div class="project">
        <div class="img-project">
        <img src="` +
    element.img1 +
    `" alt="" />
        <img src="${element.img1}" alt="" />
        </div>
        <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>
            ${element.desc}
        </p>
        </div>
        <button class="read-more">Read more</button>
    </div>`;
});
