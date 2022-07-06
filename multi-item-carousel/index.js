//let's create an array of images so we can give it an order and loop from the last index to first and vice versa.

/* const flowers = [
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
]; */

const daisy = {
    class: 'daisy',
    img: './imgs/daisy.jpg',
    title: 'Daisy'
};

const chrysanthemum = {
    class: 'chrysanthemum',
    img: './imgs/chrysanthemum.jpg',
    title: 'Chrysanthemum'
};

const orchid = {
    class: 'orchid',
    img: './imgs/orchid.jpg',
    title: 'Orchid'
};

const rose = {
    class: 'rose',
    img: './imgs/rose.jpg',
    title: 'Rose'
};

const tulip = {
    class: 'tulip',
    img: './imgs/tulip.jpg',
    title: 'Tulip'
};

//getting NodeList of divs with class item
let items = document.querySelectorAll('.item');
console.log(items);

//selecting



//selecting buttons
const btn_right = document.querySelector('.right');
const btn_left = document.querySelector('.left');

//button event listeners
btn_right.addEventListener('click', () => {
    items.forEach(item => {
        
        let classList = item.classList;
        let img = item.querySelector('img');
        let title = item.querySelector('.title');
        /* console.log(classList);
        console.log(img);
        console.log(title); */

        if(classList.contains('daisy')){
            classList.remove('daisy');
            classList.add(chrysanthemum.class);
            img.src = chrysanthemum.img;
            img.alt = chrysanthemum.class;
            title.textContent = chrysanthemum.title;
        }

        else if(classList.contains('chrysanthemum')){
            classList.remove('chrysanthemum');
            classList.add(orchid.class);
            img.src = orchid.img;
            img.alt = orchid.class;
            title.textContent = orchid.title;
        }

        else if(classList.contains('orchid')){
            classList.remove('orchid');
            classList.add(rose.class);
            img.src = rose.img;
            img.alt = rose.class;
            title.textContent = rose.title;
        }

        else if(classList.contains('rose')){
            classList.remove('rose');
            classList.add(tulip.class);
            img.src = tulip.img;
            img.alt = tulip.class;
            title.textContent = tulip.title;
        }
    
        else if(classList.contains('tulip')){
            classList.remove('tulip');
            classList.add(daisy.class);
            img.src = daisy.img;
            img.alt = daisy.class;
            title.textContent = daisy.title;
        }
    });
})


//button left event listener
btn_left.addEventListener('click', () => {
    items.forEach(item => {
        
        let classList = item.classList;
        let img = item.querySelector('img');
        let title = item.querySelector('.title');
        /* console.log(classList);
        console.log(img);
        console.log(title); */

        if(classList.contains('daisy')){
            classList.remove('daisy');
            classList.add(tulip.class);
            img.src = tulip.img;
            img.alt = tulip.class;
            title.textContent = tulip.title;
        }

        else if(classList.contains('chrysanthemum')){
            classList.remove('chrysanthemum');
            classList.add(daisy.class);
            img.src = daisy.img;
            img.alt = daisy.class;
            title.textContent = daisy.title;
        }

        else if(classList.contains('orchid')){
            classList.remove('orchid');
            classList.add(chrysanthemum.class);
            img.src = chrysanthemum.img;
            img.alt = chrysanthemum.class;
            title.textContent = chrysanthemum.title;
        }

        else if(classList.contains('rose')){
            classList.remove('rose');
            classList.add(orchid.class);
            img.src = orchid.img;
            img.alt = orchid.class;
            title.textContent = orchid.title;
        }
    
        else if(classList.contains('tulip')){
            classList.remove('tulip');
            classList.add(rose.class);
            img.src = rose.img;
            img.alt = rose.class;
            title.textContent = rose.title;
        }
    });
})