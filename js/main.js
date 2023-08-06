(function () {


    // Навигация

    document.addEventListener('click', navLinks)

    function navLinks(e) {
        const navMenu1 = e.target.closest('.nav__title-menu1')
        const navMenu2 = e.target.closest('.nav__title-menu2')
        const navOpener = document.querySelector('.body')
        const navItem = document.querySelector('.nav__link')

        if (!navMenu1 & !navMenu2) {
            navOpener.classList.remove('body--opened-nav1', 'body--opened-nav2')
            return
        }
        if (document.documentElement.clientWidth < 900) return

        if (navMenu1) {
            navOpener.classList.remove('body--opened-nav2')

            if (!navOpener.classList.contains('body--opened-nav1')) {
                navOpener.classList.add('body--opened-nav1')
            } else
                navOpener.classList.remove('body--opened-nav1')

        } else {
            navOpener.classList.remove('body--opened-nav1')
            if (!navOpener.classList.contains('body--opened-nav2')) {
                navOpener.classList.add('body--opened-nav2')
            } else
                navOpener.classList.remove('body--opened-nav2')
        }
    }



    // Анимация текста HERO

    let title = document.getElementById('title-change');

    setInterval(() => title.innerText = 'взрослых', 4000);
    setInterval(() => title.innerText = 'детей', 8000);



    // Бургер 

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')
        const burgerNavLink2 = e.target.closest('.nav__title--special')
        const headerBg = document.querySelector('.header__top')

        if (!burgerIcon && !burgerNavLink && !burgerNavLink2) return
        if (document.documentElement.clientWidth > 900) return

        e.preventDefault()
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
            headerBg.classList.add('header__top--none')
        } else {
            document.body.classList.remove('body--opened-menu')
            setTimeout(() => {

                headerBg.classList.remove('header__top--none')
            }, 400);

            const closeNav = document.querySelectorAll('.nav__items-plus')
            closeNav.forEach((e) => {
                e.classList.remove('nav__items-plus--opened')
                e.style.maxHeight = 0;
            })
        }
    }



    // Nav Header


    const navTitle = document.querySelectorAll('.nav__title');
    const navItem = document.querySelector('.nav__items-plus');
    navTitle.forEach((e) => {
        e.addEventListener('click', () => {
            const navToggle = e.nextElementSibling
            if (navToggle !== null){
            if (navToggle.classList.contains('nav__items-plus--opened')) {
                navToggle.classList.remove('nav__items-plus--opened');
                navToggle.style.maxHeight = 0;
            } else {
                navToggle.classList.add('nav__items-plus--opened');
                navToggle.style.maxHeight = navItem.scrollHeight + 'px';
            }}
        });
    })



    // Nav в Footer

    // const navOpenerFooter = document.querySelectorAll('.footer__nav-title')

    // navOpenerFooter.forEach((e) => {
    //     e.addEventListener("click", function () {
    //         const navToggle = e.nextElementSibling
    //         navToggle.classList.toggle('footer__nav-list--opened')
    //     })
    // })


    const navTitleFooter = document.querySelectorAll('.footer__nav-title')
    const navItemFooter = document.querySelector('.footer__nav-list');
    navTitleFooter.forEach((e) => {
        e.addEventListener('click', () => {
            const navToggle = e.nextElementSibling
            if (navToggle !== null){
            if (navToggle.classList.contains('footer__nav-list--opened')) {
                navToggle.classList.remove('footer__nav-list--opened');
                navToggle.style.maxHeight = 0;
            } else {
                navToggle.classList.add('footer__nav-list--opened');
                navToggle.style.maxHeight = navItemFooter.scrollHeight + 'px';
            }}
        });
    })

})()














    // const navTitle = document.querySelectorAll('.nav__title');
    //     const navItem = document.querySelectorAll('.nav__items-plus');
    //     navItem.forEach((e) => {
    //         console.log(e)
    //         if (!document.body.classList.contains('body--opened-menu')) {
    //             navItem.classList.remove('nav__items-plus--opened');
    //             navItem.style.maxHeight = 0;
    //         }
    //     })


    // Nav в Burger

    // const navOpenerHeader = document.querySelectorAll('.nav__title')

    // navOpenerHeader.forEach((e) => {
    //     e.addEventListener("click", function () {
    //         const navToggle = e.nextElementSibling
    //         if (navToggle !== null) {
    //             navToggle.classList.toggle('nav__items-plus--opened')
    //         }
    //     })
    // })


    // const clickBody = document.body.addEventListener('click', navClosePlus)
    // const navItemPlus = document.querySelector('.nav__items-plus');

    // function navClosePlus(){
    //     if (clickBody) navItemPlus.style.maxHeight = 0;
    // }