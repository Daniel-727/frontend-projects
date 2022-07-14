//selecting elements
let image = document.querySelector('img');
let dots = document.querySelectorAll('.dot');
const left_btn = document.querySelector('.btn-left');
const right_btn = document.querySelector('.btn-right');


/*   carousel objects ORDER

1.chrysanthemum
2.daisy
3.orchid
4.rose

*/

const flowers = [
    {img: './imgs/chrysanthemum.jpg'},
    {img: './imgs/daisy.jpg'},
    {img: './imgs/orchid.jpg'},
    {img: './imgs/rose.jpg'},
]

//default
let i = 0;
image.src = flowers[i].img;
dots[i].classList.add('.active');


//button event listeners

right_btn.addEventListener('click', () => {
    let prev;
    if (i === flowers.length - 1){
        i = 0;
        prev = flowers.length - 1;
    } else {
        i++;
        prev = i - 1;
    }
    image.src = flowers[i].img;
    dots[prev].classList.remove('active');
    dots[i].classList.add('active');
});


left_btn.addEventListener('click', () => {
    let prev;
    if (i === 0){
        i = flowers.length - 1;
        prev = 0;
    } else {
        i--;
        prev = i + 1;
    }
    image.src = flowers[i].img;
    dots[prev].classList.remove('active');
    dots[i].classList.add('active');
});


