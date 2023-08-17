(function () {


    // =================Навигация==============================================================

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



    // ====================Анимация текста HERO=======================================================

    let title = document.getElementById('title-change');

    setInterval(() => title.innerText = 'взрослых', 4000);
    setInterval(() => title.innerText = 'детей', 8000);



    // =========================Замена текста в Hero button==========================================

    document.addEventListener('scroll', changeButton)

    function changeButton() {
        const allButton = document.querySelectorAll('.button')
        if (document.documentElement.clientWidth > 600) {
            allButton.forEach(e => {
                if (e.innerHTML = 'Записаться на занятия') return
                else e.innerHTML = 'Записаться на занятия'
            })
        }
        else {
            allButton.forEach(e => {
                if (e.innerHTML = 'Оставить заявку') return
                else e.innerHTML = 'Оставить заявку'
            })
        }
    }



    // ==============================Бургер ====================================================

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



    // ==============================Nav Header==============================

    const navTitle = document.querySelectorAll('.nav__title');
    const navItem = document.querySelector('.nav__items-plus');
    navTitle.forEach((e) => {
        e.addEventListener('click', () => {
            const navToggle = e.nextElementSibling
            if (navToggle !== null) {
                if (navToggle.classList.contains('nav__items-plus--opened')) {
                    navToggle.classList.remove('nav__items-plus--opened');
                    navToggle.style.maxHeight = 0;
                } else {
                    navToggle.classList.add('nav__items-plus--opened');
                    navToggle.style.maxHeight = navItem.scrollHeight + 'px';
                }
            }
        });
    })



    //==============================Nav в Footer==============================

    const navTitleFooter = document.querySelectorAll('.footer__mobile .footer__nav-title')
    const navItemFooter = document.querySelector('.footer__mobile .footer__nav-list');
    navTitleFooter.forEach((e) => {
        e.addEventListener('click', () => {
            if (document.documentElement.clientWidth > 800) return
            const navToggle = e.nextElementSibling
            if (navToggle.classList.contains('footer__nav-list--opened')) {
                navToggle.classList.remove('footer__nav-list--opened');
                navToggle.style.maxHeight = 0;
            } else {
                navToggle.classList.add('footer__nav-list--opened');

                console.log(navItemFooter)
                navToggle.style.maxHeight = navItemFooter.scrollHeight + 'px';
            }
        });
    })



    //============================== Swiper Who==============================

    let menu = ['Детей и Подростков', 'Взрослых', 'Компаний'];
    new Swiper('.who__slider', {
        direction: 'vertical',
        effect: 'cards',
        grabCursor: true,
        cardsEffect: {
            perSlideRotate: 0,
            perSlideOffset: 10,
            slideShadows: false,
        },

        pagination: {
            el: '.who__pagination',
            bulletClass: 'who__pag',
            bulletActiveClass: 'who__pag--active',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
    });

    // Swiper Who--mobile

    new Swiper('.who__slider--mobile', {
        slidesPerView: 1.05,
        spaceBetween: 11,
        breakpoints: {
            450: {
                slidesPerView: 1.4,
            },
            480: {
                slidesPerView: 1.4,
            },
            701: {
                slidesPerView: 2.2,
            },
        }
    });



    // ==============================Swiper Why==============================

    new Swiper('.why__slider', {
        effect: 'cards',
        direction: 'vertical',
        grabCursor: true,
        cardsEffect: {
            slideShadows: false,
            perSlideOffset: 10,
        },
        navigation: {
            nextEl: '.why__next',
            prevEl: '.why__prev',
        },
    });



    // ==============================Swiper Skills==============================

    new Swiper('.skills__slider', {
        direction: 'vertical',
        navigation: {
            nextEl: '.skills__next',
            prevEl: '.skills__prev',
        },

        pagination: {
            el: '.skills__pagination',
            clickable: true,
        },

    });

    // Swiper Skills--mobile

    new Swiper('.skills__slider--mobile', {
        direction: 'horizontal',
        navigation: {
            nextEl: '.skills__next--mobile',
            prevEl: '.skills__prev--mobile',
        },

        pagination: {
            el: '.skills__pagination--mobile',
            clickable: true,
        },
    });



    // ==============================Swiper Nubmers==============================

    new Swiper('.bonus__slider', {
        direction: 'vertical',
        autoplay: true,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    // Swiper Nubmers--mobile

    new Swiper('.bonus__slider--mobile', {
        slidesPerView: 3.2,
        autoplay: true,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            600: {
                slidesPerView: 2.75,
                spaceBetween: -100,
            },
            900: {
                slidesPerView: 2.9,
            },
        }

    });



    // ==============================Swiper Testimonials==============================

    videoSlider = new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        pagination: {
            el: '.testimonials__slider-pagination',
            clickable: true,
        }
    });
    // Пауза на видео
    videoSlider.on('slideChange', function () {
        video1.pause()
        video2.pause()

        playButton1.classList.remove('video__controls-play--active')
        playButton2.classList.remove('video__controls-play--active')
    })



    // Swiper Testimonials-2

    new Swiper('.testimonials__slider2', {
        // autoplay: true,
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        pagination: {
            el: '.testimonials__slider2-pagination',
            type: "fraction",
        }
    });



    // ==============================Swiper-Toggle Testimonials==========+ пауза на видео====================

    const slideToogle = document.querySelector('.testimonials')
    document.addEventListener('click', changeSlider)

    slideToogle.classList.add('testimonials-video')
    function changeSlider(e) {
        const videoButton = e.target.closest('.testimonials__button--video')
        const photoButton = e.target.closest('.testimonials__button--photo')

        if (!videoButton && !photoButton) return
        if (videoButton) {
            slideToogle.classList.remove('testimonials-photo')
            slideToogle.classList.add('testimonials-video')
        }
        if (photoButton) {
            slideToogle.classList.remove('testimonials-video')
            slideToogle.classList.add('testimonials-photo')

            // Пауза на видео
            video1.pause()
            video2.pause()
            playButton1.classList.remove('video__controls-play--active')
            playButton2.classList.remove('video__controls-play--active')

        }

    }



    // ==============================Testimonials Video Controls !1==============================

    const video1 = document.getElementById('testimonials__slide-video1')
    const playButton1 = document.getElementById('video__controls-play1')

    playButton1.addEventListener('click', (e) => {
        if (video1.paused) {
            video1.play()
            playButton1.classList.add('video__controls-play--active')
        } else {
            video1.pause()
            playButton1.classList.remove('video__controls-play--active')
        }
    })

    const volume1 = document.getElementById('video__controls-volume1')
    video1.volume = '0.3'
    volume1.addEventListener('mousemove', (e) => {
        video1.volume = e.target.value
    })

    const progress = document.getElementById('video-progress1')

    video1.addEventListener('timeupdate', () => {
        const progressBar = progress.querySelector('.video__progress-filled')
        const percentage = (video1.currentTime / video1.duration) * 100
        progressBar.style.width = `${percentage}%`
    })

    // ==============================Testimonials Video Controls !2==============================

    const video2 = document.getElementById('testimonials__slide-video2')
    const playButton2 = document.getElementById('video__controls-play2')

    playButton2.addEventListener('click', (e) => {
        if (video2.paused) {
            video2.play()
            playButton2.classList.add('video__controls-play--active')
        } else {
            video2.pause()
            playButton2.classList.remove('video__controls-play--active')
        }
    })

    const volume2 = document.getElementById('video__controls-volume2')
    video2.volume = '0.3'
    volume2.addEventListener('mousemove', (e) => {
        video2.volume = e.target.value
    })

    const progress2 = document.getElementById('video-progress2')

    video2.addEventListener('timeupdate', () => {
        const progressBar = progress2.querySelector('.video__progress-filled')
        const percentage = (video2.currentTime / video2.duration) * 100
        progressBar.style.width = `${percentage}%`
    })



    // ==============================Swiper Testimonials-Clients==============================

    new Swiper('.testimonialsClients__slider', {
        slidesPerView: 1.2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.testimonialsClients__next',
            prevEl: '.testimonialsClients__prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 1.2,
            },
            1200: {
                slidesPerView: 1.5,
            }
        },
    });


    //Testimonials-Clients Show More button

    const btnMore = document.querySelector('.testimonialsClients__button')
    btnMore.addEventListener('click', btnMoreOpener)

    function btnMoreOpener() {
        const dots = document.getElementById('more__dots');
        const moreText = document.getElementById('more');

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnMore.innerHTML = "Показать больше";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnMore.innerHTML = "Показать меньше";
            moreText.style.display = "inline";
        }
    }

    const allTestimonials = document.querySelectorAll('.testimonialsClients__slide')
    const numberTestimonials = document.querySelector('.testimonialsCliens__queantity')
    numberTestimonials.textContent = allTestimonials.length


    // ==============================Swiper Teachers==============================

    new Swiper('.teachers__slider', {
        slidesPerView: 1.8,
        centeredSlides: true,
        grabCursor: true,
        slideToClickedSlide: true,
        breakpoints: {
            450: {
                slidesPerView: 1.8,
            },
            600: {
                slidesPerView: 3,
            }
        }
    });



})()










