//let's create an array of images so we can give it an order and loop from the last index to first and vice versa.

const flowers = [
    {
        id: 0,
        class: 'daisy',
        img: './imgs/daisy.jpg',
        alt: 'daisy',
        title: 'Daisy'
    },
    {
        id: 1,
        class: 'chrysanthemum',
        img: './imgs/chrysanthemum.jpg',
        alt: 'chrysanthemum',
        title: 'Chrysanthemum'
    },
    {
        id: 2,
        class: 'orchid',
        img: './imgs/orchid.jpg',
        alt: 'orchid',
        title: 'Orchid'
    },
    {
        id: 3,
        class: 'rose',
        img: './imgs/rose.jpg',
        alt: 'rose',
        title: 'Rose'
    },
    {
        id: 4,
        class: 'tulip',
        img: './imgs/tulip.jpg',
        alt: 'tulip',
        title: 'Tulip'
    }
]

//getting array of divs with class item

let items = document.querySelectorAll('.item');

console.log(items);


//selecting buttons

const btn_right = document.querySelector('.right');
const btn_left = document.querySelector('.left');