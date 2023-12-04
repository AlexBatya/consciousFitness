const header = document.querySelector('.header__body__container')
const menuItems = header.querySelectorAll('nav ul li')


function headerScroll(){

    if(this.scrollY >= window.innerHeight * 3 - 100){
        header.style.cssText = 'background: #814C97'
        for(let elem of menuItems){
            elem.querySelector('a').style.cssText = 'color: white'
        }
        menuItems[3].querySelector('a').style.cssText = 'border-bottom: 1px solid white; color: white';
    }

    else if(this.scrollY >= window.innerHeight * 2 - 100){
        header.style.cssText = 'background: #814C97'
        for(let elem of menuItems){
            elem.querySelector('a').style.cssText = 'color: white'
        }
        menuItems[2].querySelector('a').style.cssText = 'border-bottom: 1px solid white; color: white';
    }

    else if(this.scrollY >= window.innerHeight - 100){
        header.style.cssText = 'background: #046261'
        for(let elem of menuItems){
            elem.querySelector('a').style.cssText = 'color: white;'
        }
        menuItems[1].querySelector('a').style.cssText = 'border-bottom: 1px solid white; color: white';
    }
    else{
        header.style.cssText = 'background: none'
        // menuItems.querySelector('a')[0].style.cssText = 'border-bottom: 1px solid #814C97'
        for(let elem of menuItems){
            elem.querySelector('a').style.cssText = 'color: black'
        }
        menuItems[0].querySelector('a').style.cssText = 'border-bottom: 1px solid #814C97;';
    }
}

headerScroll();

window.addEventListener('scroll', function() {
    headerScroll();
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
