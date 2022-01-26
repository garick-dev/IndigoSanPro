document.addEventListener("DOMContentLoaded", (ev) => {


    const bannerBtnEl = document.querySelectorAll(".button_banner");
    const workBtnEl = document.querySelector(".button_work");
    const priceListBtnEl = document.querySelector(".button_services--transparent");
    const modalFormEl = document.querySelector(".modal__form");
    const modalPriceListEl = document.querySelector(".modal__price-list");
    const headerEl = document.querySelector(".header__left");
    const burgerButtonEl = document.querySelector(".burger");
    const modalPoliticEl = document.querySelector(".modal_politic");
    const politicBtnEl = document.querySelector(".politic");
    const menuEl = document.querySelector(".menu").innerHTML;

    let burgerMenuMobileEl = `<div class="burger-menu">
                        <div class="overlay overlay_burger-menu">
                            <ul class="menu-mobile">
                            ${menuEl}
                            </ul>
                        </div>
                    </div>`;

    const closeForm = () => {
        document.addEventListener("click", (ev) => {
            if (ev.target && ev.target.classList.contains("overlay") || ev.target && ev.target.classList.contains("menu__link")) {
                document.body.style.overflowY = "auto";
                modalFormEl.classList.add("hidden");
                modalPriceListEl.classList.add("hide");
                modalPoliticEl.classList.add("hidden");
                const mobileMenuEl = document.querySelector(".burger-menu");
                mobileMenuEl.parentNode.removeChild(mobileMenuEl);

            }
        })
    }
    closeForm();

   const showModalForBanner = () => {
       bannerBtnEl.forEach(element => {
           element.addEventListener("click", (ev) => {
               ev.preventDefault();
               if (modalFormEl.classList.contains("hidden")) {
                   modalFormEl.classList.remove("hidden");
                   document.body.style.overflowY = "hidden";
               }
           })
       });
   }
    showModalForBanner();


    const showModalForWork = () => {
            workBtnEl.addEventListener("click", (ev) => {
                ev.preventDefault();
                if (modalFormEl.classList.contains("hidden")) {
                    modalFormEl.classList.remove("hidden");
                    document.body.style.overflowY = "hidden";
                }
            })

    }
    showModalForWork();

    const showPriceList = () => {
        priceListBtnEl.addEventListener("click", (ev) => {
            ev.preventDefault();
            if (modalPriceListEl.classList.contains("hide")) {
                modalPriceListEl.classList.remove("hide");
                document.body.style.overflowY = "hidden";
            }
            else {
                modalPriceListEl.classList.add("hide");
            }
        })
    }
    showPriceList();

    const showMobileMenu = () => {
        burgerButtonEl.addEventListener("click", (ev) => {
            ev.preventDefault();
            headerEl.insertAdjacentHTML("beforeend", burgerMenuMobileEl);
            document.body.style.overflowY = "hidden";
        })
    }
    showMobileMenu();

    const showPolitic = () => {
        politicBtnEl.addEventListener("click", (ev) => {
            ev.preventDefault();
            if (modalPoliticEl.classList.contains("hidden")) {
                modalPoliticEl.classList.remove("hidden");
                document.body.style.overflowY = "hidden";
            }
        })
    }
    showPolitic();

   const glideBanner= new Glide('.glide_banner', {
        type: 'slider',
        animationDuration: 2000,
        // autoplay: 5000,
        perTouch: 1,
        perView: 1,
        startAt: 0,
        rewind: false,
        keyboard: false,
        gap: 0,
        breakpoints: {
            1280: {
                perView: 1
            },

            500: {
                perView: 1
            }
        }
    })
    glideBanner.mount();
   const glideServices= new Glide('.glide_services', {
        type: 'slider',
        animationDuration: 1500,
       perTouch: 1,
        perView: 1,
        startAt: 0,
       focusAt: 1,
        rewind: false,
        keyboard: false,
        gap: 30,
        breakpoints: {
            1280: {
                perView: 1
            },

            500: {
                perView: 1
            }
        }
    })
    glideServices.mount();

   const glideAbout= new Glide('.glide_about', {
        type: 'slider',
        animationDuration: 1500,
       perTouch: 1,
        perView: 1,
        startAt: 0,
       focusAt: 0,
        rewind: false,
        keyboard: false,
        gap: 0,
        breakpoints: {
            1280: {
                perView: 1
            },

            500: {
                perView: 1
            }
        }
    })
    glideAbout.mount();

    const glideWork= new Glide('.glide_work', {
        type: 'slider',
        animationDuration: 1500,
        perTouch: 1,
        perView: 3,
        startAt: 1,
        focusAt: "2",
        rewind: false,
        keyboard: false,
        gap: 30,
        breakpoints: {
            768: {
                perView: 3
            },

            500: {
                perView: 2
            },

        }
    })
    glideWork.mount();

    const glidePriceList= new Glide('.glide_price-list', {
        type: 'slider',
        animationDuration: 1500,
        perTouch: 1,
        perView: 1,
        startAt: 0,
        focusAt: 0,
        rewind: false,
        keyboard: false,
        gap: 30,
        breakpoints: {
            1280: {
                perView: 1
            },

            500: {
                perView: 1
            }
        }
    })
    glidePriceList.mount();




});

