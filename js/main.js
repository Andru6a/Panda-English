(function () {
    // Навигация

    document.addEventListener('click', navLinks)


    function navLinks (e){
        const burgerIcon = e.target.closest('.nav__items--special')
        if(!burgerIcon) return

        console.log('сработало')

    }







})()