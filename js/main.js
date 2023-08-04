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

    // добавить закрытие по клику по ссылке
    // добавить закрытие по клику по ссылке
    // добавить закрытие по клику по ссылке && !burgerNavLink

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        // const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }



    // Nav в Burger

    const navItem = document.querySelectorAll('.nav__items')

    navItem.forEach((e) => {

        const navUl = e.querySelector('.nav__items-plus')
        const navUlOpened = document.querySelector('.nav__items-plus')
        const a = document.querySelector('.nav__title')

        if (!(e.querySelector('.nav__items-plus') !== null)) return

        // console.log(e)
        e.addEventListener("click", function () {
            // console.log(e)
            // console.log(e.a == null)
            // if (navUl.classList.contains('nav__items-plus--opened') && e.a === true) {
            //     navUl.classList.remove('nav__items-plus--opened')
            // }
            // else 
            navUl.classList.add('nav__items-plus--opened')
        })
    })



    // const ab = document.querySelectorAll('.nav__title')

    // ab.forEach((e) => {
    //     const abc = e.querySelector('.nav__items-plus')
    //     e.addEventListener('click', function () {
    //         abc.classList.remove('nav__items-plus--opened')
    //     })
    // })

    
    // navClose.forEach((e) => {
    //     if (!(e.querySelector('div .nav__items-plus') !== null)) return
    //     console.log(e)
    //     e.addEventListener("click", function () {
    //         console.log(e)
    //         if (navUl.classList.contains('nav__items-plus--opened')) {
    //             navUl.classList.remove('nav__items-plus--opened')
    //         }
    //     })
    // })

})()