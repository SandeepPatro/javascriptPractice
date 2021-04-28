const reviews = [
    {
        id: 1,
        name: "Sandeep",
        job: "web developer",
        img:
            "./img/Profile3.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Preeti",
        job: "web designer",
        img:
            "./img/preeti.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Sandhya",
        job: "intern",
        img:
            "./img/sandhya.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Akhil",
        job: "t",
        img:
            "./img/akhil.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

let names = document.querySelector(".empname");
let image = document.querySelector("#person-img");
let info = document.querySelector('.info');
let index = 0;
const right = document.querySelector('.right');
const left = document.querySelector('.left');

console.log(reviews[index].name);
reviews.length
right.addEventListener('click', (e) => {
    index = ++index;
    if (index >= reviews.length) {
        index = 0;

    }
    console.log(index);
    names.textContent = reviews[index].name;
    image.src = reviews[index].img;
    info.textContent = reviews[index].text;
    console.log(reviews[index].name);


});

left.addEventListener('click', (e) => {
    index = --index;
    if (index <= -1) {
        index = 3;
    }
    console.log(index);
    names.textContent = reviews[index].name;
    image.src = reviews[index].img;
    info.textContent = reviews[index].text;
    console.log(reviews[index].name);
});
