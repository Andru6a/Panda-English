(function () {


    // Навигация

    document.addEventListener('click', navLinks)


    function navLinks(e) {
        const navMenu1 = e.target.closest('.nav__title-menu1')
        const navMenu2 = e.target.closest('.nav__title-menu2')
        const navOpener = document.querySelector('.body')
        const navOpener2 = document.querySelector('.body')
        const navItem = document.querySelector('.nav__link')

        if (!navMenu1 & !navMenu2) {
            navOpener.classList.remove('body--opened-nav1', 'body--opened-nav2')
            return
        }
        // if (document.documentElement.clientWidth > 900) return

        if (navMenu1) {
            navOpener2.classList.remove('body--opened-nav2')

            if (!navOpener.classList.contains('body--opened-nav1')) {
                navOpener.classList.add('body--opened-nav1')
            } else
                navOpener.classList.remove('body--opened-nav1')


        } else {
            navOpener.classList.remove('body--opened-nav1')
            if (!navOpener2.classList.contains('body--opened-nav2')) {
                navOpener2.classList.add('body--opened-nav2')
            } else
                navOpener2.classList.remove('body--opened-nav2')
        }
    }


    // const word = document.querySelector('.word');

    // function animateWord(word) {
    //     let text = word.dataset.text;
    //     text.split('').forEach((letter, ind) => {
    //         let div = document.createElement('div');
    //         div.innerText = letter;
    //         setTimeout(() => word.append(div), ind * 200);
    //     })
    // }

    // animateWord(word);

})()