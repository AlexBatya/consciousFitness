
window.onload = function() {
    const parallax = document.querySelector('.baner .baner__body');
    if(parallax){
        const logo = document.querySelector('.logo img');
        const lena = document.querySelector('.lena img');
        const cloud = document.querySelector('.cloud img');

        const forLogo = 20;
        const forLena = 100;
        const forCloud = 15;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallax(){
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            //Передаём стили
            logo.style.cssText = `transform: translate(${positionX / forLogo}%, ${positionY / forLogo}%)`
            lena.style.cssText = `transform: translate(${positionX / forLogo}%, ${positionY / forLena}%)`
            cloud.style.cssText = `transform: translate(${positionX / forCloud}%, ${positionY / forCloud}%)`
            requestAnimationFrame(setMouseParallax);
        }

        setMouseParallax();

        parallax.addEventListener("mousemove", (e) => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight= parallax.offsetHeight;

            // Ноль по середине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight/ 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

        let thresholdSets = [];
        for(let i = 0; i <= 1.0; i += 0.0005){
            thresholdSets.push(i);
        };

        const callback = function(entries, observer){
            const scrollTopProcent = window.pageYOffset/ parallax.offsetHeight * 100;
            setParallaxItemsStyle(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {
            threshold: thresholdSets
        })

        observer.observe(document.querySelector('.content'))

        function setParallaxItemsStyle(scrollTopProcent) {
            logo.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;
            lena.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
            cloud.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 10}%);`;
        }
    }
}